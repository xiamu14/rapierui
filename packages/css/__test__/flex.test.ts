import flex from "../src/flex";

test("flex", () => {
  expect(flex({ direction: "row" })).toBe("display: flex;flex-direction: row;");
  expect(flex()).toBe("display: flex;");
  expect(flex({ basis: "content" })).toBe("display: flex;flex-basis: content;");
  expect(flex({ basis: { v: 100, u: "em" } })).toBe(
    "display: flex;flex-basis: 100em;"
  );
  expect(flex({ basis: { v: -10, u: "em" } })).toBe(
    "display: flex;flex-basis: -10em;"
  );
  expect(flex({ shrink: 100 })).toBe("display: flex;flex-shrink: 100;");
  expect(flex({ grow: 100 })).toBe("display: flex;flex-grow: 100;");
});
