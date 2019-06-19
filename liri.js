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

  // Name of the venue
  // Venue location
  // Date of the Event (use moment to format this as "MM/DD/YYYY")
  var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";


  axios.get(queryUrl).then(function (response) {
    console.log(response.data);
  });
}
if (command === "spotify-this-song"); {
  // console.log("running spotify-this-song")
  // node liri.js spotify-this-song '<song name here>'
  //    This will show the following information about the song in your terminal/bash window

  spotify.search({ type: 'track', query: input }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from
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

// node liri.js do-what-it-says