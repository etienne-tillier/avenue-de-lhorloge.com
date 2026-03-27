import { getPostsByCategory, getCategoryBySlug } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const revalidate = 21600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  return {
    title: category ? `${category.label} — Guides Horlogerie` : "Catégorie",
    description: category?.description || `Articles de la catégorie ${slug} sur Avenue de l'Horloge.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  const posts = await getPostsByCategory(slug);

  if (!category && posts.length === 0) {
    notFound();
  }

  const categoryLabel = category?.label || slug;

  return (
    <div>
      {/* Header */}
      <div className="page-hero">
        <div className="container-wide">
          <span className="section-label" style={{ color: "var(--color-primary-light)" }}>
            Catégorie
          </span>
          <h1>{categoryLabel}</h1>
          {category?.description && (
            <p>{category.description}</p>
          )}
          <div style={{ marginTop: "1rem" }}>
            <Link href="/blog" style={{ color: "var(--color-primary-light)", fontFamily: "var(--font-sans)", fontSize: "0.88rem" }}>
              ← Retour au blog
            </Link>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="section">
        <div className="container-wide">
          {posts.length === 0 ? (
            <div className="empty-state">
              <p>Aucun article publié pour le moment.</p>
              <Link href="/blog" className="btn-outline">
                Voir tous les articles
              </Link>
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
    </div>
  );
}
