import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "\u00c0 propos \u2014 Avenue de l\u2019Horloge",
  description:
    "L\u2019histoire d\u2019Avenue de l\u2019Horloge, notre mission et nos valeurs. Un site d\u00e9di\u00e9 aux passionn\u00e9s d\u2019horlogerie.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="container-wide">
          <span className="section-label" style={{ color: "var(--color-primary-light)" }}>
            Notre histoire
          </span>
          <h1>&Agrave; propos d&apos;Avenue<br />de l&apos;Horloge</h1>
          <p style={{ maxWidth: "560px" }}>
            Un site n&eacute; d&apos;une passion pour la m&eacute;canique horlog&egrave;re et d&apos;un constat :
            les bons conseils techniques manquaient sur le web francophone.
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="prose-content">
        <div className="container-narrow">

          {/* Histoire */}
          <h2>Notre Histoire</h2>
          <p>
            Avenue de l&apos;Horloge est n&eacute; en 2018 de la passion commune de deux amateurs &eacute;clair&eacute;s :
            un ing&eacute;nieur m&eacute;canique et un horloger passionn&eacute;, tous deux frustr&eacute;s par le manque
            de ressources techniques s&eacute;rieuses en fran&ccedil;ais sur l&apos;entretien et la r&eacute;paration des montres.
          </p>
          <p>
            Au fil des ann&eacute;es, ce qui n&apos;&eacute;tait au d&eacute;part qu&apos;un blog personnel s&apos;est transform&eacute;
            en une r&eacute;f&eacute;rence reconnue par les passionn&eacute;s d&apos;horlogerie francophones. Aujourd&apos;hui,
            des dizaines de milliers de lecteurs nous font confiance chaque mois pour des conseils
            concrets, test&eacute;s et v&eacute;rifi&eacute;s.
          </p>

          {/* Mission */}
          <h2>Notre Mission</h2>
          <p>
            D&eacute;mocratiser le savoir-faire horloger. Nous pensons que chaque propri&eacute;taire de montre,
            quelle que soit sa gamme, m&eacute;rite d&apos;acc&eacute;der &agrave; des informations de qualit&eacute; pour entretenir,
            r&eacute;parer et comprendre son garde-temps.
          </p>
          <p>
            Nous couvrons toutes les th&eacute;matiques : entretien pr&eacute;ventif, r&eacute;parations courantes,
            guides d&apos;achat par profil et budget, stockage, style et port. Notre approche est
            toujours technique, factuelle, et accessible &mdash; jamais condescendante ni commerciale.
          </p>

          {/* Valeurs */}
          <h2>Nos Valeurs</h2>
          <div className="grid-3" style={{ margin: "1.5rem 0 2.5rem" }}>
            {[
              { icon: "\u2699\uFE0F", title: "Rigueur technique", desc: "Chaque guide est test\u00e9 et v\u00e9rifi\u00e9 avant publication. Nous ne relayons pas des informations douteuses." },
              { icon: "\uD83C\uDFAF", title: "Ind\u00e9pendance", desc: "Aucun fabricant ne finance notre contenu. Nos recommandations sont libres de tout conflit d\u2019int\u00e9r\u00eat." },
              { icon: "\uD83D\uDCDA", title: "P\u00e9dagogie", desc: "Technique ne veut pas dire inaccessible. Nous expliquons clairement, sans jargon excessif." },
            ].map((v, i) => (
              <div key={i} className="feature-card" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.05rem", marginBottom: "0.5rem" }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Équipe */}
          <h2>Notre &Eacute;quipe</h2>
          <p>
            Avenue de l&apos;Horloge est anim&eacute; par une petite &eacute;quipe de passionn&eacute;s ind&eacute;pendants.
            Nous ne pr&eacute;tendons pas &ecirc;tre des horlogers professionnels certifi&eacute;s &mdash; nous sommes
            des amateurs s&eacute;rieux, des bricoleurs rigoureux qui documentent leur pratique et
            partagent leurs d&eacute;couvertes.
          </p>
          <p>
            Nos articles sont relus par des professionnels de la fili&egrave;re quand cela s&apos;impose,
            notamment pour les guides de r&eacute;paration technique avanc&eacute;e. Nous signalons toujours
            clairement quand une intervention n&eacute;cessite un horloger certifi&eacute;.
          </p>

          {/* CTA */}
          <div style={{
            marginTop: "3rem",
            padding: "2rem",
            background: "var(--color-accent)",
            borderRadius: "12px",
            textAlign: "center",
          }}>
            <h3 style={{ color: "#fff", fontFamily: "var(--font-serif)", marginBottom: "0.75rem" }}>
              Une question ? Une suggestion ?
            </h3>
            <p style={{ color: "rgba(249,245,238,0.75)", marginBottom: "1.5rem" }}>
              Nous lisons tous les messages et adorons &eacute;changer avec nos lecteurs.
            </p>
            <Link href="/contact" className="btn-primary">Nous contacter</Link>
          </div>
        </div>
      </div>
    </>
  );
}
