import { useContext } from "react";
import { MovieContext } from "../../context/Context";
import { MovieCard } from "./movieCard/MovieCard";
import "./style.scss";

const MovieContainer = () => {
  const { movies } = useContext(MovieContext);

  return (
    <>
      <div className='movieGrid'>
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            name={movie.name}
            img={movie.img}
            releaseDate={movie.releaseDate}
            genres={movie.genres}
            score={movie.score}
          />
        ))}
      </div>
    </>
  );
};

export default MovieContainer;
