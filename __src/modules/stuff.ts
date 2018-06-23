import { _p5 } from "./p5";
import * as _data from "./data";

export default class Stuff {
  pos: p5.Vector;
  radius: number = 20;
  color: p5.Color = _p5.color("hsla(70, 100%, 100%, 1.0)");
  diameter: number = this.radius * 2;

  constructor(pos: p5.Vector) {
    this.pos = pos;
  }

  show() {
    _p5.noStroke();
    _p5.fill(this.color);
    _p5.ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
  }
}
