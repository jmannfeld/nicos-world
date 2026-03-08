
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerPrefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "nico3", frame);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		this.flipX = true;
		scene.physics.add.existing(this, false);
		this.body.setSize(192, 192, false);

		// leftKey
		const leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// rightKey
		const rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// spaceKey
		const spaceKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.spaceKey = spaceKey;

		/* START-USER-CTR-CODE */
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		this.once(Phaser.GameObjects.Events.DESTROY, () => {
			this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
		});
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {number} */
	speed = 80;
	/** @type {number} */
	jumpForce = 200;

	/* START-USER-CODE */

	update() {
		if (!this.active) {
			return;
		}

		// Run left
		if (this.leftKey.isDown) {
			this.setVelocityX(this.speed * -1);
			this.setFlipX(false);

		// Run right
		} else if (this.rightKey.isDown) {
			this.setVelocityX(this.speed);
			this.setFlipX(true);
		} else {
			// Not moving
			this.setVelocityX(0);
		}

		// Jumping
		if (Phaser.Input.Keyboard.JustDown(this.spaceKey) && this.body.blocked.down) {			
			this.setVelocityY(this.jumpForce * -1);
			this.scene.sound.play("jump");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
