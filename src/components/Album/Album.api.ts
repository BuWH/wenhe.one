import { SearchResult, SearchMaster } from '../../Discog/database';
import { search } from '../../Discog/Discog';

export interface IAlbumSearch {
  title?: string;
  thumb?: string;
  cover_image?: string;
  style?: string[];
  year?: string;
  country?: string;
}

export class AlbumDetail implements IAlbumSearch {
  title?: string;
  thumb?: string;
  cover_image?: string;
  style?: string[];
  year?: string;
  country?: string;

  albumName?: string;
  albumEnglishName?: string;
  artistName?: string;
  artistEnglishName?: string;

  constructor(albumSearch: IAlbumSearch) {
    Object.assign(this, albumSearch);
    const albumName = this.title?.split(' - ')[1];
    if (albumName?.includes(' = ')) {
      this.albumName = albumName.split(' = ')[0];
      this.albumEnglishName = albumName.split(' = ')[1];
    } else {
      this.albumName = albumName;
    }
    const artistName = this.title?.split(' - ')[0];
    if (artistName?.includes(' = ')) {
      this.artistName = artistName.split(' = ')[0].split('*')[0];
      this.artistEnglishName = artistName.split(' = ')[1].split('*')[0];
    } else {
      this.artistName = artistName?.split('*')[0];
    }
  }
}

export const searchAlbum = async (title: string): Promise<AlbumDetail | null> => {
  const results = (await search({ title: title })).results
    .filter(res => res.type == 'master' || res.type == 'release');
  console.log(`album results: ${results as object}`);
  if (results.length === 0)
    return null;
  return new AlbumDetail(results[0] as IAlbumSearch);
};
