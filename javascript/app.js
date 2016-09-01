// Self envoking function! once the document is ready, bootstrap our application.
// We do this to make sure that all the HTML is rendered before we do things
// like attach event listeners and any dom manipulation.
(function() {
  $(document).ready(function() {
    bootstrapSpotifySearch();
  })
})();

/**
  This function bootstraps the spotify request functionality.
*/

var artistInfo = {};
var albumInfo = {};

function bootstrapSpotifySearch() {

  var userInput, searchUrl, results;
  var outputArea = $("#q-results");

  $('#spotify-q-button').on("click", function() {
    var spotifyQueryRequest;
    spotifyQueryString = $('#spotify-q').val();
    searchUrl = "https://api.spotify.com/v1/search?type=artist&q=" +
      spotifyQueryString;

    // Generate the request object
    spotifyQueryRequest = $.ajax({
      type: "GET",
      dataType: 'json',
      url: searchUrl
    });

    // Attach the callback for success
    // (We could have used the success callback directly)
    spotifyQueryRequest.done(function(data) {
      var artists = data.artists;

      // Clear the output area
      outputArea.html('');
      var title = "Artist: ";
      artists.items.forEach(function(artist) {
        artistInfo = artist;
        var artistLi = $("<li>" + artist.name + "</li>");
        artistLi.attr('data-spotify-id', artist.id);
        outputArea.append(artistLi);
        artistLi.click(displayAlbums);
      });
      outputArea.prepend(title);
    });

    // Attach the callback for failure
    // (Again, we could have used the error callback direcetly)
    spotifyQueryRequest.fail(function(error) {
      console.log("Something Failed During Spotify Q Request:")
      console.log(error);
    });
  });
}

/* -------------------- Albums -------------------- */

function displayAlbums(event) {
  $('#q-results').hide();
  var appendToMe = $('#albums');
  var allAlbums = $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'https://api.spotify.com/v1/artists/' + artistInfo.id +
      '/albums'
  });

  allAlbums.done(function(data) {
    var albumName = data.items;
    var title = "Albums: ";
    albumName.forEach(function(album) {
      albumInfo = album;
      var albumLi = $("<li>" + album.name + "</li>");
      albumLi.attr('data-spotify-id', album.id);
      appendToMe.append(albumLi);
      albumLi.click(displayTracks);
    });
    appendToMe.prepend(title);
  });

}

/* -------------------- Tracks -------------------- */

function displayTracks(event) {
  $('#albums').hide();
  var appendToMe = $('#tracks');
  var allTracks = $.ajax({
    type: "GET",
    dataType: 'json',
    url: 'https://api.spotify.com/v1/albums/' + albumInfo.id +
      '/tracks'
  });

  allTracks.done(function(data) {
    var trackName = data.items;
    var title = "Tracks: ";
    trackName.forEach(function(track) {
      trackInfo = track;
      var trackLi = $("<li>" + track.name + "</li>");
      trackLi.attr('data-spotify-id', tracks.id);
      appendToMe.append(trackLi);
    });
    appendToMe.prepend(title);
  });
}

/* YOU MAY WANT TO CREATE HELPER FUNCTIONS OF YOUR OWN */
/* THEN CALL THEM OR REFERENCE THEM FROM displayAlbumsAndTracks */
/* THATS PERFECTLY FINE, CREATE AS MANY AS YOU'D LIKE */
