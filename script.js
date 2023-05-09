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

class player1 {
    constructor(scoreRound, scoreGlobal, active) {
        this.scoreRound = scoreRound
        this.scoreGlobal = scoreGlobal
        this.active = active
    }
}
let player1 = new player1(0, 0, true)

class player2 {
    constructor(scoreRound, scoreGlobal, active) {
        this.scoreRound = scoreRound
        this.scoreGlobal = scoreGlobal
        this.active = active
    }
}
let player2 = new player2(0, 0, false)