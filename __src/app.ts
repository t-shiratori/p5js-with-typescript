import { _p5 } from "./modules/p5";
import * as _data from "./modules/data";
import Stuff from "./modules/stuff";

import { easingMap } from "./modules/easing";
import EasingFactory from "./modules/easingFactory";

import * as dat from "dat.gui";

const world = () => {
  let stuff: Stuff;
  const bgColor: p5.Color = _p5.color("hsla(180, 100%, 20%, 1.0)");
  let easingFactory: EasingFactory;

  class GuiControls {
    easing: string;
    constructor() {
      this.easing = "easeInOutCubic";
    }
  }
  const guiControls: GuiControls = new GuiControls();

  const initStaff = (easingEngine: () => {}) => {
    const pos = _p5.createVector(100, 200);
    stuff = new Stuff(pos);
    easingFactory = new EasingFactory(
      stuff.pos.x,
      stuff.pos.x,
      1000,
      stuff.pos.x + 300,
      easingEngine
    );
    easingFactory.execute();
  };

  _p5.setup = () => {
    _p5.createCanvas(_data.windowW, _data.windowH);
    _p5.background(bgColor);

    initStaff(easingMap["easeInOutQuart"]);

    // setting GUI
    const gui: any = new dat.GUI();
    let easingKeys = [];
    for (let key in easingMap) {
      easingKeys.push(key);
    }
    gui
      .add(guiControls, "easing", easingKeys)
      .onChange((easeTypeName: string) => {
        initStaff(easingMap[easeTypeName]);
      });
  };

  _p5.draw = () => {
    _p5.clear();
    _p5.background(bgColor);
    stuff.pos.x = easingFactory.targetProp;
    stuff.show();
  };
};

world();
