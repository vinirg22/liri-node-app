require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
// var dotenv = require("")

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv.slice(3).join(" ");


// node liri.js concert-this <artist/band name here>
if (command === "concert-this") {
  console.log("running concert this")
  // This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


  axios.get(queryUrl).then(function (response) {
    console.log(response.data);
  });
}
  // node liri.js spotify-this-song '<song name here>'
if (command === "spotify-this-song"); {
  // console.log("running spotify-this-song")

  //    This will show the following information about the song in your terminal/bash window
  spotify.search({ type: 'track', query: input }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    const items = data.tracks.items;

    for (let i = 0; i < items.lenght; i++) {
      const songTitle = items[i].name;
      const songPreviewUrl = items[i].preview_url;
      const artistName = items[i].album.artis[0].name;
      console.log(artistName + " - " + songTitle);
      console.log("Preview URL: " + songPreviewUrl);
      console.log("------------");
    }
  });
}
// node liri.js movie-this '<movie name here>'
if (command === "movie-this") {
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






