class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.diceImage = document.getElementById("img-dice");
        this.init();
    }

    init() {
        document.getElementById("ng-btn").addEventListener("click", () => this.newGame());
        document.getElementById("roll-btn").addEventListener("click", () => this.rollDice());
        document.getElementById("hold-btn").addEventListener("click", () => this.hold());
    }

    newGame() {
        this.player1.reset();
        this.player2.reset();
        this.player1.setActive(true);
        this.updateVisual();
        alert("On recommence à zéro !");
    }

    rollDice() {
    const diceRandom = Math.floor(Math.random() * 6 + 1);
    this.updateDiceImage(diceRandom);

    if (diceRandom === 1) {
        this.currentPlayer.scoreRound = 0;
        this.switchPlayer();
        alert("Raté ! Changement de joueur !");
    } else {
        this.currentPlayer.scoreRound += diceRandom;
    }
    this.updateVisual();
}

hold() {
    this.currentPlayer.scoreGlobal += this.currentPlayer.scoreRound;
    this.currentPlayer.scoreRound = 0;
    this.checkWin();
    this.switchPlayer();
    alert("Changement de joueur !");
    this.updateVisual();
}

    switchPlayer() {
        this.currentPlayer.setActive(false);
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
        this.currentPlayer.setActive(true);
        this.updateVisual();
    }

    updateVisual() {
        document.getElementById("score-1").textContent = this.player1.scoreRound;
        document.getElementById("score-2").textContent = this.player2.scoreRound;
        document.getElementById("current-1").textContent = this.player1.scoreGlobal;
        document.getElementById("current-2").textContent = this.player2.scoreGlobal;
        document.getElementById("playerVisual1").style.boxShadow = this.player1.active ? "10px 5px 5px red" : "none";
        document.getElementById("playerVisual2").style.boxShadow = this.player2.active ? "10px 5px 5px red" : "none";
    }

    updateDiceImage(diceRandom) {
        this.diceImage.src = `img/dice${diceRandom}.png`;
	}

    checkWin() {
        if (this.player1.scoreGlobal >= 100) alert("Joueur 1 a gagné !");
        if (this.player2.scoreGlobal >= 100) alert("Joueur 2 a gagné !");
    }
}