import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Blog Horlogerie \u2014 Guides & Conseils",
  description:
    "Tous nos articles sur l\u2019horlogerie : entretien, r\u00e9paration, choix de montres. Guides techniques pour passionn\u00e9s.",
};

const categories = [
  { slug: "entretien", label: "Entretien" },
  { slug: "reparation", label: "R\u00e9paration" },
  { slug: "guides", label: "Guides pratiques" },
  { slug: "marques", label: "Marques" },
  { slug: "style-port", label: "Style & Port" },
  { slug: "stockage", label: "Stockage" },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const category = params.category;

  const allPosts = await getPublishedBlogPosts();
  const posts = category
    ? allPosts.filter((p) =>
        (p.categories || []).some((c) => c?.slug === category)
      )
    : allPosts;

  const activeCategory = categories.find((c) => c.slug === category);

  return (
    <>
      {/* Header blog */}
      <div className="blog-header">
        <Image
          src="/images/blog-header-vintage-workshop.jpeg"
          alt="Atelier horloger vintage"
          fill
          className="object-cover"
          priority
        />
        <div className="blog-header-overlay" />
        <div className="container-wide blog-header-content">
          <span className="section-label" style={{ color: "var(--color-primary-light)" }}>
            Tous nos articles
          </span>
          <h1 style={{ color: "#fff", marginBottom: "0.75rem" }}>
            {activeCategory ? activeCategory.label : "Le Blog Horloger"}
          </h1>
          <p style={{ color: "rgba(249,245,238,0.8)", maxWidth: "560px", fontFamily: "var(--font-sans)", fontSize: "1rem" }}>
            Guides techniques, conseils pratiques et analyses approfondies sur l&apos;univers des montres.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container-wide">
          {/* Filtres catégories */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link
              href="/blog"
              className="category-badge"
              style={!category ? { background: "var(--color-primary)", color: "#fff", borderColor: "var(--color-primary)" } : {}}
            >
              Tous
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className="category-badge"
                style={category === cat.slug ? { background: "var(--color-primary)", color: "#fff", borderColor: "var(--color-primary)" } : {}}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Grille d'articles */}
          {posts.length === 0 ? (
            <div className="empty-state">
              <p>Aucun article publi&eacute; pour le moment.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
