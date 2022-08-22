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

const searchAlbum = async (title: string): Promise<AlbumDetail> => {
  const results = (await search({title: title})).results;
  return results[0] as AlbumDetail;
};

export { searchAlbum };
export type { AlbumDetail };
