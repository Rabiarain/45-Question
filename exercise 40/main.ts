// Creating a function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, tittle: string, tracks?: number} = {
        artist: artist_name,
        tittle: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;

}

// Calling three functions and creating three variables with different values

let album1 = make_album("Rabiya", "Album tittle 1");

let album2 = make_album("Osama", "Album title 2");

// Calling a make_album function with third parameter
let album3 = make_album("Ali", "Album title 3", 10);

// Printing values of our object created by function

console.log(album1);
console.log(album2);
console.log(album3);