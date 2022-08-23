export interface IAlbumSearch {
  title?: string;
  thumb?: string;
  cover_image?: string;
  style?: string[];
  year?: string;
  country?: string;
}

export class AlbumDetail implements IAlbumSearch {
  title ?: string;
  thumb ?: string;
  cover_image ?: string;
  style ?: string[];
  year ?: string;
  country ?: string;

  albumName ?: string;
  albumEnglishName ?: string; // null when album name is not non-english
  artistName ?: string;
  artistEnglishName ?: string;

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