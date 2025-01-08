# Notes
## HTML = hyper text markup language
html est consitié de balises
``` html
<p>
     <bold>
         ceci est un paragraphe
    </bold>
</p>
```
voici une balise html pour afficher une image :

``` html
<img src="style.jpg" alt="image">
```
on dit qu'un src est un attribut de la balise img

autre exemple :

```html
<p onMouseOver="clignote()"> bonjour </p>
```
on peut configurer les element html avec du js
j'apelle une fonction qui s'apelle "clignote"
clé et valeur

par convention les event commence par "on"

un commentaire est du texte non executer par le navigateur, il permet de commprendre le code
## CSS = cascading style sheets

```css
img{
    border: 1px solid black;
}
```

3 façon d'afficher du css :
inline
file externe
style

la propriété "display :flex;" transforme l'élement a la quelle est est appliquer en conteneur flex

## JavaScript

### le texte(string)
le type de données determine la nature des valeurs que vous allez manipuler au sein d'un programme
type de definition de variable : var, let et const

var : accessible partout dans le script, elle ont une porté dite "globale" (hoisting)
let : porté restreinte au scope dans lequel elle est déclarée (block scope)
const : permet de declarer une constante, on ne peut pas la réaffecter (block scope)

```js
var mavariable; //ceci est une déclaration de variable
mavariable = "bonjour"; //ceci est une affectation de variable

var mavariable = "bonjour"; //les deux ensemble

mavariable = "bonjour"; //déclaration implicite, marche mais interdit 

console.log(mavariable);

const PI = 3.1415;

let a ="hello world"; // " pour un sting
let b ='hello world'; // ' pareil
let c = `hello
world`; // ` string mais marche sur plusieurs ligne 
```

### les nombres
```js
let a = 123; //numbers
let b = 123.45; //numbers

let a = true; //bool
let b = false; //bool
let c = 1 == 1; //bool
let d = 10 > 5; //bool
let e = 10 < 5; //bool
let e 10 >= 5; //bool
```
on dit qu'une expressione est booléenne si elle retourne une valeur de type `Bool` apres son execution 

### les types :
- object
- array
- function

```js
let a = new <type>;
let b = {}
let c = []
let d = function() {}
```

### les dates
```js
let a = new Date();
```

version de JS : ECMA script

### fonctions
les fonctions sont des blocs de code qui peuvent être appelées à partir d'autres parties du code dans le but d'execute une tache spécifique

```js
function sayHello(<params1>, <params2>, <params3>){
    //corps de la fonction
    console.log("hello world");
}

//on peut avoir 0, 1 ou plusieurs paramètres dans une fonction.

sayHello(); /hello world
//c'est un appel de la fonction
```

Nomenclature : les fonctions sont nommées en camelCse. 
Leur nom sera un verbe qui decrit l'action qu'elles effectuent.

```js
let mavari ="hello world";
function saySomething(message){
    console.log(message);
}

saySomething('le texte dans "mavari" est : ' + mavari);

//résultat dans la console : "le texte dans mavari est : hello world"
```

## raccourcies utiles

ctrl + p : chercher un ficher
ctrl + shift + p : ouvrir les commande VSC
ctrl + h : remplacer (ctrl + f marche aussi)

## crée depot git
dans le repertoire destiné a devenir un depot : git init 
pour voir l'état du reportoire : git status

pour sauvegarder on procede en deux étapes :
on ajoute les fichiers a sauvegarder avec la commande : git add . 

pour sauvegarder : git commit -m "message de sauvegarde"

git remote add origin https://raphaelhenrion:<token>@github.com/raphaelhenrion/ISITECH2024-2025.git

récuperer le token sur github

### nouveau repertoire github
echo "# f" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://raphaelhenrion:<token>@github.com/raphaelhenrion/ISITECH2024-2025.git
git push -u origin main

# repertoire existant
git remote add origin https://raphaelhenrion:<token>@github.com/raphaelhenrion/ISITECH2024-2025.git
git branch -M main
git push -u origin main