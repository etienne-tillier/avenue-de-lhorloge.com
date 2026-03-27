import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact \u2014 Avenue de l\u2019Horloge",
  description:
    "Contactez l\u2019\u00e9quipe d\u2019Avenue de l\u2019Horloge pour toute question sur l\u2019horlogerie, les guides ou les partenariats.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container-wide">
          <span className="section-label" style={{ color: "var(--color-primary-light)" }}>
            Nous \u00e9crire
          </span>
          <h1>Contactez-nous</h1>
          <p>
            Une question technique ? Un sujet \u00e0 aborder ? Nous lisons chaque message
            avec attention.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="prose-content">
        <div className="container-narrow">
          <div style={{
            background: "var(--color-bg-card)",
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            padding: "3rem",
            textAlign: "center",
            marginBottom: "3rem",
          }}>
            <div style={{
              width: "72px",
              height: "72px",
              background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", marginBottom: "0.75rem" }}>
              Envoyez-nous un message
            </h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Pour nous contacter, il vous suffit d&apos;envoyer un e-mail &agrave; l&apos;adresse
              ci-dessous. Nous r&eacute;pondons g&eacute;n&eacute;ralement sous 48 heures ouvrables.
            </p>
            <div style={{
              background: "var(--color-bg)",
              border: "1.5px solid var(--color-primary)",
              borderRadius: "8px",
              padding: "1rem 2rem",
              display: "inline-block",
            }}>
              <p style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.25rem",
                color: "var(--color-accent)",
                fontWeight: 600,
                margin: 0,
                userSelect: "all",
              }}>
                contact@avenue-de-lhorloge.com
              </p>
            </div>
          </div>

          <div className="grid-3">
            {[
              {
                icon: "\uD83D\uDCD6",
                title: "Demande d\u2019article",
                desc: "Vous souhaitez qu\u2019on traite un sujet sp\u00e9cifique ? Proposez-nous votre id\u00e9e.",
              },
              {
                icon: "\uD83D\uDD27",
                title: "Question technique",
                desc: "Vous avez un probl\u00e8me pr\u00e9cis avec votre montre ? D\u00e9crivez-le, nous vous orienterons.",
              },
              {
                icon: "\uD83E\uDD1D",
                title: "Partenariat",
                desc: "Vous \u00eates horloger, marque ou d\u00e9taillant ? Parlons collaboration.",
              },
            ].map((item, i) => (
              <div key={i} className="feature-card" style={{ textAlign: "center", padding: "1.75rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: "3rem",
            padding: "1.75rem",
            background: "linear-gradient(135deg, var(--color-accent) 0%, #2D4A7A 100%)",
            borderRadius: "12px",
            color: "rgba(249,245,238,0.8)",
          }}>
            <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", marginBottom: "0.75rem" }}>
              Avant d&apos;\u00e9crire&hellip;
            </h3>
            <p style={{ lineHeight: 1.7, marginBottom: 0, fontSize: "0.92rem" }}>
              V\u00e9rifiez d&apos;abord notre{" "}
              <Link href="/blog" style={{ color: "var(--color-primary-light)" }}>blog</Link>
              {" "}&mdash; votre question est peut-\u00eatre d\u00e9j\u00e0 trait\u00e9e dans l&apos;un de nos guides.
              Nous avons couvert des centaines de probl\u00e9matiques horlog\u00e8res&nbsp;!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
