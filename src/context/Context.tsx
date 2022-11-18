import {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
  ReactNode,
} from "react";
import {
  IMovieModal,
  IMovieCard,
  ReactChildrenNode,
  SearchOptions,

} from "../types/types";

type IMovieContext = {
  movies: IMovieCard[];
  setMovies: Dispatch<SetStateAction<IMovieCard[]>>;
  searchOptions: SearchOptions;
  setSearchOptions: Dispatch<SetStateAction<SearchOptions>>,
  movieModal: IMovieModal;
  setMovieModal: Dispatch<SetStateAction<IMovieModal>>;
};

export const MovieContext = createContext<IMovieContext>({
  movies: [],
  setMovies: () => {},
  searchOptions: {
    isLoading: false,
  },
  setSearchOptions: () => {},
  movieModal: {
    isOpen: false,
  },
  setMovieModal: () => {},
});

const MovieContextProvider = ({ children }: ReactChildrenNode) => {
  const [movies, setMovies] = useState<IMovieCard[] | []>([]);
  const [searchOptions, setSearchOptions] = useState<SearchOptions>({ isLoading: false });
  const [movieModal, setMovieModal] = useState<IMovieModal>({ isOpen: false });

  const value = {
    movies,
    setMovies,
    searchOptions,
    setSearchOptions,
    movieModal,
    setMovieModal,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
