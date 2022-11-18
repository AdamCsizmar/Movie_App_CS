import network from "./network";

const fetchIMDB = async (title: string) => {
  const imdbConcat = network.imdb_searh_URL + network.imdb_KEY5 + '/' + title;

  const imdbID = await fetch(imdbConcat)
    .then((res) => res.json())
    .then((data) => {
      const id = data?.results[0]?.id;
      return id;
    })
    .catch((err) => {
      console.error(err);
    });
  return imdbID;
};

export default fetchIMDB;
