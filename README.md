# Site de Gaël Le Pennec, moniteur de plongée

Site vitrine avec demande de réservation pour un moniteur de plongée indépendant à Paris, qui enseigne surtout en fosse et peut se déplacer. Projet portfolio « PO IA ».

Le site est en HTML, CSS et JavaScript simples : rien à installer, aucun outil de compilation.

Les choix de structure viennent d'un benchmark de sites et de fiches de plongée (document « Benchmark — sites de plongée et choix pour notre site »).

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : accroche, votre moniteur, trois offres, parcours, galerie, avis, déplacements, bon cadeau, questions fréquentes |
| `bapteme.html` | Fiche complète du baptême : chiffres clés, déroulé, compris, à apporter, conditions |
| `cours-collectifs.html` | Fiche des cours en petit groupe |
| `cours-individuels.html` | Fiche des cours en tête-à-tête |
| `reservation.html` | Demande de réservation, avec date souhaitée |
| `offrir.html` | Choix et paiement d'un bon cadeau, sans date |
| `confirmation.html` | Récapitulatif et étapes suivantes, en deux variantes : réservation ou bon cadeau |
| `mentions-legales.html` | Canevas des mentions légales, annulation et météo |
| `css/styles.css` | Toute la mise en forme. Couleurs et polices en haut du fichier, dans `:root` |
| `js/config.js` | Réglages : clé du formulaire et liens de paiement. Le seul fichier à modifier pour la mise en service |
| `js/main.js` | Menu mobile, envoi des demandes, boutons de paiement, page de confirmation |

## Pourquoi le site est construit ainsi

| Choix | Raison tirée du benchmark |
|---|---|
| Trois cartes : baptême, cours collectifs, cours individuels | Ce sont les trois formats qu'il veut proposer ; le benchmark montre la même échelle du baptême vers les cours |
| Prix « entrée de la fosse comprise » | Deux fiches sur trois près de Paris facturent l'entrée en plus : l'annoncer comprise évite la mauvaise surprise |
| « Toute l'année, près de Paris » dans le bandeau | C'est l'argument commun des baptêmes en fosse : pas de saison, pas de météo, pas de trajet |
| Quatre chiffres clés par offre | Durée, profondeur, âge et taille du groupe sont les premières questions d'un débutant |
| Prix sur chaque carte | Les visiteurs ne veulent pas appeler pour connaître un prix |
| Annulation et report sous les boutons | Les plateformes l'annoncent d'emblée |
| Section « Un groupe, une autre fosse, une sortie en mer ? » | Il peut se déplacer : la demande passe par un devis plutôt que par une offre à prix fixe |
| Page « Offrir » séparée de la réservation, sans date | Le bon cadeau figure sur toutes les fiches étudiées, et celui qui offre ne connaît pas la date : c'est le bénéficiaire qui la choisit |
| Section « Votre moniteur » juste sous l'accroche | C'est l'avantage d'un indépendant sur une plateforme : on voit qui encadre avant de voir les prix |
| Page dédiée au baptême | La fiche la plus complète du panel est aussi la plus rassurante |
| Neuf questions fréquentes | Les réponses existent sur les fiches concurrentes, mais éparpillées |
| Formulaire avec date souhaitée, sans calendrier | Le calendrier en temps réel suppose un outil à choisir après l'entretien |
| Téléphone dans l'en-tête, site pensé pour le mobile | Plus d'une visite sur deux se fait sur téléphone |

## Voir le site sur son ordinateur

1. Ouvrir le dossier dans VS Code (Fichier > Ouvrir le dossier).
2. Installer l'extension **Live Server** (onglet Extensions).
3. Clic droit sur `index.html` > **Open with Live Server**.

Sans extension, un double-clic sur `index.html` suffit aussi.

## Mettre le projet sur GitHub depuis VS Code

1. Onglet **Contrôle de code source** > **Publier sur GitHub**.
2. Choisir un nom de dépôt, par exemple `cours-plongee-gael-lepennec`.
3. Pour chaque modification ensuite : message court, **Valider** (commit), puis **Synchroniser** (push).

## Mettre le site en ligne avec GitHub Pages

1. Sur github.com, ouvrir le dépôt > **Settings** > **Pages**.
2. Choisir **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
3. Après une à deux minutes, l'adresse du site s'affiche sur cette même page.

GitHub Pages demande un dépôt public avec un compte gratuit. Tant que le site contient des crochets, mieux vaut garder l'adresse pour soi.

## Ce qu'il reste à remplacer

