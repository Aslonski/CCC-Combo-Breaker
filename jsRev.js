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
		case "left" : xPos = "110px";
		break;
		case "up" : xPos = "177px";
		break;
		case "down" : xPos = "247px";
		break;
		case "right" : xPos = "317px";
		break;
	}

	this.direction = direction;
	this.image = $("<img src='./arrows/" + direction + ".gif'/>");
	this.image.css({
		position: "absolute",
		top: "615px",
		left: xPos
	});

	$('.stage').append(this.image);

}// ends CLASS Arrow

function Arrow2(direction) {
	// CSS spacings for the arrows //
	var xPos = null;

	switch(direction) {
    case "left_mini_bob_ross" : xPos = "110px";
    break;
    case "up_pog_champ" : xPos = "170px";
    break;
    case "down_resident_sleeper" : xPos = "217px";
    break;
    case "right_bible_thump" : xPos = "280px";
    break;
	}

	this.direction = direction;
	this.image = $("<img src='./arrows/" + direction + ".gif'/>");
	this.image.css({
		position: "absolute",
		top: "615px",
		left: xPos
	});

	$('.stage-right').append(this.image);

}// ends CLASS Arrow

// To enable animating the arrows
Arrow.prototype.step = function() {
	// Controls the speed of the arrows
	// arrowSpeed = (Math.floor(Math.random() * 9) + 1);
  // this.image.css("top", "-=" + arrowSpeed + "px");
	this.image.css("top", "-=6px");
};

Arrow2.prototype.step = function() {
	// Controls the speed of the arrows
	// arrowSpeed = (Math.floor(Math.random() * 9) + 1);
  // this.image.css("top", "-=" + arrowSpeed + "px");
	this.image.css("top", "-=6px");
};

// Deletes arrows when they get to bottom of page
Arrow.prototype.destroy = function() {
	// removes the image of the DOM
	this.image.remove();
	// Removes the note/arrow from memory/array
	notes.splice(0,1);
};

Arrow2.prototype.destroy = function() {
	// removes the image of the DOM
	this.image.remove();
	// Removes the note/arrow from memory/array
	notes.splice(0,1);
};

// Explodes arrow when hit
Arrow.prototype.explode = function() {
	this.image.remove();
};
Arrow2.prototype.explode = function() {
	this.image.remove();
};
// For random arrows
var randNum = 0;
// Frame increasing
var frame = 0;
// Determines the speed of notes
var arrowSpawnRate = 50;
// Set player score
var score = 0;
// Set combo
var streak = 0;
// Random generator for arrows
function randomGen() {
	// Randomizes between 1 and 4
	randNum = Math.floor(Math.random() * 8) + 1;
	switch(randNum) {
	case 1:
		notes.push(new Arrow("left"));
		break;
	case 2:
		notes.push(new Arrow("right"));
		break;
	case 3:
		notes.push(new Arrow("up"));
		break;
	case 4:
		notes.push(new Arrow("down"));
		break;
	case 5:
		notes.push(new Arrow2("left_mini_bob_ross"));
		break;
	case 6:
		notes.push(new Arrow2("right_bible_thump"));
		break;
	case 7:
		notes.push(new Arrow2("up_pog_champ"));
		break;
	case 8:
		notes.push(new Arrow2("down_resident_sleeper"));
		break;
	}
}// ends randomGen()
// Render function //
function render() {
	if (frame++ % arrowSpawnRate === 0) {
		randomGen();
	}
	// Animate arrows showering down //
	for (var i = notes.length - 1; i >= 0; i--) {
		notes[i].step();
		// Check for cleanup
		if (notes[i].image.position().top < -120) {
			notes[i].destroy();
			streak = 0;
			$('#streak').text(streak)
		}
	}
}// ends render()



// jQuery to animate arrows //
$(document).ready(function () {
	// shim layer with setTimeout fallback
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 40 / 75);
		};
	})();
	/*	place the rAF *before* the render()
		to assure as close to 60fps with the
		setTimeout fallback.					*/
	// Infinte loop for game play
	(function animloop() {
		requestAnimFrame(animloop);
		render();
	})();// ends (function animloop() )


});// ends $(doc).ready
// Listening for when the key is pressed
$(document).keydown( function(event) {
	for (var i = 0; i < notes.length; i++) {
			console.log(notes[i].image.position().top);
		if (event.keyCode == 65 && notes[i].direction == "left") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("LEFT! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		if (event.keyCode == 87 && notes[i].direction == "up") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("UP! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		if (event.keyCode == 83 && notes[i].direction == "down") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("DOWN! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		if (event.keyCode == 68 && notes[i].direction == "right") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("RIGHT! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		///
		if (event.keyCode == 37 && notes[i].direction == "left_mini_bob_ross") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("LEFT! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		if (event.keyCode == 38 && notes[i].direction == "up_pog_champ") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("UP! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		if (event.keyCode == 40 && notes[i].direction == "down_resident_sleeper") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("DOWN! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
		if (event.keyCode == 39 && notes[i].direction == "right_bible_thump") {
			if (notes[i].image.position().top > -100 && notes[i].image.position().top < -40) {
				console.log("RIGHT! "+notes[i].explode());
				score += 10;
				$('#score').text(score)
				streak += 1;
				$('#streak').text(streak)
			}
		}
	}// ends loop

});// ends $(doc).keyup
