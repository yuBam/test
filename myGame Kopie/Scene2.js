class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
    /*const {Body, Bodies} = Phaser.Physik.Matter.Matter;
    var playerCollider= Bodies.circle(this.x, this.y, 12,{
      isSensor:false,
      label:"playerCollider",
    });
  var playSensor= Bodies.circle(this.x, this.y, 24,{
    isSensor: true,
    label: "playSensor"
  });
  const compoundBody = Bodies.create({
    parts:[playerCollider, playSensor],
    frictionAir:0.35,
  });
  this.setExistingBody(compoundBody);
  this.setFixedRotation();
  */
  }

  create() {
    // 👌 sanity check by displaying the entire tileset image

    this.add.text(20, 20, "playing Game", {
      font: "25px Arial",
      fill: "yellow",
    });

    const map = this.make.tilemap({ key: "tilemap" });

    // add the tileset image we are using
    const tileset = map.addTilesetImage("test-tiles", "base_tiles");

    // "Ground" layer will be on top of "Background" layer
    map.createLayer("Ground", tileset);

    // "Ground" layer will be on top of "Background" layer
    const cactusLayer = map.createLayer("Another-stuff", tileset,0,0);

    cactusLayer.setCollisionByProperty({ collides: true });

    this.cameras.main.setViewport(500, 200, 1335, 920); //2550,2550

    this.player = this.physics.add.sprite(400, 450, "char_anim_idle");
    this.player.setScale(3.5);
    this.player.anims.play("char_anim_idle");
    this.player.setCollideWorldBounds(true);
    // Add key input to the game
    this.keys = this.input.keyboard.createCursorKeys();

    this.cameras.main.setBounds(0, 0, 2550, 2550);
    this.cameras.main.startFollow(this.player);
    this.player.body.setSize(15, 31, true);

  }

  update() {
    // Poll the arrow keys to move the ball
    if (this.keys.left.isDown) {
      this.player.x -= 2.5;
      this.player.anims.play("char_anim_left", true);
    }
    if (this.keys.right.isDown) {
      this.player.x += 2.5;
      this.player.anims.play("char_anim_right", true);
    }
    if (this.keys.up.isDown) {
      this.player.y -= 2.5;
      this.player.anims.play("char_anim_idle_back", true);
    }
    if (this.keys.down.isDown) {
      this.player.y += 2.5;
      this.player.anims.play("char_anim_idle", true);
    }

    if (
      !this.keys.left.isDown &&
      !this.keys.right.isDown &&
      !this.keys.up.isDown &&
      !this.keys.down.isDown
    ) {
      this.player.anims.pause();
    }
  }
}
this.add;
