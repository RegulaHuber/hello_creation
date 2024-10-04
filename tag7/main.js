// Auslagerung des JS

// Debuggen: Etwas erfahren über eine Variabel, nicht für User gedacht. Nur ersichtlich im Inspektor.
//console.log("Hallo"); 

// console.log(
//     document.getElementById("element")
// ); //Schreibweise ist wichtig! 

let n = 0;
console.log(n);

n = n + 1;
console.log(n); // n ist eine Zahl


/*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; // dazuzählen 1
    // document.getElementById("element").style.left = "100px"; 
    document.getElementById("element").style.left = n + "4px";
    document.getElementById("element").style.top = n + "8px";
}

function neuesElement() {
    let div = document.createElement("div");  //neuen Knoten
    div.classList.add('random');
    document.body.appendChild(div);
}


function starteAnimation() {
    let element = document.getElementById('kreis2');
    element.style.animationPlayState = "running";
}

//erst beim Scrollen starten

window.addEventListener("scroll", starteAnimation);

// Mousezeiger

var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollower = document.querySelector(".cursorFollower");
const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

setInterval(function () {
  xp += (mouseX - xp) / 15;
  yp += (mouseY - yp) / 15;

  cursorFollower.style.left = xp + "px";
  cursorFollower.style.top = yp + "px";
}, 20);

setInterval(function () {
  xpDot += (mouseX - xpDot) / 25;
  ypDot += (mouseY - ypDot) / 25;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 20);
