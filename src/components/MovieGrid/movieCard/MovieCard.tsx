import "./style.scss";
import MainInfo from "./MainInfo";
import { IMovieCard } from "../../../types/types";

export const MovieCard = (props: IMovieCard) => {
  const {
    id,
    name,
    img,
    releaseDate,
    genres,
    score,
    setMovieModal,
  } = props;

  const openModal = () => {
    setMovieModal!({
      id: id,
      name: name,
      img: img,
      releaseDate: releaseDate,
      genres: genres,
      score: score,
    });
  };

  return (
    <>
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
