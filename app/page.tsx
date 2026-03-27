import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/BlogCard";
import type { Metadata } from "next";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Avenue de l\u2019Horloge | Expert Montres & Horlogerie",
  description:
    "Guides experts en horlogerie : entretien, r\u00e9paration, choix de montres. Conseils techniques pour tous garde-temps, du quotidien au prestige.",
};

const expertiseItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Entretien & Maintenance",
    desc: "Protocoles d\u2019entretien pour prolonger la dur\u00e9e de vie de vos montres, de l\u2019acier inox au titane.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "R\u00e9paration Technique",
    desc: "Guides pas \u00e0 pas pour les r\u00e9parations courantes : verre, bracelet, m\u00e9canisme, \u00e9tanch\u00e9it\u00e9.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Guides Pratiques",
    desc: "Conseils de choix selon budget, occasion et style \u2014 du quotidien aux grandes occasions.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Marques & Mod\u00e8les",
    desc: "Analyses approfondies des grandes maisons et mod\u00e8les embl\u00e9matiques de l\u2019horlogerie mondiale.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: "Stockage & Conservation",
    desc: "M\u00e9thodes de stockage optimales pour prot\u00e9ger vos garde-temps et pr\u00e9server leur valeur.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "Style & Occasions",
    desc: "Quelle montre porter avec quel tenue ? Les codes vestimentaires de l\u2019horlogerie d\u00e9crypt\u00e9s.",
  },
];

