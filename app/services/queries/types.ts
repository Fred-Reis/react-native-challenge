export interface TvShowProps {
  backdrop_path?: string;
  id: number;
  name?: string;
  original_language: string;
  original_name: string;
  overview?: string;
  poster_path?: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

export interface MoviesProps {
  adult: boolean;
  backdrop_path?: string | null;
  id: number;
  title?: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path?: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface DetailsProps {
  backdrop_path?: string | null;
  overview: string;
  homepage?: string;
  title: string;
  ratings?: number;
  genres: number[];
  date: number;
  type: string;
  id: number;
}

export interface PersonProps {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: string;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: Knownfor[];
}

interface Knownfor {
  adult: boolean;
  backdrop_path?: any;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: any[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
