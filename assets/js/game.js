  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyBrS7Gmay1EPSspmnPMilfk-LNTGf_1jzk",
  //   authDomain: "rps-multiplayer-ac69b.firebaseapp.com",
  //   databaseURL: "https://rps-multiplayer-ac69b.firebaseio.com",
  //   projectId: "rps-multiplayer-ac69b",
  //   storageBucket: "rps-multiplayer-ac69b.appspot.com",
  //   messagingSenderId: "237597751877"
  // };
  // firebase.initializeApp(config);

  // var database = firebase.database();

  // need variables for player 1 and player 2
  var playerONE = "";
 // var playerTWO = "";
  // variables need to take the value from the form box
  $("form").eq(0).submit(function(event){
    event.preventDefault();
    var userInput = $("#name-input").val();
    playerONE = userInput;
    console.log(playerONE);
    console.log(userInput);
  })
  // we need to update Firebase to upload the names of these players
  // max of 2 players allowed
  // there needs to be a toggle jquery untion for Hi NAME! You are Player i
  // needs to be variables for wins and losses that is recorded in the database
  // needs to be toggle function for wins and losses at the bottom of each player box