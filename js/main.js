/* ==========================================================================
   Site du moniteur de plongée — script
   1. Menu sur mobile
   2. Formulaire de réservation : envoi de la demande au moniteur (Web3Forms)
   3. Bons cadeaux : boutons de paiement (liens Stripe)
   4. Page de confirmation

   Les réglages (clé du formulaire, liens de paiement) sont dans js/config.js.
   ========================================================================== */

(function () {
  "use strict";

  var reglages = window.REGLAGES || { cleFormulaire: "", paiement: {} };
  var parametres = new URLSearchParams(window.location.search);

  /* 1. Menu sur mobile --------------------------------------------------- */

  var boutonMenu = document.querySelector(".menu-bouton");
  var menu = document.getElementById("menu");

  if (boutonMenu && menu) {
    boutonMenu.addEventListener("click", function () {
      var ouvert = menu.classList.toggle("est-ouvert");
      boutonMenu.setAttribute("aria-expanded", ouvert ? "true" : "false");
    });

    menu.addEventListener("click", function (evenement) {
      if (evenement.target.closest("a")) {
        menu.classList.remove("est-ouvert");
        boutonMenu.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* 2. Réservation -------------------------------------------------------
     Les boutons du site pointent vers reservation.html?offre=bapteme
     (ou collectif, individuel, autre) et reservation.html?bon=1 pour
     quelqu'un qui a reçu un bon cadeau. */

  var formulaire = document.getElementById("formulaire-demande");

  if (formulaire) {
    var champs = formulaire.elements;
    var zoneErreurs = document.getElementById("erreurs");
    var blocCode = document.getElementById("champ-code");
    var boutonEnvoi = formulaire.querySelector('button[type="submit"]');

    var offreDemandee = parametres.get("offre");
    if (offreDemandee && champs.offre.querySelector('option[value="' + offreDemandee + '"]')) {
      champs.offre.value = offreDemandee;
    }

    /* Bon cadeau : le champ du code n'apparaît que si la case est cochée */
    function afficherCode() {
      blocCode.hidden = !champs.a_un_bon.checked;
    }
    champs.a_un_bon.checked = parametres.get("bon") === "1";
    champs.a_un_bon.addEventListener("change", afficherCode);
    afficherCode();

    /* Pas de date dans le passé */
    var aujourdHui = new Date();
    champs.date.min =
      aujourdHui.getFullYear() + "-" +
      String(aujourdHui.getMonth() + 1).padStart(2, "0") + "-" +
      String(aujourdHui.getDate()).padStart(2, "0");

    function montrerErreur(texte) {
      zoneErreurs.textContent = texte;
      zoneErreurs.hidden = false;
      zoneErreurs.scrollIntoView({ block: "nearest" });
    }

    formulaire.addEventListener("submit", function (evenement) {
      evenement.preventDefault();

      var nom = champs.prenom.value.trim();
      var email = champs.email.value.trim();
      var personnes = parseInt(champs.personnes.value, 10);
      var code = champs.code_bon.value.trim().toUpperCase();
      var avecBon = champs.a_un_bon.checked;
      var erreurs = [];

      if (!nom) {
        erreurs.push("Indiquez votre prénom et votre nom.");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erreurs.push("Indiquez une adresse e-mail valide : la confirmation y sera envoyée.");
      }
      if (!personnes || personnes < 1) {
        erreurs.push("Indiquez le nombre de personnes.");
      }
      if (champs.date.value && champs.date.value < champs.date.min) {
        erreurs.push("La date souhaitée est déjà passée.");
      }
      if (avecBon && !/^[A-Z0-9-]{4,20}$/.test(code)) {
        erreurs.push("Indiquez le code de votre bon cadeau, tel qu'il figure sur le bon.");
      }
      if (erreurs.length > 0) {
        montrerErreur(erreurs.join(" "));
        return;
      }
      zoneErreurs.hidden = true;

      var libelleOffre = champs.offre.options[champs.offre.selectedIndex].text;
      var dateLisible = champs.date.value ? champs.date.value.split("-").reverse().join("/") : "";

      /* Ce que le moniteur lit dans son e-mail */
      var demande = {
        access_key: reglages.cleFormulaire,
        subject: "Nouvelle demande : " + libelleOffre + " — " + nom + (avecBon ? " — BON CADEAU" : ""),
        from_name: "Site de réservation",
        "Activité": libelleOffre,
        "Date souhaitée": dateLisible || "à convenir",
        "Nombre de personnes": String(personnes),
        name: nom,
        email: email,
        "Téléphone": champs.telephone.value.trim() || "non renseigné",
        "Bon cadeau": avecBon ? code : "non",
        "Précisions": champs.precisions.value.trim() || "aucune",
        botcheck: champs.botcheck.checked
      };

      var suite = new URLSearchParams({
        type: "reservation",
        nom: nom.split(" ")[0],
        offre: libelleOffre,
        personnes: String(personnes)
      });
      if (dateLisible) {
        suite.set("date", dateLisible);
      }
      if (avecBon) {
        suite.set("code", code);
      }

      /* Mode démonstration : aucune clé dans js/config.js */
      if (!reglages.cleFormulaire) {
        suite.set("demo", "1");
        window.location.href = "confirmation.html?" + suite.toString();
        return;
      }

      boutonEnvoi.disabled = true;
      boutonEnvoi.textContent = "Envoi en cours…";

      fetch(formulaire.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(demande)
      })
        .then(function (reponse) {
          return reponse.json();
        })
        .then(function (resultat) {
          if (!resultat.success) {
            throw new Error(resultat.message);
          }
          window.location.href = "confirmation.html?" + suite.toString();
        })
        .catch(function () {
          boutonEnvoi.disabled = false;
          boutonEnvoi.textContent = "Envoyer la demande";
          montrerErreur("La demande n'a pas pu être envoyée. Réessayez dans un instant, ou contactez Gaël au [TÉLÉPHONE].");
        });
    });
  }

  /* 3. Bons cadeaux ------------------------------------------------------
     Chaque bouton « Payer et offrir » porte data-paiement="bonBapteme"
     (ou bonIndividuel, bonCollectif, bonApnee). S'il a un lien Stripe dans
     js/config.js, il y mène ; sinon il reste en mode démonstration. */

  document.querySelectorAll("[data-paiement]").forEach(function (bouton) {
    var lien = (reglages.paiement || {})[bouton.dataset.paiement];
    if (lien) {
      bouton.href = lien;
    }
  });

  /* 4. Page de confirmation ---------------------------------------------- */

  var blocReservation = document.getElementById("bloc-reservation");
  var blocCadeau = document.getElementById("bloc-cadeau");

  if (blocReservation && blocCadeau) {
    var estCadeau = parametres.get("type") === "cadeau";
    blocReservation.hidden = estCadeau;
    blocCadeau.hidden = !estCadeau;
    document.getElementById("demo").hidden = parametres.get("demo") !== "1";

    var codeRecu = parametres.get("code");
    document.getElementById("recap-code").hidden = !codeRecu;
    document.getElementById("suite-bon").hidden = !codeRecu;
    document.getElementById("suite-paiement").hidden = Boolean(codeRecu);

    document.querySelectorAll("[data-recap]").forEach(function (element) {
      var valeur = parametres.get(element.dataset.recap);
      if (valeur) {
        element.textContent = valeur;
      }
    });
  }
})();
