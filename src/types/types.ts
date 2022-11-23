import { Dispatch, ReactNode, SetStateAction } from "react";

export type IMovieData = {
  id: string;
  name: string;
  releaseDate: string | null;
  score: number;
  img?: {
    url: string;
  };
  genres: [{ name: string }] | [];
};

export interface SearchOptions {
  searchedTitle?: string;
  similarToTitle?: string;
  isLoading: boolean;
}

export interface IMovieModal extends IMovieData {
  setMovieModal?: Dispatch<SetStateAction<IMovieModal | null>>
};

export interface IMovieCard extends IMovieData {
  setMovieModal: Dispatch<SetStateAction<IMovieModal | null>>
};

export type ReactChildrenNode = {
  children: ReactNode;
};
