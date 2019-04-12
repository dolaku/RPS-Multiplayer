/*--------------------------------
        Global Variables
--------------------------------*/
var p1Present = false;
var p2Present = false;
var p1Name;
var p2Name;
var p1Choice;
var p2Choice;

/*--------------------------------
        Firebase Variables
--------------------------------*/
var config = {
    apiKey: "AIzaSyBkMHv8QbLg6FH1XRJU802sMDL2Nm-Rlos",
    authDomain: "rps-pvp.firebaseapp.com",
    databaseURL: "https://rps-pvp.firebaseio.com",
    projectId: "rps-pvp",
    storageBucket: "rps-pvp.appspot.com",
    messagingSenderId: "761738374361"
};
firebase.initializeApp(config);

var database = firebase.database();


/*
// (CRITICAL - BLOCK) --------------------------- //
// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function (snap) {
    console.log(snap);
    // If they are connected..
    if (snap.val()) {

        // Add user to the connections list.
        var con = connectionsRef.push(true);

        // Remove user from the connection list when they disconnect.
        con.onDisconnect().remove();
    }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function (snapshot) {

    // Display the viewer count in the html.
    // The number of online users is the number of children in the connections list.
    $("#watchers").text(snapshot.numChildren());
});

// (CRITICAL - BLOCK) --------------------------- //
*/

// At the page load and value changes, get a snapshot of the local data.
// Create Firebase event for adding a train to the database
database.ref().on("child_added", function (snapshot) {
    var data = snapshot.val();



});

/*--------------------------------
            Listeners
--------------------------------*/

// Add player1
$('#p1-name-submit').on('click', function () {
    // get p1 info and store it in an object
    p1Name = $('#p1-info').val().trim();
    console.log(p1Name + ' is in da house!!');
    p1Present = {
        name: p1Name,
        wins: 0,
        losses: 0,
        ties: 0,
        choice: ''
    };

    // Add p1 object to database
    database.ref().child('/players/p1').set(p1Present);

    // Clear & hide input field
    $('#p1-info').val('');
    $('#player1').find('.player-info').addClass('d-none');
    // Update DOM for p1 name
    $('#player1').find('h4').text(p1Present.name);
});

// Add player2
$('#p2-name-submit').on('click', function () {
    // get p2 info and store it in an object
    p2Name = $('#p2-info').val().trim();
    console.log(p2Name + ' is here here here!!');
    p2Present = {
        name: p2Name,
        wins: 0,
        losses: 0,
        ties: 0,
        choice: ''
    };

    // Add p2 object to database
    database.ref().child('/players/p2').set(p2Present);

    // Clear & hide input field
    $('#p2-info').val('');
    $('#player2').find('.player-info').addClass('d-none');
    // Update DOM for p1 name
    $('#player2').find('h4').text(p2Present.name);
});

// Chat submit && displays to chatbox
$('#chat-submit').on('click', function (e) {
    // Prevent page from refreshing
    e.preventDefault();

    updateChat();
});

// Chat enter button submitting
$(document).on('keypress', function (e) {
    if (e.which == 13) {
        // Prevent page from refreshing
        e.preventDefault();

        updateChat();
    }
});


/*--------------------------------
            Functions
--------------------------------*/

// Adds newest message to bottom of chatbox
function updateChat() {
    var chatText = $('#textbox').val().trim();

    $('#chatbox').prepend(`
            <div>${chatText}</div>
        `)

    $('#textbox').val('');
}