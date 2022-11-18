import network from "./network";

const searchMovies = async (searchTerm: string) => {
  const searchQuery = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query SearchMovies {
          searchMovies(query: "${searchTerm}") {
            id
            name
            releaseDate
            genres {
              name
            }
            img: poster {
              url: medium
            }
            score
          }
        }
          `,
    }),
  };

  const movieList = await fetch(network.tmdb_URL, searchQuery)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const movies = data.data.searchMovies;
      return movies;
    })
    .catch((err) => {
      console.error(err);
    });

  return movieList;
};

export default searchMovies;
