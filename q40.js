"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artistName1, albumTitle1, tracks1) {
    let album = {
        artistName: artistName1,
        albumTitle: albumTitle1,
        tracks: tracks1,
    };
    console.log(album.artistName);
    console.log(album.albumTitle);
    console.log(album.tracks);
}
make_album("AtifAslam", "Yaadein");
make_album("AtifAslam", "Mausam");
make_album("Maroon5", "Animals", 5);
//is my function overwriting or storing defining new objects each time it is called?
// how to check in an if condition whether a value is defined or not defined?
