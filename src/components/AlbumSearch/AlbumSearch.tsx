import { useEffect, useState } from "react";
import { Album } from "./Album";
import { AlbumDetail } from "./Album.d";
import { searchAlbum } from "./AlbumSearch.api";

const AlbumSearch = () => {
  const [albums, setAlbums] = useState<AlbumDetail[]>([]);
  const [searchContent, setSearchContent] = useState<string>("search here");

  return (
    <div className="flex flex-col justify-center align-mid">
      <h1 className="text-center"> Album Search </h1>
      <input
        className="mt-2 h-10 border border-gray-400 rounded-4 focus:outline-none focus:border-gray-500"
        type="text"
        content={searchContent}
        onChange={(event) => {
          setSearchContent(event.target.value);
        }}
      />
      <button
        className="mx-auto my-2 h-10 w-20 bg-coolGray border-none rounded-full"
        type="submit"
        onClick={() => {
          if (searchContent == "") return;
          searchAlbum(searchContent).then((res) => {
            if (res != null) {
              setAlbums(res);
            }
          });
        }}
      >
        Search
      </button>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {albums.length == 0 ? (
          <div> no albums </div>
        ) : (
          albums.map((album, index) => {
            return <Album key={index} album={album} />;
          })
        )}
      </div>
    </div>
  );
};

export default AlbumSearch;
