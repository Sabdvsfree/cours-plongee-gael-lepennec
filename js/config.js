/* ==========================================================================
   RÉGLAGES DU SITE — le seul fichier à modifier pour la mise en service.
   Voir README, « Mise en service ».

   Tant qu'une valeur est vide, le site fonctionne en mode démonstration :
   rien n'est envoyé ni payé, et la page de confirmation l'indique.
   ========================================================================== */

window.REGLAGES = {

  /* Clé Web3Forms : reçue par e-mail après inscription sur web3forms.com
     avec l'adresse du moniteur. Les demandes de réservation arrivent
     dans cette boîte. Exemple : "1a2b3c4d-1234-5678-9abc-def012345678" */
  cleFormulaire: "",

  /* Liens de paiement Stripe des bons cadeaux, un par offre.
     Exemple : "https://buy.stripe.com/xxxxxxxx" */
  paiement: {
    bonBapteme: "",
    bonIndividuel: "",
    bonCollectif: ""
  }

  /* Le lien de paiement de l'ACOMPTE n'est pas sur le site :
     le moniteur l'envoie dans son e-mail de confirmation de date. */
};
