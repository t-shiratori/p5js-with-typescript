// const requestAnimationFrame = window.requestAnimationFrame ||
//                                 window.mozRequestAnimationFrame ||
//                                 window.webkitRequestAnimationFrame ||
//                                 window.msRequestAnimationFrame;

// const cancelAnimationFrame = window.cancelAnimationFrame ||
//                                 window.mozcancelAnimationFrame ||
//                                 window.webkitcancelAnimationFrame ||
//                                 window.mscancelAnimationFrame;

export default class EasingFactory {
  targetProp: any;
  t: number;
  b: number;
  d: number;
  c: number;
  startTime: number;
  engine: (t: number, b: number, c: number, d: number) => {};
  isCompleted: boolean;
  isRunning: boolean;
  loopId: number;
  constructor(
    targetProp: any,
    b: number,
    d: number,
    c: number,
    engine: (t: number, b: number, c: number, d: number) => {}
  ) {
    this.targetProp = targetProp; // target property
    this.t = 0; // elapsed time
    this.b = b; // start value
    this.d = d; // duration
    this.c = c; // diff value from start value (How to operate the start value)
    this.engine = engine;
    this.isCompleted = false;
    this.isRunning = false;
    this.startTime = 0;
    this.loopId = -1;
  }

  execute() {
    if (this.loopId > 0) {
      this.cancel();
    }
    this.isRunning = true;
    this.startTime = Date.now();
    this.loop();
  }

  update() {
    const now: number = Date.now();
    this.t = now - this.startTime;
    if (this.t < this.d) {
      this.targetProp = this.engine(this.t, this.b, this.c, this.d);
    } else {
      this.t = this.d;
      this.targetProp = this.engine(this.t, this.b, this.c, this.d);
      this.isCompleted = true;
      this.complete();
    }
  }

  loop() {
    if (this.isRunning) {
      this.loopId = window.requestAnimationFrame(this.loop.bind(this));
      this.update();
      if (this.isCompleted) {
        this.cancel();
      }
    }
  }

  cancel() {
    this.isRunning = false;
    this.isCompleted = false;
    window.cancelAnimationFrame(this.loopId);
  }

  complete() {
    // console.log('completed!')
  }
}
