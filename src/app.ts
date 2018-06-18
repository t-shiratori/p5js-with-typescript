import { _p5 } from "./p5";
import * as _data from "./data";
import Stuff from "./stuff";

const world = () => {
  let stuff: Stuff;
  const bgColor: p5.Color = _p5.color(30, 30, 30, 255);

  _p5.setup = () => {
    _p5.createCanvas(_data.windowW, _data.windowH);
    _p5.background(bgColor);
    const pos = _p5.createVector(200, 200);
    stuff = new Stuff(pos);
  };

  _p5.draw = () => {
    _p5.clear();
    _p5.background(bgColor);
    stuff.randomWalk();
    stuff.border();
    stuff.update();
    stuff.show();
  };
};

world();
