import { SearchResult } from '../../Discog/database';
import {search} from '../../Discog/Discog';

interface AlbumDetail {
  title?: string;
  thumb?:string;
  cover_image?: string;
  style?: string[];
  year?: string;
  country?: string;
}

const searchAlbum = async (title: string): Promise<AlbumDetail | null> => {
  const results = (await search({title: title})).results;
  return results.length == 0 ? null : results[0] as AlbumDetail;
};

export { searchAlbum };
export type { AlbumDetail };
