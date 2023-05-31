let circleArea = (radius) => {
  return radius * radius * Math.PI;
};

let circleCircumference = (radius) => {
  return 2 * Math.PI * radius;
};

module.exports = {
    circleArea,
    circleCircumference
}