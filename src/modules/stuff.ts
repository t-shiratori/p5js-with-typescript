import { _p5 } from "./p5";
import * as _data from "./data";

export default class Stuff {
  pos: p5.Vector;
  vel: p5.Vector;
  acc: p5.Vector;
  radius: number = 20;
  color: p5.Color = _p5.color('hsla(70, 100%, 93%, 1.0)');
  diameter: number = this.radius * 2;
  phase_x: number = _p5.random(4);
  phase_y: number = _p5.random(4);

  constructor(pos: p5.Vector) {
    this.pos = pos;
    this.vel = _p5.createVector();
    this.acc = _p5.createVector();
  }

  applyForce(a: p5.Vector) {
    this.acc.add(a.copy());
  }

  randomWalk() {
    const acc = _p5.createVector();
    this.phase_x += 0.005;
    this.phase_y += 0.005;
    acc.x = _p5.noise(this.phase_x) * 2;
    acc.y = _p5.noise(this.phase_y) * 2;

    if (_p5.random(10) > 5) {
      acc.x *= -1;
    }
    if (_p5.random(10) > 5) {
      acc.y *= -1;
    }

    this.applyForce(acc);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(6);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  show() {
    _p5.noStroke();
    _p5.fill(this.color);
    _p5.ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
  }

  border() {
    if (this.pos.x <= this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -0.5;
    } else if (this.pos.x >= _data.windowW - this.radius) {
      this.pos.x = _data.windowW - this.radius;
      this.vel.x *= -0.5;
    }
    if (this.pos.y <= this.radius) {
      this.pos.y = this.radius;
      this.vel.y *= -0.5;
    } else if (this.pos.y >= _data.windowH - this.radius) {
      this.pos.y = _data.windowH - this.radius;
      this.vel.y *= -0.5;
    }
  }
}
