// Initialisation Objets player1 & player2 avec chacun en paramètre le scoreVar initialisé à 0 et le currentScore à 0.
// Initialisation Objet active avec player1 en paramètre initial.
// Association du bouton #NewGame à un écouteur d'événement click qui réinitialise les paramètres player1 et player2 ainsi que l'objet active.
// Initialisation de la var dice
// Association d'une img dice1, dice2, etc... à un score dice ? Ou voir autre méthode pour affichage.
// Initialisation fonction rollDice qui prend en compte l'écouteur d'événement click sur le bouton #RollDice : dice reçoit le résultat d'un math random 0 à 5 auquel on ajoute 1
    // Si dice === 1
        // dice = 0
        // scoreVar = 0
        // switch de l'active entre le player1 et player2 (fonction ?)
    // Sinon dice est additionné au paramètre scoreVar de l'active
// Initialisation de la fonction hold qui prend en compte l'écouteur d'événement click sur le bouton #Hold
    // Si Hold
        // scoreVar du active additionné à son currentScore
            // Si current Score du active >= 100
                // Alors alert "Victoire"
                // Voir pour bloquer les boutons autre que #NewGame
            // Sinon active est switch à l'autre joueur

// Si active === player1 (signal étant la petite led rouge, ici en image mais autre option envisageable)
    // Alors #signal2: collapse;
    // Sinon #signal1: collapse;

// Affichage des scores Round et global en temps réel
// Noms de variables round et global

var scoreOne = document.getElementById("score-1")
var scoreTwo = document.getElementById("score-2")
var currentOne = document.getElementById("current-1")
var currentTwo = document.getElementById("current-2")

class player {
    constructor(scoreRound, scoreGlobal, active) {
        this.scoreRound = scoreRound
        this.scoreGlobal = scoreGlobal
        this.active = active
    }
}
var player1 = new player(0, 0, true);
var player2 = new player(0, 0, false);

scoreOne = player1.scoreRound;
scoreTwo = player2.scoreRound;
currentOne = player1.scoreGlobal;
currentTwo = player2.scoreGlobal;

const newGame = document.getElementById("ng-btn")
newGame.addEventListener("click", function () {
    Object.assign(player1, { scoreRound: 0, scoreGlobal: 0, active: true });
    Object.assign(player2, { scoreRound: 0, scoreGlobal: 0, active: false });
    alert("On recommence à zéro !");
    console.log(player1.scoreRound);
    console.log(player1.scoreGlobal);
    console.log(player2.scoreRound);
    console.log(player2.scoreGlobal);
    console.log(player1.active);
    console.log(player2.active);
});

var playerVisu1 = document.getElementById("playerVisual1");
var playerVisu2 = document.getElementById("playerVisual2");
if (player1.active) {
    playerVisu1.style.boxShadow = "10px 5px 5px red";
    playerVisu2.style.boxShadow = "none";
} else if (player2.active) {
    playerVisu2.style.boxShadow = "10px 5px 5px red";
    playerVisu1.style.boxShadow = "none";
}

console.log(player1.scoreRound);
console.log(player1.scoreGlobal);
console.log(player2.scoreRound);
console.log(player2.scoreGlobal);
console.log(player1.active);
console.log(player2.active);

let diceRandom
const rollDice = document.getElementById("roll-btn")
rollDice.addEventListener("click", function () {
    diceRandom = Math.floor(Math.random() * 6 + 1);
    console.log("Jet de dés : " + diceRandom);
    console.log("La valeur de P1 Active est : " + player1.active);
    console.log("La valeur de P2 Active est : " + player2.active);
        if (player1.active) {
            if (diceRandom == 1) {
                player1.scoreRound = 0
                !player1.active
                !player2.active
                alert("Raté ! Changement de joueur !");
            } else {
                player1.scoreRound += diceRandom;
                console.log("La valeur de P1 Round est : " + player1.scoreRound);
                console.log(newDice);
            }
        } else if (player2.active) {
            if (diceRandom == 1) {
                player2.scoreRound = 0
                !player2.active
                !player1.active
                alert("Raté ! Changement de joueur !");
            } else {
                player2.scoreRound += diceRandom;
                console.log("La valeur de P2 Round est : " + player2.scoreRound);
                console.log(newDice);
            }
        }
});

function checkWin() {
    if (player1.scoreGlobal >= 100) {
        alert("Joueur 1 a gagné !");
    } else if (player2.scoreGlobal >= 100) {
        alert("Joueur 2 a gagné !");
    }
}

let imageDice = document.getElementById("img-dice");
var newDice
switch (diceRandom) {
    case 1:
        newDice = "img/dice1.png";
        imageDice.alt = "D1";
        alert("Raté ! Joueur suivant !");
        break;
    case 2:
        newDice = "img/dice2.png";
        imageDice.alt = "D2";
        break;
    case 3:
        newDice = "img/dice3.png";
        imageDice.alt = "D3";
        break;
    case 4:
        newDice = "img/dice4.png";
        imageDice.alt = "D4";
        break;
    case 5:
        newDice = "img/dice5.png";
        imageDice.alt = "D5";
        break;
    case 6:
        newDice = "img/dice6.png";
        imageDice.alt = "D6";
        break;
    default:
        newDice = "img/dice1.png";
        imageDice.alt = "D1";
        break;
}
imageDice.src = newDice;

const holdPress = document.getElementById("hold-btn");
holdPress.addEventListener("click", function () {
    player1.scoreGlobal = player1.scoreGlobal + player1.scoreRound;
    player1.scoreRound = 0;
    console.log("La valeur de P1 Round est : " + player1.scoreRound);
    console.log("La valeur de P1 Global est : " + player1.scoreGlobal);
    player2.scoreGlobal = player2.scoreGlobal + player2.scoreRound;
    player2.scoreRound = 0;
    console.log("La valeur de P2 Round est : " + player2.scoreRound);
    console.log("La valeur de P2 Global est : " + player2.scoreGlobal);
    checkWin();
    alert("Changement de joueur !");
});

scoreOne.textContent = player1.scoreRound;
scoreTwo.textContent = player2.scoreRound;
currentOne.textContent = player1.scoreGlobal;
currentTwo.textContent = player2.scoreGlobal;