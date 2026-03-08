/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MainMenu extends Phaser.Scene {

	constructor() {
		super("MainMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(512, 384, "background");

		// text
		const text = this.add.text(512, 460, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Main Menu";
		text.setStyle({ "align": "center", "color": "#ffffff", "fontFamily": "Arial Black", "fontSize": "38px", "stroke": "#000000", "strokeThickness": 8 });

		// text_1
		const text_1 = this.add.text(219, 322, "", {});
		text_1.text = "NICO'S WORLD";
		text_1.setStyle({ "fontSize": "88px" });

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here
    create ()
    {
		this.editorCreate();

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
        /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
