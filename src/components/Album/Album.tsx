import { useState } from "react";
import { AlbumDetail, searchAlbum } from "./Album.api";
const Album = () => {
  const [album, setAlbum] = useState<AlbumDetail>();
  return (
    <>
      <div> Album </div>
      <button
        onClick={() => {
          console.log("hello");
          const result = searchAlbum("白银饭店").then((res) => {
            if (res != null) {
              setAlbum(res);
            }
          });
        }}
      >
        {" "}
        getAlbum{" "}
      </button>
      <>
        {album != null && (
          <div>
            <div> {album.title} </div>
            <img src={album.thumb}></img>
          </div>
        )}
      </>
    </>
  );
};

export default Album;
