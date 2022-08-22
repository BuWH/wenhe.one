import { Client } from "disconnect";

var Discogs = Client;
var db = new Discogs({userToken: 'WenheBlog/0.1'}).database();

const searchAlbum = async (artist: string) => {
  db.search({
    artist: artist,
    type: "master"
  })
  .then(res => {
    console.log(res.results);
  })
};

export {searchAlbum};