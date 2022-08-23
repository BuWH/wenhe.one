import { SearchResult, SearchMaster } from '../../Discog/database';
import { search } from '../../Discog/Discog';
import { AlbumDetail, IAlbumSearch } from './Album.d';

export const searchAlbum = async (title: string): Promise<AlbumDetail | null> => {
  const results = (await search({ title: title })).results
    .filter(res => res.type == 'master' || res.type == 'release');
  console.log(`album results: ${results}`);
  if (results.length === 0)
    return null;
  return new AlbumDetail(results[0] as IAlbumSearch);
};
