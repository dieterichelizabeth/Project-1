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

//Search click functionality
$("#submit").on("click", function() {
console.log("The user clicked Search");
    // TEMPORARY HARD CODED "RESULTS"- CREATES STORAGE FOR SONGS WHICH ARE PULLED FROM THE API
    searchedTrack1 = {songSearch: ["Hooked On a Feeling"], artistSearch: ["Blue Sweede, Bjorn Skiffs"], albumsearch: ["Single- Hooked on a Feeling"], URLsearch: ["sampleURL"]}
    searchedTrack2 = {songSearch: ["Go All the Way"], artistSearch: ["Raspberries"], albumsearch: ["Raspberries"], URLsearch: ["sampleURL"]}
    searchedTrack3 = {songSearch: ["Spirit in the Sky"], artistSearch: ["Norman Greenbaum"], albumsearch: ["Music from the Motion Picture Michael"], URLsearch: ["sampleURL"]}
    searchedTrack4 = {songSearch: ["I Want You Back"], artistSearch: ["The Jackson 5"], albumsearch: ["The Ultimate Collection: Jackson 5"], URLsearch: ["sampleURL"]}

    searchedTracks = [];
    searchedTracks.push(searchedTrack1, searchedTrack2, searchedTrack3, searchedTrack4);
    // save to storage
    localStorage.setItem("Search Results", JSON.stringify(searchedTracks));

    // console.log(searchedTrack1.songSearch)
    // console.log(searchedTrack1.artistSearch)
    // console.log(searchedTrack1.albumsearch)

    // Add div to the search results container
    $('<div class="Parent" id="search-parent1" ></div>').appendTo('#search-results');

    // Populate the "Search Results" field
    for (let i = 0; i < 2; i++) { 
    q = i + 1;
    // add the div for song info
    $('<li id="song-option' + q + '" class="Search' + q + ' Child' + q + '"></li>').appendTo('#search-parent1');
    // add the image
    $('<img class="spotifyLogo" src="./images/spotifyLogo.png" />').appendTo('#song-option' + q);
    // add the div for song info
     $('<div id="search-song-info' + q + '" class="task-info"></div>').appendTo('#song-option' + q);
    // add Song Name, Artist, and Ablum Name
    // console.log(searchedTracks[0].songSearch);
    $('<p class="task-name">' + searchedTracks[i].songSearch + '</p>').appendTo('#search-song-info' + q);
    $('<p class="task-name">' + searchedTracks[i].artistSearch +'</p>').appendTo('#search-song-info' + q);
    $('<p class="task-name">' + searchedTracks[i].albumsearch + '</p>').appendTo('#search-song-info' + q);

    // add the div for song info
    $('<div id="hold-button' + q + '" class="centerBtn task-info""></div>').appendTo('#song-option' + q);
    // add the play/add buttons
    $('<button class="btn playDelete">Play</button>').appendTo('#hold-button' + q);
    $('<button id="add-to-track" class="btn playDelete">Add</button>').appendTo('#hold-button' + q);
    }

    // Add div to the search results container
    $('<div class="Parent" id="search-parent2" ></div>').appendTo('#search-results');

    // Populate the "Search Results" field
    for (let i = 2; i < 4; i++) { 
        q = i + 1;
        // add the div for song info child 2 child 1
        $('<li id="song-option' + q + '"></li>').appendTo('#search-parent2');
        // add the image
        $('<img class="spotifyLogo" src="./images/spotifyLogo.png" />').appendTo('#song-option' + q);
        // add the div for song info
         $('<div id="search-song-info' + q + '" class="task-info"></div>').appendTo('#song-option' + q);
        // add Song Name, Artist, and Ablum Name
        // console.log(searchedTracks[0].songSearch);
        $('<p class="task-name">' + searchedTracks[i].songSearch + '</p>').appendTo('#search-song-info' + q);
        $('<p class="task-name">' + searchedTracks[i].artistSearch +'</p>').appendTo('#search-song-info' + q);
        $('<p class="task-name">' + searchedTracks[i].albumsearch + '</p>').appendTo('#search-song-info' + q);
    
        // add the div for song info
        $('<div id="hold-button' + q + '" class="centerBtn task-info""></div>').appendTo('#song-option' + q);
        // add the play/add buttons
        $('<button class="btn playDelete">Play</button>').appendTo('#hold-button' + q);
        $('<button id="add-to-track" class="btn playDelete">Add</button>').appendTo('#hold-button' + q);
        }
    $("#song-option3").addClass("Search3 Child2");
    $("#song-option4").addClass("Search4 Child1");

addTracks();
});




