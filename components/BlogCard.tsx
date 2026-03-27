import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.categories?.[0];
  const slug = post.slug;

  return (
    <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
      <article className="blog-card">
        {/* Image de couverture */}
        <div className="blog-card-image">
          {post.cover?.file_url ? (
            <Image
              src={post.cover.file_url}
              alt={post.cover.alt || post.h1}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #1A2B4A 0%, #2D4A7A 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" stroke="#C4966A" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="32" r="22" fill="#F9F5EE" fillOpacity="0.1"/>
                <line x1="32" y1="32" x2="32" y2="12" stroke="#C4966A" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="32" y1="32" x2="18" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="32" cy="32" r="3" fill="#C4966A"/>
              </svg>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="blog-card-body">
          {category && (
            <div className="blog-card-category">{category.label}</div>
          )}
          <h3 className="blog-card-title">{post.h1}</h3>
          {post.excerpt && (
            <p className="blog-card-excerpt">{post.excerpt}</p>
          )}
          <div className="blog-card-meta">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
            {post.published_at && formatDate(post.published_at)}
            {post.author?.name && (
              <>
                <span style={{ color: "var(--color-border)" }}>·</span>
                <span>{post.author.name}</span>
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
