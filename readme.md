# Spotify API Assignment

Spotify has a wondeful public API. Lets explore API usage using music because music is awesome. Your task will be to explore some of the endpoints that Spotify offers us. You'll want the documentation:

[https://developer.spotify.com/web-api/](https://developer.spotify.com/web-api/)

Outside of the documentation, which is expansive, spotify offers an 'api console' which will create requests on your behalf. It's a lot like Postman, check it out:

[https://developer.spotify.com/web-api/console/](https://developer.spotify.com/web-api/console/)

If you prefer to use Postman, you can! One of these tools will be useful. The nice thing about the Spotify Web Console is that it has a lot of human readable content to point you in the right direction.

## Getting the Code to Run

Fork then clone this repository! Then, from the repo directory run:

```
python -m SimpleHTTPServer
```

Now navigate chrome to http://localhost:8000

Try a search for your favorite artist!

## Whats Going On

As a baseline, we're making a single request to the Spotify API. You can look at the code or the network tab to see the request being made, but the gist is that we request to:

```
https://api.spotify.com/v1/search?type=artist&q=WHATEVER YOU TYPE
```

Head over to the API docs for more about the search endpoint! [https://developer.spotify.com/web-api/search-item/](https://developer.spotify.com/web-api/search-item/)

We parse the results, and populate them into the results area. Simple as pie.

## Your Task

Your task is to complete the function `displayAlbumsAndTracks`. Right now, when you click one of the results this function is called, but it simply prints to the console. This function should do 3 things:

1. Query the Spotify API for every album produced by the artist you clicked on.
2. For each of those albums fetch every track on the album.
3. Display this information to the user such that:
	* Albums appear with its release date.
	* Each album has its tracks displayed before the next album appears.
	* All of this information should be appended to this div: `<div id='albums-and-tracks'>`

This may seem simple, but it won't be. You will be using AJAX heavily; you will be parsing through some serious documentation; you will have to handle race conditions.  

__Bonus__

Get the tracks 'popularity' metric and show it side by side with the track name.

### Heres a Tip
You'll need to use these two endpoints, but you may also need to use more:

[https://developer.spotify.com/web-api/console/get-album/](https://developer.spotify.com/web-api/console/get-album/)
[https://developer.spotify.com/web-api/console/get-artist-albums/](https://developer.spotify.com/web-api/console/get-artist-albums/)


Spotify

** User input box will always be a search for an artist name.
Query the Spotify API for every album produced by the artist you clicked on.
	find artist number (clicking on artist name currently logs the number to the console), so
variable with those numbers in an <li> tag already called   artistLi.
	GET https://api.spotify.com/v1/artists/{id}/albums This will list the albums by that artist
For each of those albums fetch every track on the album.
GET https://api.spotify.com/v1/albums/{id}
^^^use this to list tracks on that album from the returned object.
	Also use that request to  display release date. For example, the key is "release_date" : "1983",
An example of the object it returns is here:
	https://developer.spotify.com/web-api/get-album/
Display this information to the user such that:
Albums appear with its release date.
Each album has its tracks displayed before the next album appears.
All of this information should be appended to this div: <div id='albums-and-tracks'>


Connect to Spotify API by using this link https://api.spotify.com
Modify the API URL to search tracks and albums

Endpoints will include Get Artist’s Albums and Get an Album’s Tracks




This Gets the albums of whatever artist


https://api.spotify.com/v1/albums/{id}/tracks
This Gets the tracks of albums. Who spilled the damn honey in the fridge????? JOEY seems rather concerned about this….suspicious….




USER STORIES


When a user fills in the search bar with an artist name and clicks the button
  - A list of all the artists that match the search appears
  - The items in this list are clickable
When a user clicks on an artist name
  - A list of the:
    - artist albums
    - release dates
    - tracks

Pseudocode:

When a user fills in the search bar with an artist name and clicks the button:
 - A list of all the artists that match the search appears
   - Click event listener fetches the artist information and ID’s with an ajax call
When a user clicks on an artist name:
   - Click event listener fetches the album information using artist ID in the querystring
   - Another ajax call fetches the release date from the album ID
   - The same call also fetches the list of track names from the album ID
     - Create div for each album
     - Fill the new div with release date of album and album name/image
		 - Create UL for each album
		 - Then append each UL to the div for that album
		 - Loop through the array of track names and append each li to the UL
