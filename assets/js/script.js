$(document).ready(function () {

    // Initialize Firebase
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

    // At the page load and value changes, get a snapshot of the local data.
    // Create Firebase event for adding a train to the database
    database.ref().on("child_added", function (snapshot) {
        var data = snapshot.val();
        console.log(data);



    });

    // Listener on chat submit && displays to chatbox
    $('#chat-submit').on('click', function (e) {
        // Prevent page from refreshing
        e.preventDefault();
        
        updateChat();
    });

    // Listener - enter button
    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            // Prevent page from refreshing
            e.preventDefault();

            updateChat();
        }
    });
    
    function updateChat() {
        var chatText = $('#textbox').val().trim();

        $('#chatbox').prepend(`
            <div>${chatText}</div>
        `)

        $('#textbox').val('');
    }
});