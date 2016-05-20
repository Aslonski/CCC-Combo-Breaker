// 'notes' to store Arrows
var notes = [];
// ==== CLASS FOR ARROWS ==== //
// 1. Direction of arrows
// 2. jQuery img that links to direction bottom
// 3. Destroy when it arrow gets to the
// 4. Explode when arrow gets to the bottom
// Class Arrow
function Arrow(direction) {
  // CSS spacings for the arrows //
  var xPos = null;
  switch(direction) {
    case "left_mini_bob_ross" : xPos = "115px";
    break;
    case "up_pog_champ" : xPos = "182";
    break;
    case "down_resident_sleeper" : xPos = "252px";
    break;
    case "right_bible_thump" : xPos = "322px";
    break;
  }
  this.direction = direction;
  this.image = $("<img src='./arrows/" + direction + ".0'/>");
  this.image.css({
    position: "absolute",
    top: "0px",
    left: xPos
  });
  $('#stage-left').append(this.image);
  // $('#stage-right').append(this.image);
}// ends CLASS Arrow
// To enable animating the arrows
Arrow.prototype.step = function() {
  // Controls the speed of the arrows
  // arrowSpeed = (Math.floor(Math.random() * 9) + 1);
  // this.image.css("top", "-=" + arrowSpeed + "px");
  this.image.css("top", "+=4px")
};
// Deletes arrows when they get to bottom of page
Arrow.prototype.destroy = function() {
  // removes the image of the DOM

  // Removes the note/arrow from memory/array
  if (this.length == 2) {
    this[0].image.remove();
    this[1].image.remove();
    notes.splice(0,2);//shift()?
  }
  else {
    this.image.remove();
    notes.splice(0,1);
  }
};
// Explodes arrow when hit
Arrow.prototype.explode = function() {
  this.image.remove();
};
// For random arrows
var randNum = 0;
// Frame increasing
var frame = 0;
// Determines the speed of notes
var arrowSpawnRate = 40;
// Random generator for arrows
function kappaGen() {
  // Randomizes between 1 and 4
  randNum = Math.floor(Math.random() * 5) + 1;
  if (randNum === 1) {
    notes.push(new Arrow("left_mini_bob_ross"));
  }
  if (randNum === 2) {
    notes.push(new Arrow("right_bible_thump"));
  }
  if (randNum === 3) {
    notes.push(new Arrow("up_pog_champ"));
  }
  if (randNum === 4) {
    notes.push(new Arrow("down_resident_sleeper"));
  }
  if (randNum === 5) {
    notes.push(new Arrow("left_mini_bob_ross"));
    notes.push(new Arrow("up_pog_champ"));
  }
  if (randNum === 6) {
    notes.push(new Arrow("left_mini_bob_ross"));
    notes.push(new Arrow("down_resident_sleeper"));
  }
  if (randNum === 7) {
    notes.push(new Arrow("left_mini_bob_ross"));
    notes.push(new Arrow("right_bible_thump"));
  }
  if (randNum === 8) {
    notes.push(new Arrow("up_pog_champ"));
    notes.push(new Arrow("down_resident_sleeper"));
  }
  if (randNum === 9) {
    notes.push(new Arrow("up_pog_champ"));
    notes.push(new Arrow("right_bible_thump"));
  }
  if (randNum === 10) {
    notes.push(new Arrow("down_resident_sleeper"));
    notes.push(new Arrow("right_bible_thump"));
  }
}// ends kappaGen()
// kappaRender function //
function kappaRender() {
  if (frame++ % arrowSpawnRate === 0) {
    kappaGen();
  }
  // Animate arrows showering down //
  for (var i = notes.length - 1; i >= 0; i--) {

    notes[i].step();
    // Check for cleanup
    if (notes[i].image.position().top > 615) {
      notes[i].destroy();
    } c xx
  }
}// ends kappaRender()
// jQuery to animate arrows //
$(document).ready(function () {
  $('#kappa').on('submit', function engageKappaMode(event) {
    event.preventDefault();


  })
  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 40 / 75);
    };
  })();
  /*  place the rAF *before* the kappaRender()
    to assure as close to 60fps with the
    setTimeout fallback.          */
  // Infinte loop for game play
  (function animloop() {
    requestAnimFrame(animloop);
    kappaRender();
  })();// ends (function animloop() )
});// ends $(doc).ready
// Listening for when the key is pressed
$(document).keydown( function(event) {
  for (var i = 0; i < notes.length; i++) {
      console.log(notes[i].image.position().top);
    if (event.keyCode == 37 && notes[i].direction == "left") {
      if (notes[i].image.position().top > 490 && notes[i].image.position().top < 530) {
        console.log("LEFT! "+notes[i].explode());
      }
    }
    if (event.keyCode == 38 && notes[i].direction == "up") {
      if (notes[i].image.position().top > 490 && notes[i].image.position().top < 530) {
        console.log("UP! "+notes[i].explode());
      }
    }
    if (event.keyCode == 40 && notes[i].direction == "down") {
      if (notes[i].image.position().top > 490 && notes[i].image.position().top < 530) {
        console.log("DOWN! "+notes[i].explode());
      }
    }
    if (event.keyCode == 39 && notes[i].direction == "right") {
      if (notes[i].image.position().top > 490 && notes[i].image.position().top < 530) {
        console.log("RIGHT! "+notes[i].explode());
      }
    }
  }// ends loop
});// ends $(doc).keyup
