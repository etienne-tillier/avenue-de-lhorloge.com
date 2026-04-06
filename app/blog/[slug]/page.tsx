import { getBlogPostBySlug } from "@/lib/blog";
import { MarkdownLink } from "@/components/MarkdownLink";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { injectDofollowMarker } from "@/lib/dofollow";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const buildAlternatesByLocale = (post: { slug: string; default_locale?: string | null; translations?: unknown }) => {
  const siteOriginRaw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteOrigin = siteOriginRaw
    ? siteOriginRaw.replace(/\/+$/, "")
    : `https://${(process.env.SITE_DOMAIN || "").replace(/^https?:\/\//, "").replace(/\/+$/, "")}`;

  if (!siteOrigin || siteOrigin === "https://") {
    return {};
  }

  const languages: Record<string, string> = {};
  const defaultLocale = post.default_locale || "fr-FR";
  languages[defaultLocale] = `${siteOrigin}/blog/${post.slug}`;

  if (post.translations && typeof post.translations === "object") {
    for (const [locale, value] of Object.entries(post.translations as Record<string, unknown>)) {
      if (!value || typeof value !== "object") continue;
      const translation = value as Record<string, unknown>;
      const translatedSlug = typeof translation.slug === "string" ? translation.slug : "";
      const status = typeof translation.status === "string" ? translation.status : "published";

      if (!translatedSlug || status !== "published") continue;
      languages[locale] = `${siteOrigin}/blog/${translatedSlug}`;
    }
  }

  return languages;
};

export const revalidate = 21600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    alternates: { languages: buildAlternatesByLocale(post) },
    title: post.seo_title || post.h1,
    description: post.meta_description || post.excerpt || "",
    openGraph: {
      title: post.seo_title || post.h1,
      description: post.meta_description || post.excerpt || "",
      images: post.cover?.file_url ? [{ url: post.cover.file_url }] : [],
    },
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  // Gestion traduction
  let displayH1 = post.h1;
  let displayBody = post.body_md;
  if (post.slug !== slug && post.translations) {
    for (const [, val] of Object.entries(post.translations)) {
      if ((val as { slug?: string }).slug === slug) {
        displayH1 = (val as { h1?: string }).h1 || displayH1;
        displayBody = (val as { body_md?: string }).body_md || displayBody;
        break;
      }
    }
  }

  const bodyMd = injectDofollowMarker(displayBody || "");
  const categories = post.categories || [];

  return (
    <article>
      {/* Cover image */}
      {post.cover?.file_url && (
        <div style={{ position: "relative", width: "100%", height: "480px", overflow: "hidden" }}>
          <Image
            src={post.cover.file_url}
            alt={post.cover.alt || displayH1}
            fill
            priority
            className="object-cover"
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(26,43,74,0.7) 0%, transparent 60%)",
          }} />
        </div>
      )}

      {/* Article header */}
      <div style={{ background: "var(--color-accent)", padding: "2.5rem 0 3rem" }}>
        <div className="container-narrow">
          {/* Breadcrumb */}
          <nav aria-label="Fil d&apos;Ariane" style={{ marginBottom: "1.5rem" }}>
            <span style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", fontFamily: "var(--font-sans)" }}>
              <Link href="/" style={{ color: "var(--color-primary-light)" }}>Accueil</Link>
              <span style={{ color: "rgba(249,245,238,0.4)" }}>/</span>
              <Link href="/blog" style={{ color: "var(--color-primary-light)" }}>Blog</Link>
              {categories[0] && (
                <>
                  <span style={{ color: "rgba(249,245,238,0.4)" }}>/</span>
                  <Link
                    href={`/blog?category=${categories[0].slug}`}
                    style={{ color: "var(--color-primary-light)" }}
                  >
                    {categories[0].label}
                  </Link>
                </>
              )}
            </span>
          </nav>

          {/* Cat\u00e9gories */}
          {categories.length > 0 && (
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <Link key={cat.id} href={`/blog?category=${cat.slug}`} className="category-badge" style={{ borderColor: "rgba(196,150,106,0.5)", color: "var(--color-primary-light)", background: "rgba(196,150,106,0.1)" }}>
                  {cat.label}
                </Link>
              ))}
            </div>
          )}

          <h1 style={{ color: "#fff", marginBottom: "1rem" }}>{displayH1}</h1>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            {post.published_at && (
              <span style={{ color: "rgba(249,245,238,0.6)", fontSize: "0.85rem", fontFamily: "var(--font-sans)" }}>
                {formatDate(post.published_at)}
              </span>
            )}
            {post.author?.name && (
              <span style={{ color: "rgba(249,245,238,0.6)", fontSize: "0.85rem", fontFamily: "var(--font-sans)" }}>
                &middot; Par {post.author.name}
              </span>
            )}
          </div>

          {/* Language switcher */}
          <div style={{ marginTop: "1rem" }}>
            <LanguageSwitcher post={post} currentSlug={slug} />
          </div>
        </div>
      </div>

      {/* Contenu article */}
      <div className="section">
        <div className="container-narrow">
          <div className="article-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{ a: MarkdownLink }}
            >
              {bodyMd}
            </ReactMarkdown>
          </div>

          {/* FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <div style={{ marginTop: "3rem", padding: "2rem", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "8px" }}>
              <h2 style={{ marginBottom: "1.5rem" }}>Questions fr&eacute;quentes</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {post.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem", color: "var(--color-accent)" }}>
                      {faq.question}
                    </h3>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Auteur */}
          {post.author && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--color-border)",
            }}>
              {post.author.avatar_url && (
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--color-primary)" }}
                />
              )}
              <div>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", fontWeight: 600, color: "var(--color-accent)", margin: "0 0 0.25rem" }}>
                  {post.author.name}
                </p>
                {post.author.bio && (
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", margin: 0, lineHeight: 1.6 }}>
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Navigation retour */}
          <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--color-border)" }}>
            <Link href="/blog" className="btn-outline">
              &larr; Retour au blog
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
