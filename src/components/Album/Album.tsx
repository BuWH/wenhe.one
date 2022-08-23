import { useEffect, useState } from "react";
import { AlbumDetail, searchAlbum } from "./Album.api";
const Album = () => {
  const [album, setAlbum] = useState<AlbumDetail | null>(null);
  const [searchContent, setSearchContent] = useState<string>("search here");

  return (
    <>
      <div> Album Search </div>
      <input
        type="text"
        onChange={(event) => {
          setSearchContent(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (searchContent == "") return;
          searchAlbum(searchContent).then((res) => {
            if (res != null) {
              setAlbum(res);
            }
          });
        }}
      >
        getAlbum
      </button>
      <>
        {album != null ? (
          <div>
            <div> {album.albumName} </div>
            <div>
              <label>{album.artistName}</label>
              {album.artistSecondName != null && (
                <label>{" or " + album.artistSecondName}</label>
              )}
            </div>
            <img src={album.thumb}></img>
          </div>
        ) : (
          <div> no result </div>
        )}
      </>
    </>
  );
};

export default Album;
