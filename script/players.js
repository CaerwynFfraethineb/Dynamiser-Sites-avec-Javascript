/**
 * Class representing a player in the dice game.
 */
class Player {
    /**
     * The score for the current round.
     * @type {number}
     */
    scoreRound = 0;

    /**
     * The global score for the game.
     * @type {number}
     */
    scoreGlobal = 0;

    /**
     * Indicates whether the player is active or not.
     * @type {boolean}
     */
    active = false;

    constructor() {
        // Les valeurs initiales sont déjà définies, donc le constructeur peut rester vide
    }

    /**
     * Resets the player's scores and active status.
     */
    reset() {
        this.scoreRound = 0;
        this.scoreGlobal = 0;
        this.active = false;
    }

    /**
     * Sets the active status of the player.
     * @param {boolean} active - The active status to set.
     */
    setActive(active) {
        this.active = active;
    }
}