const canvasWidth = window.innerHeight
const canvasHeight = window.innerHeight
let bgColor = 0
let gifs
let gifChosen = false
let chosenGif = null
function preload() {
  man = loadImage('assets/man.png')

  gifs = Array.from({length : GIFDATA.length}, (el,i)=>{
      // return createImg(GIFDATA[i].img, GIFDATA[i].alt)
      return loadImage(GIFDATA[i].img)
  })

  // hideAllGifs(gifs)
}


function setup() {
  createCanvas(canvasWidth, canvasHeight);

bgColor = color( random(255), random(255), random(255) );
  
// hideAllGifs(gifs)
}
function draw() {
   background(bgColor);
  if(gifChosen){
    image(gifs[chosenGif], 0,0, canvasWidth, canvasHeight)

  }else{
    image(man,0,0, canvasWidth, canvasHeight)
  }
 

  // gif.hide();
}

function mousePressed() {
  // hideAllGifs(gifs)
  bgColor = color( random(255), random(255), random(255) );
  gifChosen = true
  chosenGif = Math.floor(random(0, gifs.length))
  gifs[chosenGif].reset()
 
}


// function hideAllGifs(arr){
//   arr.forEach(item => item.hide())
// }