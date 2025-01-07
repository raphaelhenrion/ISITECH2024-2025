# notes
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

### les pseudo-clases
la propriété "display :flex;" transforme l'élement a la quelle est est appliquer en conteneur flex


## JavaScript

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

pour en
git remote add origin https://raphaelhenrion:<token>@github.com/raphaelhenrion/ISITECH2024-2025.git

récuperer le token sur github
