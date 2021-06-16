import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Baseball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("baseball", "./Baseball/costumes/baseball.svg", {
        x: 28,
        y: 28
      })
    ];

    this.sounds = [new Sound("pop", "./Baseball/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.goto(-159, 47);
    yield* this.wait(1);
    yield* this.glide(1, 81, -41);
    this.size += -60;
  }
}
