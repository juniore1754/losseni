const titreInput = document.getElementById("titre");
const texteArea = document.getElementById("texte");
const status = document.getElementById("status");
const dateEl = document.getElementById("date");
const titreAffiche = document.getElementById("titreAffiche");
const dateSauvegarde = document.getElementById("dateSauvegarde");

// Date et heure en direct
function afficherDate() {
    const now = new Date();
    dateEl.textContent = now.toLocaleString("fr-FR", {
        dateStyle: "long",
        timeStyle: "short"
    });
}
setInterval(afficherDate, 1000);
afficherDate();

// Enregistrer
function enregistrer() {
    localStorage.setItem("titre_texte", titreInput.value);
    localStorage.setItem("contenu_texte", texteArea.value);
    localStorage.setItem("date_sauvegarde", new Date().toLocaleString("fr-FR"));

    titreAffiche.textContent = titreInput.value || "—";
    dateSauvegarde.textContent = localStorage.getItem("date_sauvegarde");

    status.textContent = "✅ Texte enregistré avec succès";
}

// Charger
function charger() {
    const titre = localStorage.getItem("titre_texte");
    const texte = localStorage.getItem("contenu_texte");
    const date = localStorage.getItem("date_sauvegarde");

    if (texte) {
        titreInput.value = titre || "";
        texteArea.value = texte;
        titreAffiche.textContent = titre || "—";
        dateSauvegarde.textContent = date;
        status.textContent = "📂 Texte chargé";
    } else {
        status.textContent = "❌ Aucun texte sauvegardé";
    }
}

// Effacer
function effacer() {
    localStorage.clear();
    titreInput.value = "";
    texteArea.value = "";
    titreAffiche.textContent = "—";
    dateSauvegarde.textContent = "—";
    status.textContent = "🗑 Texte supprimé";
}
