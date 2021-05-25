import Phaser from 'phaser';
import { WIDTH, HEIGHT } from './constants';


export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, textureKey) {
    super(scene, Player.startingPos.x, Player.startingPos.y, textureKey);
    scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.velocityScalar = 150;
  }

  static startingPos = { x: WIDTH / 2, y: HEIGHT / 2 + 40 };

  move(direction) {
    switch (direction) {
      case 'left':
        this.body.velocity.x = -this.velocityScalar;
        break;
      case 'right':
        this.body.velocity.x = this.velocityScalar;
        break;
      case 'up':
        this.body.velocity.y = this.velocityScalar * -1;
        break;
      case 'down':
        this.body.velocity.y = this.velocityScalar;
        break;
      case 'noHoriz':
        this.body.velocity.x = 0;
        break;
      case 'noVert':
        this.body.velocity.y = 0;
        break;
    }
  }
}