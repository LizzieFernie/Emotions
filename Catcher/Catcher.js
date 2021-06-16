import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Catcher extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("catcher-a", "./Catcher/costumes/catcher-a.svg", {
        x: 41,
        y: 51
      }),
      new Costume("catcher-b", "./Catcher/costumes/catcher-b.svg", {
        x: 41,
        y: 47
      }),
      new Costume("catcher-c", "./Catcher/costumes/catcher-c.svg", {
        x: 60,
        y: 87
      }),
      new Costume("catcher-d", "./Catcher/costumes/catcher-d.svg", {
        x: 86,
        y: 46
      })
    ];

    this.sounds = [new Sound("pop", "./Catcher/sounds/pop.wav")];

    this.triggers = [];
  }
}
