import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Catcher from "./Catcher/Catcher.js";
import Baseball from "./Baseball/Baseball.js";

let stage = new Stage({ costumeNumber: 1 ,size: 250});

const sprites = {
  Catcher: new Catcher({
    x: 83,
    y: -40,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Baseball: new Baseball({
    x: 81,
    y: -41,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30

});
export default project;
