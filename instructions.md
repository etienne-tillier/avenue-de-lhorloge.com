## Description
## Avenue de l'Horloge - Expert en Horlogerie

**Avenue de l'Horloge** est un site spécialisé dans l'univers des montres, couvrant toutes les gammes et marques - du garde-temps accessible aux pièces de haute horlogerie. Contrairement aux sites généralistes, nous nous positionnons comme l'expert technique et pratique qui répond aux questions concrètes des passionnés d'horlogerie.

Notre mission est de capturer la longue traîne SEO en traitant des sujets ultra-spécifiques : que faire si une montre tombe dans l'eau, comment réparer le verre d'un modèle précis, quelles montres porter selon les occasions vestimentaires, comment entretenir et stocker ses garde-temps, ou encore comment gérer les bracelets. Le site vise un public d'amateurs éclairés et de collectionneurs recherchant des conseils techniques pointus et des guides pratiques détaillés, avec pour objectif de devenir LA référence en matière de savoir-faire horloger sur le web francophone.

## Prompt IA
Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- Nom du projet : Avenue de l'Horloge
- Domaine : avenue-de-lhorloge.com
- Type de site : Money site expert (SEO longue traîne)
- Thématiques : Horlogerie, montres, expertise technique
- Objectif business : Positionnement expert, affiliation, revenus publicitaires
- Audience cible : Passionnés d'horlogerie, collectionneurs, amateurs éclairés

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : Précis, Élégant, Technique, Intemporel, Raffiné
- **Références visuelles mentales** : Mécanismes d'horlogerie suisse, ateliers traditionnels, cadrans vintage, aiguilles dorées, cuir patiné, acier brossé
- **Émotions à évoquer** chez le visiteur : Confiance en l'expertise, fascination pour la mécanique, sentiment de précision et de qualité

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers horloger ci-dessus, l'agent développeur devra :
1. S'inspirer des tons classiques de l'horlogerie : or rose, acier brossé, bleu nuit profond, cuir cognac
2. Créer une palette UNIQUE avec :
   - Couleur principale (primary) : Inspirée de l'or rose des montres de prestige
   - Couleur secondaire (secondary) : Basée sur l'acier brossé des boîtiers
   - Couleur d'accent (accent) : Évoquant le bleu nuit des cadrans premium
   - Couleur de fond (background) : Rappelant la crème des cadrans vintage
   - Variante hover : Version saturée de l'accent
3. Assurer un contraste suffisant pour l'accessibilité technique

### Typographie
- Google Font principale : **Crimson Pro** (élégance classique, lisibilité technique)
- Font secondaire : **Inter** (pour les contenus techniques et specs)

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Avenue de l'Horloge | Expert Montres & Horlogerie"
- **Méta-description principale** : "Guides experts en horlogerie : entretien, réparation, choix de montres. Conseils techniques pour tous garde-temps, du quotidien au prestige."
- **Open Graph title** : "Avenue de l'Horloge - Votre Expert en Horlogerie"

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- Fichiers à mettre à jour :
  - `config/site.ts` (name, description, domain, navigation horlogerie)
  - `app/globals.css` (palette horlogère UNIQUE selon méthodologie section 1)
  - contenus de démo remplacés par expertise montres
  - configuration blog Supabase pour contenu technique

## 4. Images pré-générées - À TÉLÉCHARGER ET INTÉGRER

**Hero principal** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/avenue-de-lhorloge-com-home-hero-luxury-watches.jpeg

**Section expertise** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/avenue-de-lhorloge-com-home-expertise-watchmaker.jpeg

**Section entretien** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/avenue-de-lhorloge-com-home-maintenance-tools.jpeg

**Section guides** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/avenue-de-lhorloge-com-home-guides-collection.jpeg

**Section réparation** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/avenue-de-lhorloge-com-home-repair-precision.jpeg

**Page blog - Header** : https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/avenue-de-lhorloge-com-blog-header-vintage-workshop.jpeg

## 5. Contenu & structure à mettre en place
- Types de contenus à garder : blog technique, guides pratiques, comparatifs montres
- **Sections obligatoires sur la page d'accueil** (/) :
  - Hero : "L'Expertise Horlogère à Portée de Main" + CTA "Découvrir nos Guides"
  - Section Expertise : Présentation savoir-faire technique (image watchmaker)
  - Section Guides : Mise en avant guides pratiques (image collection)
  - Section Entretien : Focus maintenance/réparation (image tools)
  - Section Derniers Articles : Articles récents du blog
  - Section Précision : Engagement qualité/expertise (image precision)
- Navigation : Accueil, Guides, Entretien, Marques, Réparation, Blog, Contact
- Clusters thématiques : Entretien, Réparation, Choix & Achat, Style & Port, Stockage

## 6. Consignes éditoriales
- Ton à respecter : Expert mais accessible, technique sans jargon excessif, pédagogue
- Types d'articles attendus :
  * Guides techniques ("Comment réparer un verre de montre")
  * Conseils style ("Quelle montre avec une chemise rouge")
  * Maintenance ("Stocker ses montres sans les abîmer")
  * Troubleshooting ("Montre tombée dans l'eau : que faire")
  * Reviews marques et modèles spécifiques
- Contraintes : Éviter le commercial excessif, rester factuel et technique

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=avenue-de-lhorloge.com)
- Mise à jour `config/site.ts` avec navigation horlogerie
- **Création palette horlogère UNIQUE** selon méthodologie section 1
- Logos horlogers (`/public/logo.svg`, `/app/icon.svg`)
- **Intégration des images téléchargées** depuis les URLs R2 fournies
- Intégration blog Supabase avec filtrage domaine
- Test `npm run lint` et `npm run build`
- Configuration déploiement

## 8. Anti-patterns à éviter
❌ Design générique "site de montres"
❌ Palette copiée d'autres sites horlogers
❌ Ton trop commercial ou amateur
❌ Oublier les images pré-générées
❌ Navigation trop complexe pour l'expertise technique

## URLs à rediriger
avenue-de-lhorloge.com/collections/horloge-coucou

## Instructions redirection
Chaque URL doit rediriger vers la version blog.
Insérer /blog/ entre le domaine et le slug.
Les segments après le domaine sont concaténés avec des tirets pour former le slug.
Exemples:
www.offreslg.fr/tv-oled-c2g2 -> www.offreslg.fr/blog/tv-oled-c2g2
www.offreslg.fr/tv/check-status -> www.offreslg.fr/blog/tv-check-status