import { IMovieCard, IMovieModal } from "../../../types/types";
import "./style.scss";
import { useContext } from "react";
import { MovieContext } from "../../../context/Context";
import MainInfo from "./MainInfo";
import { MovieModal } from "../../Modal/MovieModal";

export const MovieCard = (props: IMovieCard) => {
  const { id, name, img, releaseDate, genres, score } = props;

  const { movieModal, setMovieModal } = useContext(MovieContext);

  const movieModalProps: IMovieModal = {
    ...props,
    isOpen: true,
  };

  const openModal = () => {
    console.log("open modal");
    setMovieModal(movieModalProps);
    console.log("mod", movieModal);
  };

  return (
    <>
      <MovieModal isOpen={false} {...props}/>
      <div className='movie-card' onClick={openModal}>
        <div className='movie-poster'>
          <img
            src={
              img?.url
                ? img.url
                : "https://small-buci.s3.eu-central-1.amazonaws.com/no-image.png"
            }
            alt={name}
          />
        </div>
        <MainInfo
          id={id}
          name={name}
          releaseDate={releaseDate}
          score={score}
          genres={genres}
        />
      </div>
    </>
  );
};