// Loads planner from local storage
var loadTrackList = function() {
    playList = JSON.parse(localStorage.getItem("Track List"));

    // if the user had not added any new sogngs-
    if (!playList) {
        // add the new div and give it an ID
        $('<p id="add-songs-warning">Click Stearch in the mixtape to add new songs!</p>').appendTo('#song-container');
        console.log("no tracks");

        // declaire new storage variable
        playList = {
            SongName: [],
            Artist: [],
            AlbumName: [],
            songURL: [],
        };
        // save to storage
        localStorage.setItem("Track List", JSON.stringify(playList));
        }

    // If the user has songs, display on the screen using a for loop?
    else{
    // for (let i = 0; i < 10; i++) { 
    // }
    }
};

var addTracks = function() {
// when the "add" button is clicked, the song details move to tracklist
$("#add-to-track").on("click", function() {
   console.log("add clicked!")
    // Grabs the song selected by targeted id
    var songSelected = event.target.parentNode.parentNode;
    var id = songSelected.getAttribute("id");
    var num = id.split("");

    searchedTracks = JSON.parse(localStorage.getItem("Search Results"));
    console.log(searchedTracks)
    n = 1
    i = num[11] - 1
    //If P is there, remove the p
    $( "#add-songs-warning" ).remove();
    // Add the list item to song container
    $('<li id="Song' + n + '"class="task-item""></li>').appendTo('#song-container');
    // add the div for song info
    $('<div id="hold-info"' + 'class="task-info""></div>').appendTo('#Song'+ n);
    // add the image
    $('<img class="spotifyLogo" src="./images/spotifyLogo.png" />').appendTo('#hold-info');
    // add Song Name, Artist, and Ablum Name
    $('<p class="task-name">' + searchedTracks[i].songSearch + '</p>').appendTo('#hold-info');
    $('<p class="task-name">' + searchedTracks[i].artistSearch + '</p>').appendTo('#hold-info');
    $('<p class="task-name">' + searchedTracks[i].albumsearch + '</p>').appendTo('#hold-info');

    // add the div for song info
    $('<div id="hold-buttons"' + 'class="task-info""></div>').appendTo('#Song'+ n);
    // add the pplay/delete button
    $('<button class="btn play-btn">Play</button>').appendTo('#hold-buttons');
    $('<button id= "deleteTrack" class="btn delete-btn">delete</button>').appendTo('#hold-buttons');
   
    // saves to local storage
    localStorage.setItem("Track List", JSON.stringify(playList));

// pass element to delete function
deleteSong();
});
}

// Delete song function
var deleteSong = function() {
$('#deleteTrack').click(function(){
    console.log("delete clicked!")
     // Grabs the song selected by targeted id
     var songSelected = event.target.parentNode.parentNode;
     var id = songSelected.getAttribute("id");
     console.log(id)
     // removes the song
     $("#" + id).remove();

     // If all songs are deleted: re-add the p element
    
     // saves to local storage
 });
}
// load songs for the first time
loadTrackList();