export default async function HomePage() {
  const recentPosts = await getPublishedBlogPosts(6);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/hero-luxury-watches.jpeg"
            alt="Collection de montres de luxe"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="hero-overlay" />
        <div className="container-wide">
          <div className="hero-content animate-fade-up">
            <div className="hero-eyebrow">Expert Horlogerie Francophone</div>
            <h1>{"L\u2019Expertise Horloge\u0300re"}<br />{"a\u0300 Porte\u0301e de Main"}</h1>
            <p className="hero-lead">
              Guides techniques, conseils d&apos;entretien et r&eacute;paration pour tous vos
              garde-temps &mdash; du mod&egrave;le d&apos;entr&eacute;e de gamme &agrave; la haute horlogerie suisse.
            </p>
            <div className="hero-actions">
              <Link href="/blog" className="btn-primary">
                D&eacute;couvrir nos Guides
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/a-propos" className="btn-outline" style={{ borderColor: "rgba(249,245,238,0.5)", color: "#fff" }}>
                Notre Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIQUES */}
      <section style={{ background: "var(--color-accent)", padding: "2.5rem 0" }}>
        <div className="container-wide">
          <div className="grid-3" style={{ textAlign: "center" }}>
            {[
              { value: "500+", label: "Guides techniques" },
              { value: "15 ans", label: "D\u2019expertise horlog\u00e8re" },
              { value: "50 000+", label: "Passionn\u00e9s accompagn\u00e9s" },
            ].map((stat, i) => (
              <div key={i} style={{ padding: "1rem" }}>
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.2rem",
                  fontWeight: 600,
                  color: "var(--color-primary-light)",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(249,245,238,0.6)",
                  fontFamily: "var(--font-sans)",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="section" id="expertise">
        <div className="container-wide">
          <div className="grid-2">
            <div>
              <span className="section-label">Notre savoir-faire</span>
              <h2 className="section-title">Un Regard d&apos;Expert<br />sur Chaque Montre</h2>
              <div className="divider-gold" />
              <p className="section-subtitle">
                Avenue de l&apos;Horloge est n&eacute; d&apos;une passion profonde pour la m&eacute;canique horlog&egrave;re.
                Chaque guide est r&eacute;dig&eacute; par des passionn&eacute;s qui d&eacute;montent, entretiennent et
                r&eacute;parent des montres au quotidien &mdash; pas par des r&eacute;dacteurs g&eacute;n&eacute;ralistes.
              </p>
              <p style={{
                color: "var(--color-text-muted)",
                lineHeight: 1.75,
                marginTop: "1rem",
                fontSize: "0.95rem",
              }}>
                Notre approche : des conseils techniques pr&eacute;cis, des d&eacute;marches pas &agrave; pas
                test&eacute;es, des recommandations ind&eacute;pendantes. L&apos;horlogerie accessible &agrave; tous,
                sans compromis sur la rigueur.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/a-propos" className="btn-outline">
                  Notre histoire
                </Link>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", height: "480px" }}>
              <Image
                src="/images/expertise-watchmaker.jpeg"
                alt="Horloger expert au travail"
                fill
                className="object-cover"
                quality={85}
              />
              <div style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                background: "var(--color-accent)",
                border: "1px solid var(--color-primary)",
                borderRadius: "6px",
                padding: "1rem 1.25rem",
                boxShadow: "var(--shadow-card)",
              }}>
                <div style={{ color: "var(--color-primary-light)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-sans)", marginBottom: "0.25rem" }}>
                  Pr&eacute;cision horlog&egrave;re
                </div>
                <div style={{ color: "#fff", fontFamily: "var(--font-serif)", fontSize: "1.05rem" }}>1/1000e de mm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES THÉMATIQUES */}
      <section className="section section-cream" id="guides">
        <div className="container-wide">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Th&eacute;matiques</span>
            <h2 className="section-title">Tous nos Domaines d&apos;Expertise</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Six domaines couverts en profondeur pour r&eacute;pondre &agrave; toutes vos questions d&apos;horlogerie.
            </p>
          </div>
          <div className="grid-3">
            {expertiseItems.map((item, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", marginBottom: "0.6rem", color: "var(--color-accent)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENTRETIEN */}
      <section className="section" id="entretien">
        <div className="container-wide">
          <div className="grid-2" style={{ gap: "4rem" }}>
            <div style={{ position: "relative", height: "420px", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/images/maintenance-tools.jpeg"
                alt="Outils d&apos;entretien horloger"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            <div>
              <span className="section-label">Entretien</span>
              <h2 className="section-title">Prolongez la Vie<br />de vos Montres</h2>
              <div className="divider-gold" />
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                L&apos;entretien r&eacute;gulier est la cl&eacute; de la long&eacute;vit&eacute; d&apos;un garde-temps m&eacute;canique.
                R&eacute;vision compl&egrave;te, nettoyage du bracelet, v&eacute;rification de l&apos;&eacute;tanch&eacute;it&eacute; &mdash;
                nos guides vous accompagnent &agrave; chaque &eacute;tape.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {[
                  "R\u00e9vision compl\u00e8te : quand et pourquoi",
                  "Nettoyage des bracelets (acier, cuir, caoutchouc)",
                  "Contr\u00f4le de l\u2019\u00e9tanch\u00e9it\u00e9 : proc\u00e9dure et fr\u00e9quence",
                  "Conservation en remontoir automatique",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.6rem", fontSize: "0.92rem", color: "var(--color-text)" }}>
                    <span style={{ color: "var(--color-primary)", marginTop: "2px", flexShrink: 0 }}>&#10022;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/blog?category=entretien" className="btn-primary">
                Voir les guides entretien
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES COLLECTION */}
      <section className="section section-cream" id="collection">
        <div className="container-wide">
          <div className="grid-2" style={{ gap: "4rem" }}>
            <div>
              <span className="section-label">Guides &amp; Conseils</span>
              <h2 className="section-title">Choisir la Montre<br />Parfaite pour Vous</h2>
              <div className="divider-gold" />
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Du premier garde-temps au chef-d&apos;&oelig;uvre de haute horlogerie, notre expertise
                vous guide dans vos choix. Budget, style, occasion, pr&eacute;f&eacute;rences m&eacute;caniques
                &mdash; chaque profil trouve sa montre id&eacute;ale.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  { label: "Budget < 500\u20ac", desc: "Fiabilit\u00e9 & Rapport qualit\u00e9-prix" },
                  { label: "500 \u2013 2\u00a0000\u20ac", desc: "Mouvements de manufacture" },
                  { label: "2\u00a0000 \u2013 10\u00a0000\u20ac", desc: "Horlogerie de prestige" },
                  { label: "Haute Horlogerie", desc: "Pi\u00e8ces d\u2019exception" },
                ].map((item, i) => (
                  <div key={i} style={{ padding: "1rem", background: "white", border: "1px solid var(--color-border)", borderRadius: "6px" }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/blog?category=guides" className="btn-primary">
                Explorer les guides
              </Link>
            </div>
            <div style={{ position: "relative", height: "480px", borderRadius: "8px", overflow: "hidden" }}>
              <Image
                src="/images/guides-collection.jpeg"
                alt="Collection de montres guid\u00e9e"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DERNIERS ARTICLES */}
      <section className="section" id="blog">
        <div className="container-wide">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span className="section-label">Blog &amp; Actualit&eacute;s</span>
              <h2 className="section-title" style={{ margin: 0 }}>Nos Derniers Articles</h2>
            </div>
            <Link href="/blog" className="btn-outline">
              Tous les articles
            </Link>
          </div>

          {recentPosts.length === 0 ? (
            <div className="empty-state">
              <p>Aucun article publi&eacute; pour le moment.</p>
              <p style={{ fontSize: "0.9rem" }}>Revenez bient&ocirc;t pour d&eacute;couvrir nos guides horlogers.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PRÉCISION / CTA FINAL */}
      <section style={{ position: "relative", minHeight: "420px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/repair-precision.jpeg"
            alt="Pr\u00e9cision de la r\u00e9paration horlog\u00e8re"
            fill
            className="object-cover"
            quality={85}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(26,43,74,0.92) 0%, rgba(26,43,74,0.75) 100%)",
          }} />
        </div>
        <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "580px" }}>
            <span className="section-label">Notre engagement</span>
            <h2 style={{ color: "#fff", fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", marginBottom: "1.25rem" }}>
              La Pr&eacute;cision comme<br />Standard Absolu
            </h2>
            <p style={{ color: "rgba(249,245,238,0.8)", lineHeight: 1.75, marginBottom: "2rem", fontSize: "1.05rem" }}>
              Chaque article est relu par des passionn&eacute;s d&apos;horlogerie. Chaque conseil
              est test&eacute;. Chaque guide r&eacute;pond &agrave; une vraie question de vrai passionn&eacute;.
              C&apos;est notre promesse, et nous ne la compromettrons jamais.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/blog" className="btn-primary">
                Explorer le blog
              </Link>
              <Link href="/contact" className="btn-outline" style={{ borderColor: "rgba(249,245,238,0.5)", color: "#fff" }}>
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
