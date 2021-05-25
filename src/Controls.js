import Phaser from 'phaser';
import Player from './Player';

export default class Controls {
  constructor(scene) {
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  checkInput(scene) {
    if (this.cursors.left.isDown) {
      scene.player.move('left');
    } else if (this.cursors.right.isDown) {
      scene.player.move('right');
    } else {
      scene.player.move('noHoriz');
    }

    if (this.cursors.up.isDown) {
      scene.player.move('up');
    } else if (this.cursors.down.isDown) {
      scene.player.move('down');
    } else {
      scene.player.move('noVert');
    }

    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      scene.player.x = Player.startingPos.x;
      scene.player.y = Player.startingPos.y;
    }
  }

}