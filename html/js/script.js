window.onscroll = function () {
  scrollFunction();
}; //quand on scroll ça apelle scrollFunction

function scrollFunction() {
  //rend le bouton visible/invisible si on est en haut ou en bas

  let mybutton = document.getElementById("scrollToTopButton"); //definie mybutton sur le bouton présent dans l'index

  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    //si on dessend de 15px
    mybutton.style.opacity = 1;
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.opacity = 0;
    mybutton.style.visibility = "hidden";
  }
}

function topFunction() {
  //remonte tout en haut quand on clique
  let cont = 1; //compteur
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  console.log("nombre de fois appuyé :");
  cont = cont + 1;
}

function getTableau() {
    let tableau = document.getElementById("tableau_1");
    let tbody = tableau.querySelector("tbody");
  
    // Ajouter une nouvelle ligne
    let row = tbody.insertRow();
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
  
    // Demander les valeurs à l'utilisateur
    let prenom = prompt("Entrez le prénom :");
    let passion = prompt("Entrez la passion :");
    let age = parseInt(prompt("Entrez l'âge :"), 10); // Utilisation de parseInt pour un entier
  
    // Insérer les valeurs dans les cellules
    cell0.textContent = prenom;
    cell1.textContent = passion;
    cell2.textContent = age; // Affichage de l'âge sans décimales
  
    // Recalculer la moyenne des âges
    let somme = 0, count = 0;
    let rows = tbody.rows;
  
    for (let i = 0; i < rows.length; i++) {
      let valeur = parseInt(rows[i].cells[2].textContent, 10); // Utilisation de parseInt ici aussi
      somme += valeur;
      count++;
    }
  
    let ageMoyen = Math.floor(somme / count); // Calcul de la moyenne sans décimales
    let ageMoyCell = document.getElementById("ageMoy");
    if (ageMoyCell) {
      ageMoyCell.textContent = ageMoyen; // Mise à jour de la cellule avec la moyenne sans décimales
    }
  }

  function cleantab(){
    location.reload();
}
  
