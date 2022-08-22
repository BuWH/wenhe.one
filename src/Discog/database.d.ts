export interface SearchParams {
  per_page?: number;
  page?: number;
  query?: string;
  type?: "artist" | "master" | "release" | "label";
  title?: string;
  release_title?: string;
  credit?: string;
  artist?: string;
  anv?: string;
  label?: string;
  genre?: string;
  style?: string;
  country?: string;
  year?: string | number;
  format?: string;
  catno?: string;
  barcode?: string;
  track?: string;
  submitter?: string;
  contributor?: string;
}

export interface Master {
  styles?: string[];
  genres?: string[];
  videos?: Video[];
  num_for_sale: number;
  title: string;
  most_recent_release: number | null;
  main_release: number;
  notes?: string;
  main_release_url: string;
  uri: string;
  artists: EntityArtist[];
  versions_url: string;
  data_quality: string;
  most_recent_release_url: string;
  year: number;
  images?: Image[];
  resource_url: string;
  lowest_price: number | null;
  id: number;
  tracklist: MasterTrack[];
}

export interface MasterTrack {
  duration: string;
  position: string;
  type_: string;
  title: string;
  extraartists?: EntityArtist[];
}

export interface Video {
  duration: number;
  description: string;
  embed: boolean;
  uri: string;
  title: string;
}

export interface EntityArtist {
  join: string;
  name: string;
  anv: string;
  tracks: string;
  role: string;
  resource_url: string;
  id: number;
}

export interface Release {
  identifiers: Identifier[];
  series: unknown[];
  labels: Company[];
  community: ReleaseCommunity;
  year: number;
  images?: Image[];
  format_quantity: number;
  id: number;
  artists_sort: string;
  genres: string[];
  thumb: string;
  num_for_sale: number;
  title: string;
  artists: EntityArtist[];
  date_changed: string | null;
  lowest_price: number | null;
  status: string;
  released_formatted?: string;
  released?: string;
  date_added: string | null;
  extraartists: EntityArtist[];
  country?: string;
  notes?: string;
  tracklist: ReleaseTrack[];
  companies: Company[];
  uri: string;
  formats: Format[];
  resource_url: string;
  data_quality: string;
  estimated_weight?: number;
  styles?: string[];
  videos?: Video[];
  master_id?: number;
  master_url?: string;
}

export interface ReleaseCommunity {
  status: string;
  rating: Rating;
  want: number;
  contributors: Contributor[];
  have: number;
  submitter: Contributor | null;
  data_quality: string;
}

export interface Contributor {
  username: string;
  resource_url: string;
}

export interface Rating {
  count: number;
  average: number;
}

export interface Company {
  name: string;
  entity_type: string;
  catno: string;
  resource_url: string;
  id: number;
  entity_type_name: string;
}

export interface Format {
  qty: string;
  descriptions?: string[];
  name: string;
  text?: string;
}

export interface Identifier {
  type: string;
  value: string;
  description?: string;
}

export interface ReleaseTrack {
  duration: string;
  position: string;
  type_: string;
  artists?: EntityArtist[];
  title: string;
  extraartists?: EntityArtist[];
}

export interface Artist {
  profile: string;
  releases_url: string;
  name: string;
  namevariations?: string[];
  uri: string;
  members?: ArtistAlias[];
  urls?: string[];
  images?: Image[];
  resource_url: string;
  aliases?: ArtistAlias[];
  id: number;
  data_quality: string;
  realname?: string;
  groups?: ArtistAlias[];
}

export interface ArtistAlias {
  resource_url: string;
  id: number;
  name: string;
  active?: boolean;
}

export interface Image {
  uri: string;
  height: number;
  width: number;
  resource_url: string;
  type: "primary" | "secondary";
  uri150: string;
}

export interface Stats {
  community: {
    in_collection: number;
    in_wantlist: number;
  };
}

