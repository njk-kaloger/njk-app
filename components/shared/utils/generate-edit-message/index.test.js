import generateEditMessage from "./";

it("generates successful edit message", () => {
  expect(generateEditMessage("foo", "bar")).toEqual(
    "foo on bar Successfully Updated"
  );
});
