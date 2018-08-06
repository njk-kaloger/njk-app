export function createLibraryGame(
  titleInput,
  plateformInput,
  descInput,
  genreInput,
  profileImageURL,
  libraryImageURL
) {
  let profile = profileImageURL;
  let libraryImage = libraryImageURL;
  let plateform = Object.values(plateformInput);
  let title = Object.values(titleInput);
  let genre = Object.values(genreInput);
  let desc = Object.values(descInput);

  plateform = plateform.toString().replace(/,/g, "");
  title = title.toString().replace(/,/g, "");
  genre = genre.toString().replace(/,/g, "");
  desc = desc.toString().replace(/,/g, "");
  let rate = 0;

  const game = {
    id: `${plateform}-${title}`,
    image: profile,
    animatedImage: libraryImage,
    title: title,
    plateform: plateform,
    genre: genre,
    desc: desc,
    completetionRate: rate
  };

  return game;
}

export function createWishlistGame(
  titleInput,
  plateformInput,
  priceInput,
  genreInput,
  profileImageURL,
  libraryImageURL
) {
  let profile = profileImageURL;
  let libraryImage = libraryImageURL;
  let plateform = Object.values(plateformInput);
  let title = Object.values(titleInput);
  let genre = Object.values(genreInput);
  let price = Object.values(priceInput);

  plateform = plateform.toString().replace(/,/g, "");
  title = title.toString().replace(/,/g, "");
  genre = genre.toString().replace(/,/g, "");
  //price = price.toString().replace(/,/g, "");

  const game = {
    id: `${plateform}-${title}`,
    image: profile,
    animatedImage: libraryImage,
    title: title,
    plateform: plateform,
    genre: genre,
    price: price
  };

  return game;
}
