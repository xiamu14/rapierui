import { checkUnit, checkColor } from "../src/util/check";
// const { checkUnit, checkColor } = require("../src/util/check");

test("check unit of the css", () => {
  const validValue = ["10px", "10.0px", "-10px", "10%", "-0.10px"];

  validValue.forEach((v) => {
    expect(checkUnit(v)).toBe(true);
  });

  const invalidValue = [".12px", "10"];

  invalidValue.forEach((v) => {
    expect(checkUnit(v)).toBe(false);
  });
});

test("check color value of the css", () => {
  const validValue = [
    "#fff",
    "#000000",
    "#ffffff",
    "rgba(0,0,0,0)",
    "rgb(0,0,0)",
    "rgba(255,255,255,0)",
    "rgb(255,255,255)",
    "hsl(120,100%,50%)",
    "hsla(0,100%,50%,1)",
  ];
  validValue.forEach((v) => {
    expect(checkColor(v)).toBe(true);
  });

  const invalidValue = [""];
  invalidValue.forEach((v) => {
    expect(checkColor(v)).toBe(false);
  });
});
