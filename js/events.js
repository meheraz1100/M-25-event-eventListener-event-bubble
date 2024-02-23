// option - 1
//directly set on the html element
{
  /* <button onclick="console.log(65)">Another Btn</button> */
}

// console.log("this is separate JS file");
//option - 2
// [IMPORTANT]
{
  /* <button onclick="makeRed()">Make red</button> */
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option - 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

//option - 3 another [we will use this sometime]
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option - 4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option - 4 another
const makeGreenBtn = document.getElementById("make-green");
makeGreenBtn.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});


// option - 4 final
//[IMPORTANT WE WILL USE THIS MOSTLY]
document.getElementById('make-goldenrod').addEventListener('click', function makeGoldenrod(){
    document.body.style.backgroundColor = 'goldenrod';
})