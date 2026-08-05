/**
 * Anithing TypeScript Definitions
 * Matching schema.graphql (Lean & Enriched Schema)
 */

export type ProviderEnum = 'ANILIST' | 'TMDB' | 'TVDB' | 'MAL' | 'ANIDB';

export type AnimeStatus = 'RELEASING' | 'FINISHED' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';

export type AnimeFormat = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA';

export interface ProviderIDs {
  anilist?: string | null;
  mal?: string | null;
  tmdb?: string | null;
  tvdb?: string | null;
  anidb?: string | null;
}

export interface Titles {
  romaji?: string | null;
  native?: string | null;
  english?: string | null;
}

export interface TimeRange {
  start?: number | null;
  end?: number | null;
}

export interface ProviderEpisode {
  provider: ProviderEnum;
  season?: number | null;
  episode: number;
}

export interface Episode {
  episodeNumber: number;
  seasonNumber?: number | null;
  absoluteEpisodeNumber?: number | null;
  airDate?: string | null;
  runtime?: number | null;
  isFiller: boolean;
  isRecap: boolean;
  thumbnail?: string | null;
  title?: string | null;
  introTimeRange?: TimeRange | null;
  outroTimeRange?: TimeRange | null;
  mappings?: ProviderEpisode[] | null;
}

export interface EpisodeData {
  total: number;
  released: number;
  list: Episode[];
}

export interface MediaArtwork {
  poster?: string | null;
  banner?: string | null;
  backdrop?: string | null;
  background?: string | null;
  clearHdLogo?: string | null;
}

export interface Arc {
  index: number;
  name: string;
  episodeRange: TimeRange;
  media?: MediaArtwork | null;
}

export interface Anime {
  id: string;
  providerIds: ProviderIDs;
  titles: Titles;
  status?: AnimeStatus | null;
  format?: AnimeFormat | null;
  media: MediaArtwork;
  episodes: EpisodeData;
  arcs?: Arc[] | null;
}
