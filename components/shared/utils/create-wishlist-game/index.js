export default (
  titleInput,
  platformInput,
  priceInput,
  genreInput,
  profileImageURL,
  libraryImageURL
) => {
  let profile = profileImageURL;
  let libraryImage = libraryImageURL;
  let platform = Object.values(platformInput);
  let title = Object.values(titleInput);
  let genre = Object.values(genreInput);
  let price = Object.values(priceInput);

  platform = platform.toString().replace(/,/g, "");
  title = title.toString().replace(/,/g, "");
  genre = genre.toString().replace(/,/g, "");
  //price = price.toString().replace(/,/g, "");

  const game = {
    id: `${platform}-${title}`,
    image: profile,
    animatedImage: libraryImage,
    title: title,
    platform: platform,
    genre: genre,
    price: price
  };

  return game;
};
