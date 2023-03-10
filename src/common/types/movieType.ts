import { GenreType } from "./genresType";

export type MovieType = {
  id?: number;
  adult?: boolean;
  overview?: string;
  genres?: GenreType[];
  original_title?: string;
  original_language?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  poster_path?: string;
  title?: string;
  release_date?: string;
};
