import generateDeleteMessage from "./";

it("generates successful delete message", () => {
  expect(generateDeleteMessage("foo", "bar", "Wishlist")).toEqual(
    "foo on bar Successfully Removed From Wishlist"
  );
});
