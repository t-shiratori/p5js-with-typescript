import * as dat from "dat.gui";
import { _p5 } from "./modules/p5";
import * as _data from "./modules/data";
import Stuff from "./modules/stuff";

/* world 
-------------------------------------------- */

const world = () => {
  let stuff: Stuff;
  let backgroundColor: p5.Color = _p5.color("#008771");

  // dat gui
  class GuiControls {
    bgColor: string;
    constructor() {
      this.bgColor = "#008771";
    }
  }
  const guiControls: GuiControls = new GuiControls();

  /* set up 
  -------------------------------------------- */

  _p5.setup = () => {
    // setting canvas
    _p5.createCanvas(_data.windowW, _data.windowH);
    _p5.background(backgroundColor);

    // setting stuff
    const pos = _p5.createVector(200, 200);
    stuff = new Stuff(pos);

    // setting GUI
    const gui: dat.GUI = new dat.GUI();
    gui.addColor(guiControls, "bgColor").onChange((color: string) => {
      backgroundColor = _p5.color(`${color}`);
    });
  };

  /* draw
  -------------------------------------------- */

  _p5.draw = () => {
    _p5.clear();
    _p5.background(backgroundColor);
    stuff.randomWalk();
    stuff.border();
    stuff.update();
    stuff.show();
  };
};

world();
