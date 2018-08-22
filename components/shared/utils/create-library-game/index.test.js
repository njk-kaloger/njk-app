import createLibraryGame from "./";

it("create a library game", () => {
  expect(
    createLibraryGame(
      "The Witcher 3: Wild Hunt",
      "PC",
      "RPG",
      "https://images-na.ssl-images-amazon.com/images/I/71NrauAMwbL._SY445_.jpg",
      "https://thumbs.gfycat.com/ExcitableLimitedBufeo-size_restricted.gif",
      "The Witcher® 3: Wild Hunt is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. You play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy."
    )
  ).toMatchSnapshot();
});
