require("dotenv").config();

var keys = require("./keys");
var axios = require("axios");
var Spotify = require('node-spotify-api');
var fs = require("fs");
// var dotenv = require("")

var spotify = new Spotify(keys.spotify);


//  var type = process.argv[2];
// var input = process.argv.slice(3).join(" ");


// node liri.js concert-this <artist/band name here>
var concertThis = function (artist) {
  console.log("running concert this")
  // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


  axios.get(queryUrl).then(function (response) {
    console.log(response.data);
  });
}
// node liri.js spotify-this-song '<song name here>'
// if (command === "spotify-this-song"); {
// console.log("running spotify-this-song")
var getArtists = function (artist) {
  return artist.name;

}
//    This will show the following information about the song in your terminal/bash window
var spotifySearch = function (songName) {
  console.log(songName);
  spotify.search({ type: "track", query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var items = data.tracks.items;
    // console.log(items);
    for (var i = 0; i < items.length; i++) {
      var songTitle = items[i].name;
      var songPreviewUrl = items[i].preview_url;
      var artistName = items[i].artists.map(getArtists);
      var albumName = items[i].album.name;
      console.log(artistName + " - " + songTitle);
      console.log("Preview URL: " + songPreviewUrl);
      console.log("albumName " + albumName);
      console.log("------------");
    }
  });
}
// }
// node liri.js movie-this '<movie name here>'
var movieThis = function (movieName) {
  axios.get("http://www.omdbapi.com/?t=" + input + "&y=plot=short&apikey=" + keys.omdbKey.apiKey)
    .then(function (response) {
      const movie = response.data;
      console.log("Movie Title: " + movie.Title);
      console.log("Actors: " + movie.Actors);
      console.log("Rotten Tomatoes Score: " + movier.Ratings[1].value);
    })
    .catch(function (err) {
      console.log(err);
    });
}
// node liri.js do-what-it-says
// if (command === "do-what-it-says") {

// }
var select = function (type, input) {
  switch (type) {
    case "concert-this":
      concertThis(input);
      break;
    case "spotify-this-song":
      spotifySearch(input);
      break;
    case "movie-this":
      movieThis(input);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
      default:

      console.log("inputErr");
  }
}
var start = function (type, input) {
  select(type, input);
}
start(process.argv[2], process.argv.slice(3).join(" "));

var doWhatItSays = function () {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.split(",");
    console.log(data[1]);
    var newSong = data[1];
    spotifySearch(newSong);
  
  })
}
//doWhatItSays();

// // function total() {

//   // We will read the existing bank file
//   fs.readFile("bank.txt", "utf8", function(err, data) {
//     if (err) {
//       return console.log(err);
//     }

//     // Break down all the numbers inside
//     data = data.split(", ");
//     var result = 0;

//     // Loop through those numbers and add them together to get a sum.
//     for (var i = 0; i < data.length; i++) {
//       if (parseFloat(data[i])) {
//         result += parseFloat(data[i]);
//       }
//     }

//     // We will then print the final balance rounded to two decimal places.
//     console.log("You have a total of " + result.toFixed(2));
//   });
// }



