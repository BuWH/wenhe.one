import { useEffect, useState } from "react";
import { Album } from "./Album";
import { AlbumDetail } from "./Album.d";
import { searchAlbum } from "./AlbumSearch.api";
const AlbumSearch = () => {
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
        {album != null && (
          <Album album={album}/>
        )}
      </>
    </>
  );
};

export default AlbumSearch;
