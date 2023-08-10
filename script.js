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


/* Init classes */

const gameDiv = document.getElementById("game");
let scoreOne = document.getElementById("score-1");
let scoreTwo = document.getElementById("score-2");
let currentOne = document.getElementById("current-1");
let currentTwo = document.getElementById("current-2");
let imageDice = document.getElementById("img-dice");


class player {
    constructor(scoreRound, scoreGlobal, active) {
        this.scoreRound = scoreRound
        this.scoreGlobal = scoreGlobal
        this.active = active
    }
}
let player1 = new player(0, 0, true)
let player2 = new player(0, 0, false)

/* Button & Function NewGame */
let newGame = document.getElementById("ng-btn");
function restart() {
    player1 = (0, 0, true)
    player2 = (0, 0, false)
    alert("new game");
}
newGame.addEventListener('click', restart)

/* Button & Function RollDice */

let rollDice = document.getElementById("roll-btn")
function rollD() {
    var diceRandom = Math.floor(Math.random() * 6 + 1);
        if (diceRandom === 1) {
            diceRandom = 0
            this.scoreRound = 0
            alert("Raté ! Joueur suivant !")
        } else {
            this.scoreRound = this.scoreRound + diceRandom
            alert("Bien joué ! Continuer ou jouer la sécurité ?")
        }
}
rollDice.addEventListener('click', rollD)

switch (imageDice) {
    case valeur1:
        imageDice
        break;
}

/* Button & Function Hold */



/* Algo Win & window alert */

/* Function dice 1-6  */

let diceImg = document.querySelector("#dice");
dice


scoreOne.innerHTML = player1.scoreRound;
scoreTwo.innerHTML = player2.scoreRound;
currentOne.innerHTML = player1.scoreGlobal;
currentTwo.innerHTML = player2.scoreGlobal;