import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialit\u00e9 \u2014 Avenue de l\u2019Horloge",
  description:
    "Politique de confidentialit\u00e9 du site avenue-de-lhorloge.com \u2014 donn\u00e9es collect\u00e9es, cookies, droits des utilisateurs.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container-wide">
          <h1>Politique de Confidentialit&eacute;</h1>
          <p>Comment nous traitons vos donn&eacute;es personnelles sur avenue-de-lhorloge.com</p>
        </div>
      </div>

      <div className="prose-content">
        <div className="container-narrow">
          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des donn&eacute;es collect&eacute;es sur avenue-de-lhorloge.com
            est l&apos;&eacute;diteur du site, joignable &agrave; l&apos;adresse :{" "}
            <a href="mailto:contact@avenue-de-lhorloge.com">contact@avenue-de-lhorloge.com</a>
          </p>

          <h2>2. Donn&eacute;es collect&eacute;es</h2>
          <p>Ce site collecte tr&egrave;s peu de donn&eacute;es personnelles :</p>
          <ul>
            <li>
              <strong>Donn&eacute;es de navigation :</strong> adresse IP, pages visit&eacute;es, dur&eacute;e
              de session &mdash; via des outils d&apos;analyse anonymis&eacute;s.
            </li>
            <li>
              <strong>Donn&eacute;es de contact :</strong> uniquement si vous nous &eacute;crivez
              directement par e-mail. Ces donn&eacute;es ne sont pas stock&eacute;es sur le site.
            </li>
          </ul>
          <p>
            Nous ne collectons pas de nom, pr&eacute;nom, adresse postale ou num&eacute;ro de t&eacute;l&eacute;phone
            sans votre accord explicite.
          </p>

          <h2>3. Finalit&eacute;s du traitement</h2>
          <ul>
            <li>Am&eacute;liorer la qualit&eacute; du contenu et l&apos;exp&eacute;rience utilisateur</li>
            <li>R&eacute;pondre aux messages re&ccedil;us par e-mail</li>
            <li>Analyser l&apos;audience du site de fa&ccedil;on agr&eacute;g&eacute;e et anonymis&eacute;e</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>Ce site utilise uniquement des cookies techniques essentiels au bon fonctionnement :</p>
          <ul>
            <li><strong>Cookies de session</strong> : n&eacute;cessaires &agrave; la navigation</li>
            <li><strong>Cookies d&apos;analyse</strong> : mesure d&apos;audience anonymis&eacute;e (sans identification personnelle)</li>
          </ul>
          <p>
            Ces cookies ne permettent pas d&apos;identifier personnellement les visiteurs et ne
            sont pas partag&eacute;s avec des tiers &agrave; des fins publicitaires.
          </p>

          <h2>5. Partage des donn&eacute;es</h2>
          <p>
            Nous ne vendons ni ne louons vos donn&eacute;es &agrave; des tiers. Les donn&eacute;es peuvent &ecirc;tre
            partag&eacute;es avec nos prestataires techniques (h&eacute;bergeur Vercel, outils d&apos;analyse)
            dans le strict cadre de la fourniture du service.
          </p>

          <h2>6. Conservation des donn&eacute;es</h2>
          <p>
            Les donn&eacute;es de navigation sont conserv&eacute;es de mani&egrave;re anonymis&eacute;e.
            Les e-mails de contact sont conserv&eacute;s le temps n&eacute;cessaire au traitement
            de votre demande, puis supprim&eacute;s.
          </p>

          <h2>7. Vos droits</h2>
          <p>Conform&eacute;ment au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d&apos;acc&egrave;s &agrave; vos donn&eacute;es</li>
            <li>Droit de rectification</li>
            <li>Droit &agrave; l&apos;effacement (&laquo;&thinsp;droit &agrave; l&apos;oubli&thinsp;&raquo;)</li>
            <li>Droit &agrave; la limitation du traitement</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous &agrave; :{" "}
            <a href="mailto:contact@avenue-de-lhorloge.com">contact@avenue-de-lhorloge.com</a>
          </p>

          <h2>8. Contact DPO</h2>
          <p>
            Pour toute question relative &agrave; la protection de vos donn&eacute;es personnelles,
            vous pouvez contacter notre d&eacute;l&eacute;gu&eacute; &agrave; la protection des donn&eacute;es &agrave; l&apos;adresse
            suivante : <a href="mailto:contact@avenue-de-lhorloge.com">contact@avenue-de-lhorloge.com</a>
          </p>

          <h2>9. Modifications</h2>
          <p>
            Nous nous r&eacute;servons le droit de modifier cette politique &agrave; tout moment.
            La version en vigueur est toujours celle accessible sur cette page.
          </p>

          <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem", marginTop: "3rem" }}>
            Derni&egrave;re mise &agrave; jour : janvier 2025
          </p>
        </div>
      </div>
    </>
  );
}
