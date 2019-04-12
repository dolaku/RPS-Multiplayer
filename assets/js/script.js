/*--------------------------------
        Global Variables
--------------------------------*/
var p1Present;
var p2Present;
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

// Clears player info
database.ref().child('/players/').remove();

// At the page load and value changes, get a snapshot of the local data.
// Create Firebase event for adding a train to the database
database.ref('/players/').on("value", function (snapshot) {
    var data = snapshot.val();
    console.log(data);



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
    // Show choices
    $('#player1').find('ul')
        .removeClass('d-none');
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
    $('#player2').find('.player-info')
        .addClass('d-none');
    // Show choices
    $('#player2').find('ul')
        .removeClass('d-none');
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

//