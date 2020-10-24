myID = document.getElementById("myID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 25) {
    myID.className = "headerbackground show"
  } else {
    myID.className = "headerbackground hide"
  }
};

window.addEventListener("scroll", myScrollFunc);
