import { useEffect, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { MovieContext } from "../../context/Context";
import { IMovieModal } from "../../types/types";
import MainInfo from "../MovieGrid/movieCard/MainInfo";
import network from "../../services/network";
import searchSimilarMovies from "../../services/searchSimilarMovies";
import fetchIMDB from "../../services/searchIMDB";
import fetchWiki from "../../services/searchWiki";
import "./style.scss";

export const MovieModal = (props: IMovieModal) => {
  const [imdbID, setImdbID] = useState("");
  const [wikiID, setWikiID] = useState("");
  const [description, setDescription] = useState("");

  const { setMovies, setSearchOptions } = useContext(MovieContext);
  const { id, name, img, releaseDate, genres, score, setMovieModal } = props;

  const handleSimilarSearch = async () => {
    setMovies([]);
    setSearchOptions({ isLoading: true, similarToTitle: name });
    const movies = await searchSimilarMovies(id!);
    movies && setMovies(movies);
    setSearchOptions({ isLoading: false, similarToTitle: name });
  };

  useEffect(() => {
    const fetchMovieData = async (title: string) => {
      const searchTitle = title.replaceAll(" ", "%20");
      const wikiData = await fetchWiki(searchTitle);
      setDescription(wikiData?.description);
      setWikiID(wikiData?.id);
      setImdbID(await fetchIMDB(searchTitle));
    };
    name && (async () => await fetchMovieData(name))();
  }, [name]);

  return createPortal(
    <>
      <div
        className='blocker'
        onClick={() => {
          setMovieModal!(null);
          setDescription("");
        }}
      />
      <div className='modal'>
        <section className='modal-info'>
          <div className='movie-poster'>
            <img className='modal-img' src={img?.url} alt={name} />
          </div>
          <div className='right-side'>
            <MainInfo
              id={id}
              name={name}
              releaseDate={releaseDate!}
              score={score}
              genres={genres!}
            />

            <div className='description'>
              {description ? (
                <p>{description.slice(0, 700) + "..."}</p>
              ) : (
                <div className='desc-loader'></div>
              )}
            </div>
            <section className='button-section'>
              <div className='related-links'>
                <a
                  href={network.imdb_page_URL + imdbID}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>IMDB</span>
                </a>
                <a
                  href={network.wiki_page_URL + wikiID}
                  target='_blank'
                  rel='noreferrer'
                >
                  <span>Wikipedia</span>
                </a>
              </div>
              <button
                className='similar-btn'
                onClick={(e) => {
                  handleSimilarSearch();
                }}
              >
                See similar movies
              </button>
            </section>
          </div>
        </section>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};
