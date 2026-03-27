import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div className="footer-brand-name">Avenue de l&apos;Horloge</div>
            </Link>
            <p className="footer-brand-desc">
              Votre r&eacute;f&eacute;rence en mati&egrave;re d&apos;horlogerie : guides techniques, conseils
              d&apos;entretien, r&eacute;paration et expertise pour tous les passionn&eacute;s de montres.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Image src="/icon.svg" alt="Logo" width={28} height={28} />
              <span style={{ color: "rgba(249,245,238,0.5)", fontSize: "0.8rem" }}>
                Expert ind&eacute;pendant en horlogerie
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="footer-heading">Th&eacute;matiques</div>
            <ul className="footer-links">
              <li><Link href="/blog?category=entretien">Entretien</Link></li>
              <li><Link href="/blog?category=reparation">R&eacute;paration</Link></li>
              <li><Link href="/blog?category=guides">Guides pratiques</Link></li>
              <li><Link href="/blog?category=marques">Marques &amp; Mod&egrave;les</Link></li>
              <li><Link href="/blog?category=style-port">Style &amp; Port</Link></li>
              <li><Link href="/blog?category=stockage">Stockage</Link></li>
            </ul>
          </div>

          {/* Liens légaux */}
          <div>
            <div className="footer-heading">Informations</div>
            <ul className="footer-links">
              {siteConfig.footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Avenue de l&apos;Horloge &mdash; Tous droits r&eacute;serv&eacute;s.</p>
          <p>
            <Link href="/politique-confidentialite" style={{ color: "rgba(249,245,238,0.45)" }}>
              Politique de confidentialit&eacute;
            </Link>
            {" \u00b7 "}
            <Link href="/mentions-legales" style={{ color: "rgba(249,245,238,0.45)" }}>
              Mentions l&eacute;gales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