/*
COMPLETED
- local storage appears on page load
    - if no local storage exists, it is created for the user
    - TEMPORARY: a search results local storage is created to hold mock song variables
- when a user clicks search, search results appear
    - the results are saved to local storage
    - TEMPORARILY USING HARD CODED ELEMENTS TO LOCAL STORAGE
    - each song result will be a value placed in the object of either Track List or Search Result
    - when the songs are saved to local storage- they display on the page
- dynamically generate tracks to track list
    - if no tracks are present: p element appears informing user to search + add a song
- new id's added for targeting elements through event listeners
- when a user clicks add
    - the song data is saved in local storage
    - the add to track function runs and displays the song to the user
- songs are removed from the tracklist on click of the delete button

TO DO
- when the user clicks search again, the old storage is cleared and new data is saved
- when the user saves a song- that value is saved in local storage
    - when a user clicks delete- that local storage value in the object is removed
*/

/* 
FUTURE IMPROVEMENTS
- style the "no songs" p element
- turn loadTrackList into jQuery on load function?
- add search results to local storage in a seperate area to pull from?
*/

/*
ISSUES
- if a user "adds" a song multiple times- it messes up the target/format of the song itself
    - list item # needs to be added
    -  LOCAL STORAGE! 
*/

/*
Previous Track List Format
<li class="task-item" data-task-id="1">
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
</li>
*/

/*
Previous Search Results Format
        <!-- CHANGE: ADDED ID FOR DYNAMICALLY GENERATED ELEMENT TO TARGET -->
        <div class="Parent" id="search-parent">
          <!-- song populates -->
          <!-- CHANGE: ADDED ID FOR JQUERY BUTTON LISTENER -->
          <li id="song-option1" class="Search1 Child1" data-task-id="1">
            <img class="spotifyLogo" src="./images/spotifyLogo.png" />
            <!-- CHANGE: ADDED ID FOR DYNAMICALLY GENERATED ELEMENT TO TARGET -->
            <div id="search-song-info" class="task-info">
              <p class="task-name">Song Name</p>
              <p class="task-name">Artist</p>
              <p class="task-name">Album Name</p>
            </div>
            <div class="centerBtn">
              <button class="btn playDelete">Play</button>
              <!-- Play in the play in the "play song" -->
              <!-- CHANGE: ADDED ID FOR JQUERY BUTTON LISTENER -->
              <button id="add-to-track" class="btn playDelete">Add</button>
              <!-- Adds song to the "track list" -->
            </div>
          </li>
          <!-- song populates -->
          <li class="Search2 Child2" data-task-id="1">
            <img class="spotifyLogo" src="./images/spotifyLogo.png" />
            <div class="task-info">
              <p class="task-name">Song Name</p>
              <p class="task-name">Artist</p>
              <p class="task-name">Album Name</p>
            </div>
            <div class="centerBtn">
              <button class="btn playDelete">Play</button>
              <!-- Play in the play in the "play song" -->
              <button class="btn playDelete">Add</button>
              <!-- Adds song to the "track list" -->
            </div>
          </li>
        </div>
        <div class="Parent">
          <!-- song populates -->
          <li class="Search3 Child2" data-task-id="1">
            <img class="spotifyLogo" src="./images/spotifyLogo.png" />
            <div class="task-info">
              <p class="task-name">Song Name</p>
              <p class="task-name">Artist</p>
              <p class="task-name">Album Name</p>
            </div>
            <div class="centerBtn">
              <button class="btn playDelete">Play</button>
              <!-- Play in the play in the "play song" -->
              <button class="btn playDelete">Add</button>
              <!-- Adds song to the "track list" -->
            </div>
          </li>
          <!-- song populates -->
          <li class="Search4 Child1" data-task-id="1">
            <img class="spotifyLogo" src="./images/spotifyLogo.png" />
            <div class="task-info">
              <p class="task-name">Song Name</p>
              <p class="task-name">Artist</p>
              <p class="task-name">Album Name</p>
            </div>
            <div class="centerBtn">
              <button class="btn playDelete">Play</button>
              <!-- Play in the play in the "play song" -->
              <button class="btn playDelete">Add</button>
              <!-- Adds song to the "track list" -->
            </div>
          </li>
        </div>
*/