import { useState, createContext, SetStateAction, Dispatch } from "react";
import { IMovieCard, ReactChildrenNode, SearchOptions } from "../types/types";

type IMovieContext = {
  movies: IMovieCard[];
  setMovies: Dispatch<SetStateAction<IMovieCard[]>>;
  searchOptions: SearchOptions;
  setSearchOptions: Dispatch<SetStateAction<SearchOptions>>;
};

export const MovieContext = createContext<IMovieContext>({
  movies: [],
  setMovies: () => {},
  searchOptions: {
    isLoading: false,
  },
  setSearchOptions: () => {},
});

const MovieContextProvider = ({ children }: ReactChildrenNode) => {
  const [movies, setMovies] = useState<IMovieCard[] | []>([]);
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({
    isLoading: false,
  });

  const value = {
    movies,
    setMovies,
    searchOptions,
    setSearchOptions,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
