import { ReactNode } from "react";

export type IMovieCard = {
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


export type IMovieModal = Partial<IMovieCard> & {
  isOpen: boolean;
};

export type ReactChildrenNode = {
  children: ReactNode;
};
