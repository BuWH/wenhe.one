import { AlbumDetail } from './Album.d';

export const Album = (props: { album: AlbumDetail }) => {
  return (
    <div className='flex flex-col'>
      <img src={props.album.thumb}></img>
      <label> {props.album.albumName} </label>
      <label>
        <label>{props.album.artistName}</label>
        {props.album.artistEnglishName != null && (
          <label>{" or " + props.album.artistEnglishName}</label>
        )}
      </label>
      
    </div>
  );
}