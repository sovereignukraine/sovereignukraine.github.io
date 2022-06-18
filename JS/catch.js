var leftOffset = 0;
var topOffset = 0;
var i = 0;
var interval = 30;

var moveHeading = function() {
   $("#heading").offset({left: leftOffset, top:topOffset });
    if (leftOffset < 300 && topOffset === 0) {leftOffset++;
   }else if(topOffset < 300 && leftOffset === 300) {topOffset++
   }else if (leftOffset > 0 && topOffset === 300) {leftOffset--
   }else{topOffset--};
};

var click = function(){
      if (i < 9) {
      clearInterval(speed);
      i++;
      $("#heading").text(i);
      interval = interval/i;
      speed = setInterval(moveHeading,interval);   
   }else{
      clearInterval(speed);
      $("#heading").text("You win!");
   }    
};

$("#heading").click(click);

var speed = setInterval(moveHeading, interval);   