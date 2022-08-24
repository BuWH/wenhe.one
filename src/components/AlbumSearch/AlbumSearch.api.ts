import { SearchResult, SearchMaster } from '../../Discog/database';
import { search } from '../../Discog/Discog';
import { AlbumDetail, IAlbumSearch } from './Album.d';

export const searchAlbum = async (title: string): Promise<AlbumDetail[]> => {
  const results = (await search({ title: title })).results
    .filter(res => res.type == 'master' || res.type == 'release')
    .map(res => new AlbumDetail(res));
  console.log(`album results: ${results}`);
  return results as AlbumDetail[];
};
