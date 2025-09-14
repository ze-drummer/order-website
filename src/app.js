document.addEventListener("DOMContentLoaded", () => {
  const dessertSection = document.getElementById("dessert-selection");

  // On crée un bouton dans la section dessert
  const button = document.createElement("button");
  button.textContent = "Afficher les desserts";
  dessertSection.appendChild(button);

  // Liste de desserts
  const desserts = ["Tiramisu", "Mousse au chocolat", "Crème brûlée", "Cheesecake"];

  // Quand on clique, on ajoute les desserts avec cases à cocher
  button.addEventListener("click", () => {
    const form = document.createElement("form");

    desserts.forEach(dessert => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = dessert;

      label.appendChild(checkbox);
      label.append(" " + dessert);
      form.appendChild(label);
      form.appendChild(document.createElement("br"));
    });

    dessertSection.appendChild(form);

    // On désactive le bouton après ajout (évite doublons)
    button.disabled = true;
  });
});


