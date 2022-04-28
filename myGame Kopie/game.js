var config = {
  width: 2550,
  height: 2550,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2],

  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true, //Box aus = false
    },
  },
};


var game = new Phaser.Game(config);
