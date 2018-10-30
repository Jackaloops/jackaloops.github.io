// JavaScript
function reset() {
    container.innerHTML = "";
}

function go() {
    // Reset classes
    var classes = "";
    // Get random number
    var rand = Math.random();
    // Check for orange
    if (rand <= .05) {
        classes += " dashed";
    }
  
    rand = Math.random();
    if (rand <= .01) {
        classes += " orange";
    }
    
    rand = Math.random();
    if (rand <= .35) {
        classes += " green";
    }
  
    rand = Math.random();
    if (rand <= .81) {
        classes += " winner";
    }

    container.innerHTML += "<div class='" + classes + "'></div>";


}

function loopGo() {

    for (var i = 0; i < 100; i++) {
        go();
    }
}