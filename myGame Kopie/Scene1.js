class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    // load the PNG file
    this.load.image("base_tiles", "base_tiles/tileset.png");

    // load character
    this.load.spritesheet("character_idle", "character/char_idle.png", {
      frameWidth: 16,
      frameHeight: 32,
    });

    this.load.spritesheet(
      "character_idle_back",
      "character/char_idle_back.png",
      {
        frameWidth: 16,
        frameHeight: 32,
      }
    );

    this.load.spritesheet("character_left", "character/char_left.png", {
      frameWidth: 16,
      frameHeight: 32,
    });

    this.load.spritesheet("character_right", "character/char_right.png", {
      frameWidth: 16,
      frameHeight: 32,
    });

    // load the JSON file
    this.load.tilemapTiledJSON("tilemap", "base_tiles/map.json");
  }

  create() {
    this.add.text(20, 20, "Loading game...", {
      font: "25px Arial",
      fill: "yellow",
    });

    //Animations
    this.anims.create({
      key: "char_anim_idle",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("character_idle", {
        frames: [0, 1, 2, 3],
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "char_anim_idle_back",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("character_idle_back", {
        frames: [0, 1, 2, 3],
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "char_anim_right",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("character_right", {
        frames: [0, 1, 2, 3],
      }),
      repeat: -1,
    });

    this.anims.create({
      key: "char_anim_left",
      frameRate: 5,
      frames: this.anims.generateFrameNumbers("character_left", {
      frames: [0, 1, 2, 3],
      }),
      repeat: -1,
    });

    this.scene.start("playGame");
  }
}
