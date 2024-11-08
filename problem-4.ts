// Problem 4. circle Area and rectangle Area
type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type U = Circle | Rectangle;

function calculateShapeArea(value: U): number {
  if (value.shape === "circle") {
    const sumCircle = parseFloat((Math.PI * value.radius * value.radius).toFixed(2));
    return sumCircle;
  }
  if (value.shape === "rectangle") {
    const multiCircle = value.width * value.height;
    return multiCircle;
  }
  return 0;
}

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });
// console.log(circleArea, rectangleArea);
