import createWishlistGame from "./";

it("create a wishlist game", () => {
  expect(
    createWishlistGame(
      "The Witcher 3: Wild Hunt",
      "PC",
      "70",
      "RPG",
      "https://images-na.ssl-images-amazon.com/images/I/71NrauAMwbL._SY445_.jpg",
      "https://thumbs.gfycat.com/ExcitableLimitedBufeo-size_restricted.gif"
    )
  ).toMatchSnapshot();
});
