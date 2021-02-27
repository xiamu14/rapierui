import { center, flexSpace } from "../src/fragment/layout";

test("Align center", () => {
  expect(center()).toBe(
    "display: flex;justify-content: center;align-items: center;"
  );
});

test("Flex space", () => {
  expect(flexSpace()).toBe(
    "display: flex;justify-content: space-between;align-items: center;"
  );
  expect(flexSpace({ direction: "column" })).toBe(
    "display: flex;flex-direction: column;justify-content: space-between;align-items: center;"
  );
  expect(flexSpace({ align: "start" })).toBe(
    "display: flex;justify-content: space-between;align-items: start;"
  );
});
