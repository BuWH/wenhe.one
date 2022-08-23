import { AlbumDetail } from './Album.d';

export const Album = (props: { album: AlbumDetail }) => {
  return (
    <div className='flex flex-row p-2 border border-rounded'>
      <img src={props.album.thumb}></img>
      <div className='ml-5 flex flex-col align-center ml-2'>
        <div className='mt-1 text-xl'> {props.album.albumName} </div>
        <div className='mt-2 text-gray'>
          <label>{props.album.artistName}</label>
          {props.album.artistEnglishName != null && (
            <label>{" or " + props.album.artistEnglishName}</label>
          )}
        </div>
      </div>
      
    </div>
  );
}