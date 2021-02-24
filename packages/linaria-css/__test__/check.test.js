"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var check_1 = require("../src/util/check");
// const { checkUnit, checkColor } = require("../src/util/check");
test("check unit of the css", function () {
    var validValue = ["10px", "10.0px", "-10px", "10%", "-0.10px"];
    validValue.forEach(function (v) {
        expect(check_1.checkUnit(v)).toBe(true);
    });
    var invalidValue = [".12px", "10"];
    invalidValue.forEach(function (v) {
        expect(check_1.checkUnit(v)).toBe(false);
    });
});
test("check color value of the css", function () {
    var validValue = [
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
    validValue.forEach(function (v) {
        expect(check_1.checkColor(v)).toBe(true);
    });
    var invalidValue = [""];
    invalidValue.forEach(function (v) {
        expect(check_1.checkColor(v)).toBe(false);
    });
});
