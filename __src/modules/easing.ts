export const easingMap: any = {};
// easeIn
easingMap["easeInQuad"] = (t: number, b: number, c: number, d: number) => {
  return c * (t /= d) * t + b;
};
easingMap["easeInCubic"] = (t: number, b: number, c: number, d: number) => {
  return c * (t /= d) * t * t + b;
};
easingMap["easeInQuart"] = (t: number, b: number, c: number, d: number) => {
  return c * (t /= d) * t * t * t + b;
};
easingMap["easeInQuint"] = (t: number, b: number, c: number, d: number) => {
  return c * (t /= d) * t * t * t * t + b;
};
easingMap["easeInSine"] = (t: number, b: number, c: number, d: number) => {
  return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
};
easingMap["easeInExpo"] = (t: number, b: number, c: number, d: number) => {
  return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};
easingMap["easeInCirc"] = (t: number, b: number, c: number, d: number) => {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
easingMap["easeInElastic"] = (t: number, b: number, c: number, d: number) => {
  let s = 1.70158;
  let p = 0;
  let a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * 0.3;
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a);
  }
  return (
    -(
      a *
      Math.pow(2, 10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p)
    ) + b
  );
};
easingMap["easeInBack"] = (t: number, b: number, c: number, d: number) => {
  let s;
  if (s == undefined) s = 1.70158;
  return c * (t /= d) * t * ((s + 1) * t - s) + b;
};
easingMap["easeInBounce"] = (t: number, b: number, c: number, d: number) => {
  return c - easingMap["easeOutBounce"](d - t, 0, c, d) + b;
};
// easeOut
easingMap["easeOutQuad"] = (t: number, b: number, c: number, d: number) => {
  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
easingMap["easeOutCubic"] = (t: number, b: number, c: number, d: number) => {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};
easingMap["easeOutQuart"] = (t: number, b: number, c: number, d: number) => {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};
easingMap["easeOutQuint"] = (t: number, b: number, c: number, d: number) => {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};
easingMap["easeOutSine"] = (t: number, b: number, c: number, d: number) => {
  return c * Math.sin((t / d) * (Math.PI / 2)) + b;
};
easingMap["easeOutExpo"] = (t: number, b: number, c: number, d: number) => {
  return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
};
easingMap["easeOutCirc"] = (t: number, b: number, c: number, d: number) => {
  return t == d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
};
easingMap["easeOutElastic"] = (t: number, b: number, c: number, d: number) => {
  let s = 1.70158;
  let p = 0;
  let a = c;
  if (t == 0) return b;
  if ((t /= d) == 1) return b + c;
  if (!p) p = d * 0.3;
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a);
  }
  return (
    a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
    c +
    b
  );
};
easingMap["easeOutBack"] = (t: number, b: number, c: number, d: number) => {
  let s;
  if (s == undefined) s = 1.70158;
  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};
easingMap["easeOutBounce"] = (t: number, b: number, c: number, d: number) => {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  } else {
    return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
  }
};
// easeInOut
easingMap["easeInOutQuad"] = (t: number, b: number, c: number, d: number) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
  return (-c / 2) * (--t * (t - 2) - 1) + b;
};
easingMap["easeInOutCubic"] = (t: number, b: number, c: number, d: number) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t + 2) + b;
};
easingMap["easeInOutQuart"] = (t: number, b: number, c: number, d: number) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
};
easingMap["easeInOutQuint"] = (t: number, b: number, c: number, d: number) => {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
};
easingMap["easeInOutSine"] = (t: number, b: number, c: number, d: number) => {
  return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
};
easingMap["easeInOutExpo"] = (t: number, b: number, c: number, d: number) => {
  if (t == 0) return b;
  if (t == d) return b + c;
  if ((t /= d / 2) < 1) return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
  return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
};
easingMap["easeInOutCirc"] = (t: number, b: number, c: number, d: number) => {
  if ((t /= d / 2) < 1) return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
  return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
};
easingMap["easeInOutElastic"] = (
  t: number,
  b: number,
  c: number,
  d: number
) => {
  let s = 1.70158;
  let p = 0;
  let a = c;
  if (t == 0) return b;
  if ((t /= d / 2) == 2) return b + c;
  if (!p) p = d * (0.3 * 1.5);
  if (a < Math.abs(c)) {
    a = c;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(c / a);
  }
  if (t < 1)
    return (
      -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
      b
    );
  return (
    a *
      Math.pow(2, -10 * (t -= 1)) *
      Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
      0.5 +
    c +
    b
  );
};
easingMap["easeInOutBack"] = (t: number, b: number, c: number, d: number) => {
  let s;
  if (s == undefined) s = 1.70158;
  if ((t /= d / 2) < 1)
    return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
  return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
};
easingMap["easeInOutBounce"] = (t: number, b: number, c: number, d: number) => {
  if (t < d / 2) return easingMap["easeInBounce"](t * 2, 0, c, d) * 0.5 + b;
  return easingMap["easeOutBounce"](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
};
