// let mavari ="hello world";
// console.log(mavari);
// let a = 10 >= 10; //bool
// console.log("valeur de a :", a)
// function saySomething(message){
//     console.log(message);
// }
// saySomething('le texte dans "mavari" est : ' + mavari);



window.onscroll = function () { scrollFunction() }; //quand on scroll ça apelle scrollFunction

function scrollFunction() { //rend le bouton visible/invisible si on est en haut ou en bas

    var mybutton = document.getElementById("scrollToTopButton"); //definie mybutton sur le bouton présent dans l'index

    if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) { //si on dessend de 15px
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}


function topFunction() { //remonte tout en haut quand on clique
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function eleveAuCaree(nombre){
    const result = nombre*nombre;
    console.log(result);
    alert(result);
}