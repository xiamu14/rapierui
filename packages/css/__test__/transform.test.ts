import transform, { translate, translateAlone } from "../src/transform";

test("transform", () => {
  expect(transform(translate("10px"))).toBe("transform:translate(10px);");
});

test("translateAlone", () => {
  expect(translateAlone("10px")).toBe("translate:10px;");
});
