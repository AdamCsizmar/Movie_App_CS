import { useContext, useState } from "react";
import { MovieContext } from "../../context/Context";
import { IMovieData } from "../../types/types";
import { MovieModal } from "../Modal/MovieModal";
import { MovieCard } from "./movieCard/MovieCard";
import "./style.scss";

const MovieContainer = () => {
  const { movies } = useContext(MovieContext);
  const [movieModal, setMovieModal] = useState<IMovieData | null>(null);

  return (
    <>
      {movieModal && <MovieModal {...movieModal} setMovieModal={setMovieModal}/>}
      <div className='movieGrid'>
        {movies?.map((movie) => (
          <MovieCard
            setMovieModal={setMovieModal}
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
