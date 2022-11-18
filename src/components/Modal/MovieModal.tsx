import React, { Fragment } from "react";
import { useEffect, useState, useContext } from "react";
import { createPortal } from "react-dom";
import { MovieContext } from "../../context/Context";
import network from "../../services/network";
import fetchIMDB from "../../services/searchIMDB";
import searchSimilarMovies from "../../services/searchSimilarMovies";
import fetchWiki from "../../services/searchWiki";
import { IMovieModal } from "../../types/types";
import MainInfo from "../MovieGrid/movieCard/MainInfo";
import "./style.scss";

export const MovieModal = (props: IMovieModal) => {
  const [imdbID, setImdbID] = useState("");
  const [wikiID, setWikiID] = useState("");
  const [description, setDescription] = useState("");

  const { movieModal, setMovieModal, setMovies, setSearchOptions } =
    useContext(MovieContext);

  const { id, name, img, releaseDate, genres, score } = movieModal;
  /* const { id, name, img, releaseDate, genres, score } = props; */

  const handleSimilarSearch = async () => {
    setMovies([]);
    setMovieModal({ isOpen: false });
    setSearchOptions({ isLoading: true, similarToTitle: name });
    const movies = await searchSimilarMovies(movieModal.id!);
    movies && setMovies(movies);
    setSearchOptions({ isLoading: false, similarToTitle: movieModal.name });
  };

  useEffect(() => {
    const fetchMovieData = async (title: string) => {
      const searchTitle = title.replaceAll(' ', '%20');
      const wikiData = await fetchWiki(searchTitle);
      setDescription(wikiData?.description);
      setWikiID(wikiData?.id);
      const imdbData = await fetchIMDB(searchTitle);
      setImdbID(imdbData);
    };
    if(name && releaseDate) 
    if(name) (async () => await fetchMovieData(name))();
  }, [movieModal.isOpen]);

  if (!movieModal.isOpen) return null;

  return createPortal(
    <>
      <div
        className='blocker'
        onClick={() => {
          setMovieModal({ isOpen: false });
          setDescription('');
        }}
      />
      <div className='modal'>
        <section className='modal-info'>
          <div className='movie-poster'>
            <img
              className='modal-img'
              src={movieModal.img?.url}
              alt={movieModal.name}
            />
          </div>
          <div className='right-side'>
            <MainInfo
              id={id!}
              name={name!}
              releaseDate={releaseDate!}
              score={score!}
              genres={genres!}
            />

            <div className='description'>
              {description ? (
                <p>{description}</p>
              ) : (
                <div className='desc-loader'></div>
              )}
            </div>
          </div>
        </section>
        <section className='button-section'>
          <div className='related-links'>
            <a href={network.imdb_page_URL + imdbID} target='_blank' rel='noreferrer'>
              <span>IMDB</span>
            </a>
            <a href={network.wiki_page_URL + wikiID} target='_blank' rel='noreferrer'>
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
    </>,
    document.getElementById("portal") as HTMLElement
  );
};
