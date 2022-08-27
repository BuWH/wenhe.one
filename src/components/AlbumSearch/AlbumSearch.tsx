import { useEffect, useState } from "react";
import { Album } from "./Album";
import { AlbumDetail } from "./Album.d";
import { searchAlbum } from "./AlbumSearch.api";

const AlbumSearch = () => {
  const [albums, setAlbums] = useState<AlbumDetail[]>([]);
  const [searchContent, setSearchContent] = useState<string>("search here");

  return (
    <div className="flex flex-col justify-center align-mid">
      <h2 className="pl-1 font-semibold h-6 text-3xl text-left">Music Search </h2>
      <div className="flex flex-row w-full leading-6 font-medium rounded-2 border border-gray hover-border-black transition-all hover-border-2">
        <input
          className="w-full px-4 py-auto text-base border-none outline-none bg-transparent"
          placeholder="Albums, artists, labels..."
          type="search"
          content={searchContent}
          onChange={(event) => {
            setSearchContent(event.target.value);
          }}
        />
        <button
          className="mx-auto h-10 w-20 bg-transparent border-none cursor-pointer op-50 ml-2 hover:op-100 transition-opacity cursor-pointer"
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
      </div>
      <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2">
        {albums.length != 0 && (
          albums.map((album, index) => {
            return <Album key={index} album={album} />;
          })
        )}
      </div>
    </div>
  );
};

export default AlbumSearch;
