import { position } from "../src/position";

test("valid position and offset", () => {
  expect(position("relative")).toBe("position:relative;");
  expect(position("relative", "10px 20px")).toBe(
    "position:relative;top:10px;right:20px;bottom:10px;left:20px;"
  );
  expect(position("relative", "10px")).toBe(
    "position:relative;top:10px;right:10px;bottom:10px;left:10px;"
  );
  expect(position("relative", "10px 20px 30px")).toBe(
    "position:relative;top:10px;right:20px;bottom:30px;left:20px;"
  );
  expect(position("relative", "10px 20px 30px 40px")).toBe(
    "position:relative;top:10px;right:20px;bottom:30px;left:40px;"
  );
  expect(position("relative", { top: "10px" })).toBe(
    "position:relative;top:10px;"
  );
});

test("invalid offset", () => {
  expect(position("relative", "10px，")).toBe("position:relative;");
  expect(position("relative", { top: "10" })).toBe("position:relative;");
  expect(position("relative", "10px 10px 10px 10px 10px")).toBe(
    "position:relative;"
  );
});
