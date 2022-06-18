// Getting rundom number from 0 to Size
var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};

// Calculating distance between event and target
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX*diffX)+(diffY*diffY));
};

//Getting string that showing distance
var getDistanceHint = function (distance) {
    if (distance < 10){
        return "Boiling!!!";
    } else if (distance < 20) {
        return "Super hot";
    } else if (distance < 60) {
        return "Hot";
    } else if (distance < 100) {
        return "Warm";
    } else if (distance < 200) {
        return "Cold"
    } else if (distance < 320) {
        return "Super cold";
    } else {
        return "Freezing!!!";
    }
    };

// Setting up parameters    
    var width = 600;
    var height = 600;
    var clicks = 50;

// Creating random location of target
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

//Adding event listener for clicks
$("#map").click(function(event) {
    clicks--;

    //Getting distance between event and target
    var distance = getDistance(event, target);

    //Converting distance into Hint
    var distanceHint = getDistanceHint(distance);

    //Updating #distance-element with new hint
    $("#distance").text(distanceHint + " (clicks left " + clicks + ' )');

    //If click was made close enough - congratulating a player 
    if (distance < 8) {
        alert("You find the treasure in "+ (50 - clicks) + " clicks!");
    };
    if (clicks === 0) {
        alert("You lose! Reload the page to start play again.");   
    };
});