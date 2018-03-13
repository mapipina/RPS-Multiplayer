  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrS7Gmay1EPSspmnPMilfk-LNTGf_1jzk",
    authDomain: "rps-multiplayer-ac69b.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-ac69b.firebaseio.com",
    projectId: "rps-multiplayer-ac69b",
    storageBucket: "rps-multiplayer-ac69b.appspot.com",
    messagingSenderId: "237597751877"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

// need variables for player 1 and player 2
  var playerONE = "";
  var playerTWO = "";

// needs to be variables for wins and losses that is recorded in the database
  var p1Wins = 0;
  p1Losses = 0;
  p2Wins = 0;
  p2Losses = 0;
// function to toggle the form once player one is selected
  var toggleForm = function(){
    $("form").hide();
    var greeting = "Hi " + playerONE + "! You are Player 1"
    $("#form").text(greeting);
  };
  // variables need to take the value from the form box
  $("form").eq(0).submit(function(event){
    event.preventDefault();
    var userInput = $("#name-input").val();
    playerONE = userInput;
    console.log(playerONE);
    console.log(userInput);
  // clear out the name form
    $("#name-input").val("");
  // need to inform user that they are player i
    toggleForm();
  // we need to update Firebase to upload the names of these players
    database.ref('players').child('player1').update({
      name: playerONE, 
      wins: p1Wins, 
      losses: p1Losses})
  });


  // need to update the player box to reflect name and choices
  database.ref('players/').child('player1').on("value", function(snapshot){
    //console logging everything first 
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().wins);
    console.log(snapshot.val().losses);

    playerONE = (snapshot.val().name);
    wins = (snapshot.val().wins);
    losses = (snapshot.val().losses);
    $("#p1").text(playerONE);
    $("#p1-box").append("<div>" + "Wins:" + wins + " Losses:" + losses + "</div>");
  });

  // Repeat everything for second player. Need IF statement
  var newUser = function() {
    $("form").submit(function(event){
      event.preventDefault();
      var userInput = $("#name-input").val();
      playerTWO = userInput;
    // clear out the name form
      $("#name-input").val("");
    // need to inform user that they are player i
      $("form").hide();
      var greeting = "Hi " + playerTWO + "! You are Player 2"
      $("#form").text(greeting);
    // we need to update Firebase to upload the names of these players
      database.ref('players').child('player2').update({
        name: playerTWO, 
        wins: p2Wins, 
        losses: p2Losses})
    });
  };


  function updatePlayerTWO () {
  //  var record = database.ref('players/').child('player1');
    if (playerOne !== null) {
      newUser();
    }
    };

// PSEUDO-CODING THE ENTIRE GAMEPLAY WITH THE EXCEPTION OF CHAT

  // var turnCounter = 0;
  // p1Choice = $("#p1-box.choices-div").val();
  // p2Choice = $("#p2-box.choices-div").val();
  // // max of 2 players allowed - not sure how the fuck to do this besides hiding form
  // // on.click event listeners need to listen to each player's choice
  // var playerChoices =  $(".player-boxes").click(function(){
  // // within the on.click event listeners IF statements comparing the choices
  //     if (p1Choice === 'rock' && p2Choice === 'scissors') {
  //     // either player's win/loss counter needs to be updated
  //       p1Wins++;
  //       p2Losses++;
  //       turnCounter++;
  //     } else if (p1Choice === 'paper' && p2Choice === 'rock') {
  //       p1Wins++;
  //       p2Losses++;
  //       turnCounter++;
  //     } else if (p1Choice === 'scissors' && p2Choice === 'paper') {
  //       p1Wins++;
  //       p2Losses++;
  //       turnCounter++;
  //     } else if (p1Choice === p2Choice) {
  //       turnCounter++;
  //     } else if (p2Choice === 'rock' && p1Choice === 'scissors') {
  //       p2Wins++;
  //       p1Losses++;
  //       turnCounter++;
  //     } else if (p2Choice === 'paper' && p1Choice === 'rock') {
  //       p2Wins++;
  //       p1Losses++;
  //       turnCounter++;
  //     } else if (p2Choice === 'scissors' && p1Choice === 'paper') {
  //       p2Wins++;
  //       p1Losses++;
  //       turnCounter++;
  //     }
  //   });



  // // function for gameplay once both players are live
  // function initiateGame (){
  // // gameplay needs to SHOW players options between rock, paper, scissors
  //   var choices = [rock, paper, scissors];
  //   choicesDiv = $("<div>").addClass("choices-div")
  //   choicesDiv.append(choices);
  //   $(".player-boxes").append(choicesDiv);
  //   playerChoices();
  //   // win/loss counter AND turn counter need to be sent to database
  //   document.ref('players').child('player1').update({
  //     wins: p1Wins, 
  //     losses: p1Losses
  //   });
  //   document.ref('players').child('player2').update({
  //     wins: p2Wins,
  //     losses: p2Losses
  //   });
  //   // if player refreshes or closes browser, they're out of the game
  //   // not sure how to make it player-specific just yet
  //   if (sessionStorage.getItem('is_reloaded')) {
  //     //need to stop game
  //     // record in db is then deleted
  //     database.ref('players').child('player1').remove()
  //   };
    
  // };
    


