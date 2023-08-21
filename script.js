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

let scoreOne = document.getElementById("score-1")
let scoreTwo = document.getElementById("score-2")
let currentOne = document.getElementById("current-1")
let currentTwo = document.getElementById("current-2")

class player {
    constructor(scoreRound, scoreGlobal, active) {
        this.scoreRound = scoreRound
        this.scoreGlobal = scoreGlobal
        this.active = active
    }
}
let player1 = new player(0, 0, true)
let player2 = new player(0, 0, false)

scoreOne = player1.scoreRound
scoreTwo = player2.scoreRound
currentOne = player1.scoreGlobal
currentTwo = player2.scoreGlobal

const newGame = document.getElementById("ng-btn")
newGame.addEventListener("click", function () {
    player1 = (0, 0, true)
    player2 = (0, 0, false)
    alert("On recommence à zéro !");
});

let diceRandom;
const rollDice = document.getElementById("roll-btn")
rollDice.addEventListener("click", function () {
    diceRandom = Math.floor(Math.random() * 6 + 1);
        if (player1.active === true) {
            if (diceRandom === 1) {
                player1.scoreRound = 0
                player1.active = !player1.active
                player2.active = !player2.active
            } else {
                player1.scoreRound = player1.scoreRound + diceRandom;
            }
        } else if (player2.active === true) {
            if (diceRandom === 1) {
                player2.scoreRound = 0
                player2.active = !player2.active
                player1.active = !player1.active
            } else {
                player2.scoreRound = player2.scoreRound + diceRandom;
            }
        }
});

let imageDice = document.getElementById("img-dice");
switch (diceRandom) {
    case "1":
        imageDice.src = "img/dice1.png";
        alert("Raté ! Joueur suivant !");
        break;
    case "2":
        imageDice.src = "img/dice2.png";
        break;
    case "3":
        imageDice.src = "img/dice3.png";
        break;
    case "4":
        imageDice.src = "img/dice4.png";
        break;
    case "5":
        imageDice.src = "img/dice5.png";
        break;
    case "6":
        imageDice.src = "img/dice6.png";
        break;
    default:
        imageDice.src = "img/dice1.png";
        break;
}

const holdPress = document.getElementById("hold-btn");
newGame.addEventListener("click", function () {
    player1 = player1.scoreGlobal = player1.scoreRound;
    player1.scoreRound = 0
    player2 = player2.scoreGlobal = player2.scoreRound;
    player2.scoreRound = 0
    alert("Changement de joueur !");
});

scoreOne.innerHTML = player1.scoreRound;
scoreTwo.innerHTML = player2.scoreRound;
currentOne.innerHTML = player1.scoreGlobal;
currentTwo.innerHTML = player2.scoreGlobal;