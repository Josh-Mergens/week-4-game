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
  var am_i_real = Math.floor(Math.random() * 20) + 1;
  var rather_be_using = Math.floor(Math.random() * 20) + 1;
  var on_your_mark = 0;

  // set up click for jewels

  $("#butt1").on ("click", function(){
    on_your_mark = on_your_mark + paul;
      console.log("New Total= " + on_your_mark);
  //  $('final_score').text(on_your_mark);
          //sets win/lose conditions
  //      if (current_score == random){
    //      yerp();
    //    }
    //    else if (current_score > random){
    //      nerp();
    //    }
  });

  $("#butt2").on ("click", function(){
    on_your_mark = on_your_mark + sappy;
      console.log("New Total= " + on_your_mark);
  //  $('final_score').text(on_your_mark);
          //sets win/lose conditions
  //      if (current_score == random){
    //      yerp();
    //    }
    //    else if (current_score > random){
    //      nerp();
    //    }
  });

  $("#butt3").on ("click", function(){
    on_your_mark = on_your_mark + am_i_real;
      console.log("New Total= " + on_your_mark);
  //  $('final_score').text(on_your_mark);
          //sets win/lose conditions
  //      if (current_score == random){
    //      yerp();
    //    }
    //    else if (current_score > random){
    //      nerp();
    //    }
  });

  $("#butt4").on ("click", function(){
    on_your_mark = on_your_mark + rather_be_using;
      console.log("New Total= " + on_your_mark);
  //  $('final_score').text(on_your_mark);
          //sets win/lose conditions
  //      if (current_score == random){
    //      yerp();
    //    }
    //    else if (current_score > random){
    //      nerp();
    //    }
  });

});
