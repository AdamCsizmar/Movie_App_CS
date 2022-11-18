import { IMovieCard } from "../../../types/types";
import "./style.scss";

const MainInfo = (props: IMovieCard) => {
    const { name, releaseDate, genres, score } = props;
    const scoreClass = score > 7 ? "green" : score > 5 ? "yellow" : "red";
  return (
    <div className='movie-info'>
        <div className='main-info'>
          <h5 className='movie-title'>{name}</h5>
          <h6 className='movie-date'>
            {(releaseDate && releaseDate.slice(0, 4)) ?? "-"}
          </h6>
        </div>
        <div className='additional-info'>
          <p className='movie-genre'>{genres[0]?.name ?? "Unknown"}</p>
          <p className={`movie-score ${scoreClass}`}>{score.toFixed(1)}</p>
        </div>
      </div>
  )
}

export default MainInfo;