import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions L\u00e9gales \u2014 Avenue de l\u2019Horloge",
  description: "Mentions l\u00e9gales du site avenue-de-lhorloge.com \u2014 \u00e9diteur, h\u00e9bergeur, propri\u00e9t\u00e9 intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-wide">
          <h1>Mentions L&eacute;gales</h1>
          <p>Informations l&eacute;gales relatives au site avenue-de-lhorloge.com</p>
        </div>
      </div>

      <div className="prose-content">
        <div className="container-narrow">
          <h2>&Eacute;diteur du site</h2>
          <p>
            Le site <strong>avenue-de-lhorloge.com</strong> est &eacute;dit&eacute; &agrave; titre personnel
            par son fondateur, passionn&eacute; d&apos;horlogerie.
          </p>
          <ul>
            <li><strong>Nom du responsable de publication :</strong> Avenue de l&apos;Horloge</li>
            <li><strong>E-mail :</strong> contact@avenue-de-lhorloge.com</li>
            <li><strong>Site web :</strong> https://avenue-de-lhorloge.com</li>
          </ul>

          <h2>H&eacute;bergeur</h2>
          <ul>
            <li><strong>Raison sociale :</strong> Vercel Inc.</li>
            <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, USA</li>
            <li><strong>Site web :</strong> https://vercel.com</li>
          </ul>

          <h2>Propri&eacute;t&eacute; intellectuelle</h2>
          <p>
            L&apos;ensemble du contenu publi&eacute; sur avenue-de-lhorloge.com (textes, images,
            guides, illustrations) est prot&eacute;g&eacute; par le droit d&apos;auteur. Toute reproduction,
            m&ecirc;me partielle, sans autorisation &eacute;crite pr&eacute;alable est interdite.
          </p>
          <p>
            Les images utilis&eacute;es sur ce site proviennent de sources libres de droits ou
            ont &eacute;t&eacute; produites sp&eacute;cifiquement pour ce site. Les marques et logos de tiers
            mentionn&eacute;s restent la propri&eacute;t&eacute; de leurs d&eacute;tenteurs respectifs.
          </p>

          <h2>Responsabilit&eacute;</h2>
          <p>
            Les informations publi&eacute;es sur ce site sont donn&eacute;es &agrave; titre indicatif. Avenue
            de l&apos;Horloge s&apos;efforce de maintenir des informations &agrave; jour et exactes, mais
            ne saurait &ecirc;tre tenu responsable d&apos;erreurs ou omissions. Pour toute r&eacute;paration
            importante, consultez un horloger professionnel certifi&eacute;.
          </p>
          <p>
            Ce site peut contenir des liens hypertextes vers d&apos;autres sites. Avenue de
            l&apos;Horloge n&apos;est pas responsable du contenu des sites tiers vers lesquels ces
            liens pointent.
          </p>

          <h2>Cookies</h2>
          <p>
            Ce site utilise des cookies techniques n&eacute;cessaires &agrave; son fonctionnement.
            Pour en savoir plus, consultez notre{" "}
            <Link href="/politique-confidentialite">politique de confidentialit&eacute;</Link>.
          </p>

          <h2>Loi applicable</h2>
          <p>
            Le pr&eacute;sent site est soumis au droit fran&ccedil;ais. En cas de litige, et &agrave; d&eacute;faut
            de r&eacute;solution amiable, les tribunaux fran&ccedil;ais sont seuls comp&eacute;tents.
          </p>

          <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginTop: "3rem" }}>
            Derni&egrave;re mise &agrave; jour : janvier 2025
          </p>
        </div>
      </div>
    </>
  );
}