Tout ce qui est entre crochets. Dans VS Code : **Rechercher dans les fichiers** (Ctrl+Maj+F) puis taper `[`.

- [ ] `[ZONE DE DÉPLACEMENT]`
- [ ] Nom et adresse de la ou des fosses, temps de trajet depuis Paris, règles de la fosse (maillot, bonnet, casier)
- [ ] `[TÉLÉPHONE]` : dans le texte, et dans les liens `tel:+33000000000` (rechercher `tel:`)
- [ ] `[ADRESSE E-MAIL]`, `[RÉSEAUX SOCIAUX]`
- [ ] Pour chaque offre : `[PRIX]`, `[DURÉE]`, `[PROFONDEUR]`, `[ÂGE]`, `[NOMBRE]`
- [ ] Cours collectifs : public visé, niveau requis, jours et horaires, taille des groupes, inscription à la séance ou au cycle
- [ ] Cours individuels : niveaux acceptés, pack de séances ou non
- [ ] Les cours préparent-ils une certification ? Si oui, laquelle et avec quel organisme (FFESSM, PADI, SSI)
- [ ] `[DIPLÔME]`, numéro de carte professionnelle, assureur
- [ ] `[NOTE]/5 sur [NOMBRE] avis` : à supprimer s'il n'a pas encore d'avis
- [ ] Trois avis réels, avec l'accord des personnes
- [ ] Les neuf réponses des questions fréquentes
- [ ] Les photos : le site affiche pour l'instant des **photos d'illustration fictives** (Pexels, libres de droits), chargées depuis images.pexels.com. Les remplacer par les vraies photos de Gaël (dossier `images/`) avant la mise en ligne publique : chaque photo est précédée du commentaire `Photo d'illustration à remplacer`
- [ ] `[DÉLAI]` d'annulation et de réponse, validité des bons cadeaux
- [ ] Apnée : formules proposées, prix, diplôme d'apnée
- [ ] Les mentions légales, à faire vérifier avant la mise en ligne publique

## Hypothèses à confirmer pendant l'entretien

Le texte du site affirme ces points sans qu'ils aient été confirmés :

- Il peut encadrer seul, contre rémunération, les trois offres (selon son diplôme exact)
- Le baptême se fait à un élève pour un moniteur
- Le matériel et l'entrée de la fosse sont compris dans le prix
- L'annulation ou le report est gratuit jusqu'à un certain délai
- Il propose des cours collectifs et des cours individuels, sans formation certifiante mise en avant
- Il se déplace pour des groupes, d'autres fosses ou des sorties en mer
- Il propose des bons cadeaux pour les trois offres, payés en ligne avant l'envoi du bon
- Il accepte d'encaisser par Stripe (compte à son nom) et de valider chaque date à la main par e-mail
- Aucun acompte : tout se règle sur place le jour J (espèces, chèque ou carte via Stripe), un bon cadeau dispense de paiement
- Il propose aussi de l'apnée (découverte, cours collectifs, cours individuels)
- Le déroulé du baptême en cinq étapes (page `bapteme.html`)
- Le déroulé des cours (pages `cours-collectifs.html` et `cours-individuels.html`)

## Comment le site fonctionne

Le site n'a ni serveur ni base de données. Il s'appuie sur deux services gratuits à l'ouverture, et sur la boîte e-mail du moniteur.

| Besoin | Outil | Coût |
|---|---|---|
| Recevoir les demandes de réservation | Web3Forms : le formulaire envoie chaque demande par e-mail au moniteur | Gratuit jusqu'à 250 demandes par mois |
| Vendre les bons cadeaux | Liens de paiement Stripe : une page de paiement par carte, sans code | Pas d'abonnement, une commission par paiement |
| Encaisser la carte le jour J | Application Stripe Dashboard (Tap to Pay) ou QR code d'un lien de paiement | Pas de terminal, une commission par paiement |
| Valider les dates | La boîte e-mail du moniteur : il répond au client | Gratuit |
| Suivre les bons cadeaux | Un tableau privé tenu par le moniteur (jamais dans ce dépôt) | Gratuit |

### Parcours 1 : réserver une plongée

