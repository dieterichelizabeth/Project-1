//when app is opened, all assets and links load
//when user types into search bar, they can search spotify database by song title
//when search request sent, playlist populates with random songs from results
//when search request sent, fetch request sent to Spotify API
//-fetch request will include token
//-enable ability to request a new token if token has expired 
//when populates, 4 songs are routed to cards
//when button on card is pushed, song is previewed
//with or without preview, song can be added
//when a song is added, it is stored in local storage
//when it is stored, it populates in the track list
//when song pupulates in tracklist, songs refresh with new songs from random song playlist previously generated
//when song limit is reached (10 songs), buttons become inoperable (JQuery? display "limit reached" upon 10 songs)
//after limit reached, enable user to name tape (playlist) by Spotify API and add message

//* track list is enabled to add and remove songs up to 10 songs
//track list is saved in local storage AND saved as a spotify playlist on user's profile
//share enables user to share our app, or allows user to share their playlist that they created

//test


// Loads planner from local storage
var loadTrackList = function() {
    playList = JSON.parse(localStorage.getItem("Track List"));

    // if the user had not added any new sogngs-
    if (!playList) {
     // add the new div and give it an ID
     $('<p id="add-songs-warning">Click Stearch in the mixtape to add new songs!</p>').appendTo('#song-container');
    console.log("no tracks");
    }

    // If the user has songs, display on the screen
    else{
    // for (let i = 0; i < 10; i++) { 
    // }
    }


{/* <li class="task-item" data-task-id="1">
<div class="task-info">
  <img class="spotifyLogo" src="./images/spotifyLogo.png" />
  <p class="task-name">Song Name</p>
  <p class="task-name">Artist</p>
  <p class="task-name">Album Name</p>
</div>
<div>
  <button class="btn play-btn">Play</button>
  <!-- Play in the play in the "play song" -->
  <button class="btn delete-btn">delete</button>
  <!-- Adds song to the "track list" -->
</div>
</li> */}

};

// when the "add" button is clicked, the song details move to tracklist
$("#add-to-track").on("click", function() {
   console.log("add clicked!")
    // Grabs the song selected by targeted id
    var songSelected = event.target.parentNode.parentNode;
    var id = songSelected.getAttribute("id");
    console.log(id)
   
    //If P is there, remove the p
    $( "#add-songs-warning" ).remove();

    // Add the list item to song container
    $('<li id="Song" class="task-item" data-task-id="1" "></li>').appendTo('#song-container');
    // add the div for song info
    $('<div id="hold-info"' + 'class="task-info""></div>').appendTo('#Song');
    // add the image
    $('<img class="spotifyLogo" src="./images/spotifyLogo.png" />').appendTo('#hold-info');
    // add Song Name, Artist, and Ablum Name
    $('<p class="task-name">Song Name</p>').appendTo('#hold-info');
    $('<p class="task-name">Artist</p>').appendTo('#hold-info');
    $('<p class="task-name">Album Name</p>').appendTo('#hold-info');

    // add the div for song info
    $('<div id="hold-buttons"' + 'class="task-info""></div>').appendTo('#Song');
    // add the pplay/delete button
    $('<button class="btn play-btn">Play</button>').appendTo('#hold-buttons');
    $('<button id= "deleteTrack" class="btn delete-btn">delete</button>').appendTo('#hold-buttons');
   

    // saves to local storage
});

$("#deleteTrack").on("click", function() {
    console.log("delete clicked!")
     // Grabs the song selected by targeted id
     var songSelected = event.target.parentNode.parentNode;
     var id = songSelected.getAttribute("id");
     console.log(id)
    
     //If P is there, remove the p
     $( "#Song" ).remove();
     // saves to local storage
 });

// load songs for the first time
loadTrackList();


/*
COMPLETED
- dynamically generate tracks to track list
    - if no tracks are present: p element appears informing user to search + add a song
- new id's added for targeting elements through event listeners
*/

/* 
future improvement 
- style the "no songs" p element
- turn loadTrackList into jQuery on load function?
-
*/

/*
ISSUES
- if a user "adds" a song multiple times- it messes up the target/format of the song itself
    - list item # needs to be added
*/