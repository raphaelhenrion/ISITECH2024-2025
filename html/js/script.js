window.onscroll = function () { scrollFunction() }; //quand on scroll ça apelle scrollFunction

function scrollFunction() { //rend le bouton visible/invisible si on est en haut ou en bas

    let mybutton = document.getElementById("scrollToTopButton"); //definie mybutton sur le bouton présent dans l'index

    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) { //si on dessend de 15px
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}


function topFunction() { //remonte tout en haut quand on clique
    let cont = 1;//compteur
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("nombre de fois appuyé :");
    cont = cont+1;
}

function getTableau() {
    let tableau = document.getElementById("tableau_1");
    let a = 0
    let b = 0
    let c = 4

    let ageMoyen = (33*4+a)/(b+4)
    // console.log(tableau);

    let row = tableau.insertRow();

    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);

    cell0.textContent = "paul";
    cell1.textContent = "chomeur";
    cell2.textContent = "49";
    b = b+1
    a = a+49
    c = c+b
    console.log("a : "+a+" b : "+b+" c : "+c)
    var cellule = tableau.rows[c].cells[2];
    cellule.innerHTML = ageMoyen;
}