1. Le client remplit le formulaire de `reservation.html` : plongée, date souhaitée, nombre de personnes, nom, e-mail, téléphone facultatif, précisions. Il ne paie rien.
2. Le moniteur reçoit un e-mail « Nouvelle demande : … » avec toutes les informations.
3. Il vérifie le créneau de la fosse, puis répond au client : date confirmée.
4. Le jour J, le client règle sur place : espèces, chèque, ou carte (sans contact sur le téléphone du moniteur avec Tap to Pay, ou QR code d'un lien de paiement Stripe).

### Parcours 2 : offrir un bon cadeau

1. L'acheteur choisit un bon sur `offrir.html` et clique sur « Payer et offrir » : il arrive sur la page de paiement Stripe de ce bon.
2. Sur cette page, il indique le prénom du bénéficiaire et un petit mot (champs personnalisés Stripe), puis paie. Stripe le renvoie sur `confirmation.html?type=cadeau`.
3. Le moniteur est prévenu par Stripe. Il crée un code unique dans son tableau des bons (par exemple `PLG-4K7Q`), et envoie le bon par e-mail à l'acheteur.

### Parcours 3 : utiliser un bon cadeau

1. Le bénéficiaire va sur `reservation.html?bon=1` (lien « J'ai reçu un bon cadeau » sur l'accueil, la page Offrir et le pied de page).
2. Il coche « J'ai un bon cadeau » et saisit son code. L'e-mail reçu par le moniteur porte la mention « BON CADEAU » dans son objet.
3. Le moniteur vérifie le code dans son tableau, le marque comme utilisé, et confirme la date. Rien à payer.

Le site vérifie seulement que le code a une forme plausible. C'est le moniteur qui vérifie qu'il existe et qu'il n'a pas déjà servi.

## Mise en service

Tant que `js/config.js` est vide, le site reste en mode démonstration : rien n'est envoyé ni payé, et la page de confirmation l'affiche.

### 1. Recevoir les demandes (Web3Forms)

1. Sur web3forms.com, saisir l'adresse e-mail du moniteur pour obtenir une clé d'accès, reçue par e-mail.
2. La coller dans `js/config.js`, champ `cleFormulaire`.
3. Faire une demande de test sur le site en ligne et vérifier qu'elle arrive, y compris dans les courriers indésirables.

La clé est visible dans le code du site : c'est prévu ainsi par Web3Forms. Elle permet seulement d'envoyer des messages vers la boîte du moniteur.

### 2. Encaisser (Stripe)

1. Le moniteur ouvre un compte Stripe à son nom, avec son numéro SIRET et un compte bancaire à son nom (un compte personnel séparé suffit).
2. Il crée quatre **liens de paiement** pour les bons depuis le tableau de bord Stripe :

| Lien | Prix | Réglages |
|---|---|---|
| Bon baptême | [PRIX] € | Quantité modifiable. Champs personnalisés : « Prénom du bénéficiaire », « Petit mot (facultatif) ». Après le paiement : rediriger vers `https://[ADRESSE DU SITE]/confirmation.html?type=cadeau` |
| Bon cours individuel | [PRIX] € | Mêmes réglages |
| Bon cours collectif | [PRIX] € | Mêmes réglages |
| Bon découverte de l'apnée | [PRIX] € | Mêmes réglages |

3. Coller les quatre liens des bons dans `js/config.js`, rubrique `paiement`.
4. Pour le jour J : installer l'application Stripe Dashboard sur son téléphone (iPhone sous iOS 17 ou plus, ou Android) et activer Tap to Pay. En secours, créer un lien de paiement par formule et imprimer son QR code.

Commencer en **mode test** de Stripe pour essayer les paiements sans vraie carte, puis passer en mode réel.

### 3. Le tableau des bons cadeaux

Un tableur privé (Google Sheets, Excel ou Notion), **jamais dans ce dépôt public**, avec une ligne par bon :

| Code | Offre | Acheteur | Bénéficiaire | Date d'achat | Valable jusqu'au | Utilisé le |
|---|---|---|---|---|---|---|

Pour le bon lui-même, un modèle Canva avec le prénom, l'offre, le code et la date de validité, exporté en PDF.

### 4. Les modèles d'e-mail du moniteur

À préparer une fois, puis copier-coller :

- **Date confirmée** : date, heure, adresse de la fosse, ce qu'il faut apporter, montant à régler sur place (espèces, chèque ou carte).
- **Date confirmée, avec bon cadeau** : date, heure, adresse, ce qu'il faut apporter, « rien à payer ».
- **Date indisponible** : deux ou trois autres créneaux proposés.
- **Envoi du bon cadeau** : le PDF du bon et la marche à suivre pour réserver.
- **Rappel de la veille** : heure, adresse, ce qu'il faut apporter.

## Suite prévue

- Corriger les contenus après l'entretien
- Mise en service : Web3Forms, liens Stripe, tableau des bons cadeaux
- Assistant de questions fréquentes et ses evals
- Référencement local et fiche d'établissement Google

Site publié avec GitHub Pages.
