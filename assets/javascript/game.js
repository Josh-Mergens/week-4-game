$(document).ready (function() {

  // selects a random number to be shown at the start of the game
  // number should be should be between 20 - 100
  var random = Math.floor(Math.random() * 100) + 1;

  // append random number to target id
  $("#target").text(random);

  // set up random number for each jewel
  // random number between 1 - 10

  var paul = Math.floor(Math.random() * 20) + 1;
  var sappy = Math.floor(Math.random() * 20) + 1;
  var amIreal = Math.floor(Math.random() * 20) + 1;
  var ratherBeUsing = Math.floor(Math.random() * 20) + 1;

  // set up click for jewels

  // declare variables for tallies
  var total = 0;
  var rock = 0;
  var suck = 0;

  // set win/lose conditions

  // add the wins to the userTotal

  // add the losses to the userTotal

  // reset the game
  $('#uWin').text(rock);
  $('#uSuk').text(suck);
});
