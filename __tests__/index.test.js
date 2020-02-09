import reverse from "../src";

//jest test
test("reverse test", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});
