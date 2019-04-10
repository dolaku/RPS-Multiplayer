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

    // Listener on form submit
    $('#form-submit').on('click', function (event) {
        // stops page from refreshing
        event.preventDefault();

    });
});