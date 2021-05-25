import Phaser from 'phaser';
import { WIDTH, HEIGHT } from '../constants';
import assets from '../assetImports';
import Controls from '../Controls';
import Player from '../Player';


export default class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    // define this.xxx variables
    this.controls;
    this.starterText;
  }

  // load data into the scene
  init() {
    
  }

  // load assets
  preload() {  
    this.load.spritesheet('player', assets.player, { frameWidth: 32, frameHeight: 32 });
  }

  // initialize assets and controls and whatnot
  create() {
    this.starterText = this.add.text(
      WIDTH / 2,
      HEIGHT / 2,
      'Phaser Game Starter Project', { fill: '#0FF' }
    ).setOrigin(0.5, 0.5);
    this.controls = new Controls(this);
    this.player = new Player(this, 'player');
  }

  // gameloop
  update() {
    this.controls.checkInput(this);
  }


  // custom class methods...
}