export interface ArtistRelease {
  status: string;
  stats: Stats;
  thumb: string;
  format: string;
  title: string;
  label: string;
  role: string;
  year?: number;
  resource_url: string;
  artist: string;
  type: "release";
  id: number;
  trackinfo?: string;
}

export interface ArtistMaster {
  stats: Stats;
  thumb: string;
  title: string;
  main_release: number;
  artist: string;
  role: string;
  year?: number;
  resource_url: string;
  type: "master";
  id: number;
}

export interface ArtistReleasesResponse {
  pagination: DiscogsTypes.Pagination;
  releases: (ArtistRelease | ArtistMaster)[];
}

export interface MasterVersions {
  filter_facets: FilterFacet[];
  filters: Filters;
  versions: Version[];
}

export interface FilterFacet {
  allows_multiple_values: boolean;
  values: Value[];
  id: string;
  title: string;
}

export interface Value {
  count: number;
  value: string;
  title: string;
}

export interface Filters {
  applied: Applied;
  available: Available;
}

export interface Applied { }

export interface Available {
  country: { [key: string]: number };
  label: { [key: string]: number };
  released: { [key: string]: number };
  format: { [key: string]: number };
}

export interface Version {
  status: string;
  stats: Stats;
  thumb: string;
  format: string;
  country: string;
  title: string;
  label: string;
  released: string;
  major_formats: string[];
  catno: string;
  resource_url: string;
  id: number;
}
export interface MasterVersionsResponse extends MasterVersions {
  pagination: DiscogsTypes.Pagination;
}

export interface Label {
  profile?: string;
  releases_url: string;
  name: string;
  contact_info?: string;
  uri: string;
  urls?: string[];
  images?: Image[];
  resource_url: string;
  id: number;
  data_quality: string;
}

export interface LabelRelease {
  status: string;
  artist: string;
  catno: string;
  thumb: string;
  format: string;
  resource_url: string;
  title: string;
  year: number;
  id: number;
}

export interface LabelReleasesResponse {
  pagination: DiscogsTypes.Pagination;
  releases: LabelRelease[];
}

export interface SearchArtist {
  thumb: string;
  title: string;
  uri: string;
  master_url: null;
  cover_image: string;
  resource_url: string;
  master_id: null;
  type: "artist";
  id: number;
  user_data?: UserData;
}

export interface SearchLabel {
  thumb: string;
  title: string;
  uri: string;
  master_url: null;
  cover_image: string;
  resource_url: string;
  master_id: null;
  type: "label";
  id: number;
  user_data?: UserData;
}

export interface SearchMaster {
  style: string[];
  thumb: string;
  format: string[];
  country: string;
  barcode: string[];
  uri: string;
  master_url: string;
  label: string[];
  genre: string[];
  catno: string;
  community: {
    want: number;
    have: number;
  };
  year?: string;
  cover_image: string;
  title: string;
  resource_url: string;
  master_id: number;
  type: "master";
  id: number;
  user_data?: UserData;
}

export interface SearchRelease {
  style: string[];
  barcode: string[];
  thumb: string;
  title: string;
  type: "release";
  format: string[];
  uri: string;
  community: {
    want: number;
    have: number;
  };
  label: string[];
  country: string;
  cover_image: string;
  catno: string;
  master_url: null | string;
  year?: string;
  genre: string[];
  resource_url: string;
  master_id: number;
  format_quantity: number;
  id: number;
  formats: Format[];
  user_data?: UserData;
}

export interface UserData {
  in_collection: boolean;
  in_wantlist: boolean;
}

export interface Format {
  qty: string;
  descriptions?: string[];
  name: string;
  text?: string;
}

type SearchResult =
  | SearchArtist
  | SearchLabel
  | SearchMaster
  | SearchRelease;

export interface SearchResponse {
  pagination: DiscogsTypes.Pagination;
  results: SearchResult[];
}

export interface ReleaseRatingByUser {
  username: string;
  release: string;
  rating: string;
}

export interface CommunityReleaseRating {
  rating: {
    count: number;
    average: number;
  };
  release_id: number;
}