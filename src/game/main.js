import Boot from './scenes/Boot';
import Game from './scenes/Game';
import GameOver from './scenes/GameOver';
import MainMenu from './scenes/MainMenu';
import Preloader from './scenes/Preloader';

// Find out more information about the Game Config at:
// https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        Game,
        GameOver
    ],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 500
            },
            //  debug: true
        }
    }
};

// export default new Phaser.Game(config);

function StartGame() {
    // Game initialization logic
    new Phaser.Game(config)
    console.log('New game created');
}

export default StartGame;
