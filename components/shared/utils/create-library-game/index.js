export default (
  titleInput,
  platformInput,
  descInput,
  genreInput,
  profileImageURL,
  libraryImageURL
) => {
  let profile = profileImageURL;
  let libraryImage = libraryImageURL;
  let platform = Object.values(platformInput);
  let title = Object.values(titleInput);
  let genre = Object.values(genreInput);
  let desc = Object.values(descInput);

  platform = platform.toString().replace(/,/g, "");
  title = title.toString().replace(/,/g, "");
  genre = genre.toString().replace(/,/g, "");
  desc = desc.toString().replace(/,/g, "");
  let rate = 0;

  const game = {
    id: `${platform}-${title}`,
    image: profile,
    animatedImage: libraryImage,
    title: title,
    platform: platform,
    genre: genre,
    desc: desc,
    completionRate: rate
  };

  return game;
};
