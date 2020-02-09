import reverse from "../src";

test("reverse test", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});
