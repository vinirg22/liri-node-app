require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require('node-spotify-api');
// var dotenv = reuire("")

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var artist = process.argv[3];


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
} else ()


// node liri.js spotify-this-song '<song name here>'

// node liri.js movie-this '<movie name here>'

// node liri.js do-what-it-says