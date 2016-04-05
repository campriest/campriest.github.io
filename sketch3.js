var quote = 'If Hillary Clinton cannot satisfy her husband what makes her think she can satisfy America';

var newQuote;

var letters=[];

var words=[];

// var currentX;
// var currentY;

// function preload(){
//     myDon= loadSound('');
//
// }

var myArea;
var headline;

function preload(){
    donSound= loadSound('tragedy.mp3');


}

function setup(){
    myArea = createCanvas(windowWidth, windowHeight);
    headline = createElement('h1', 'Donald Trump Magnetic Poetry Reader');
    this.headline.position(40,0);
    this.headline.style('font-family', 'Montserrat');
    this.headline.style('size', '50px');
    this.headline.style('color', 'rgb(255, 10, 10)');
    myArea.parent('back');
    newQuote = quote.split(' ');
        for(var i=0; i < newQuote.length; i++){
            words[i] = new Words(newQuote[i], random(0, windowWidth - 200), random(0, windowHeight - 20));
            console.log(newQuote[i]);
        }
    donSound.setVolume(0.9);




}

function draw(){
    background(255, 255, 220);
    for(var i=0; i< words.length; i++){
        words[i].update();
        words[i].show();
    }
}



function Words(word, posX, posY){
    this.currentX = posX;
    this.currentY = posY;
    this.word = word;
    this.dragging = false;
    this.col = color(255, 255, 255);
    this.rad = 30 + this.word.length * 3;

    this.block = createP(this.word);
    this.block.position(this.currentX, this.currentY);
    this.block.style('background-color', 'rgb(40, 0, 255)');
    this.block.mouseOver(this.hoverOn);
    this.block.mouseOut(this.hoverOff);
    this.block.style('font-size', '25px');
}

Words.prototype.hoverOn = function() {
    this.style('background-color', 'rgb(0,0,0)');
    donSound.play();



    // this.position(mouseX - 15, mouseY - 15);
};

Words.prototype.hoverOff = function() {
    this.style('background-color', 'rgb(5,100,255)');
};

Words.prototype.update = function(){

    //this.block.mousePressed(function(){console.log(true)});
    if(mouseIsPressed){
        if (dist(mouseX, mouseY, this.currentX + 15, this.currentY + 20) < this.rad/2) {
            var otherDragged = false;
            for(var i=0; i< words.length; i++){
                if (words[i].dragging === true) {
                    otherDragged = true;
                }
            }
            if (otherDragged === false) {
                this.dragging = true;
            }
        }
    }

    if (!mouseIsPressed) {
        if (this.dragging) {
            this.dragging = false;
            this.currentX = mouseX - 15;
            this.currentY = mouseY - 20;
            this.block.position(this.currentX, this.currentY);
        }
    }

    if (this.dragging) {
        this.currentX = mouseX-15;
        this.currentY = mouseY-20;
        this.block.position(this.currentX, this.currentY);

    }

    if (dist(mouseX, mouseY, this.currentX + 15, this.currentY +20) < this.rad/2) {
        this.col = color(0,0,0);
    } else {
        this.col = color(255);
    }
}

Words.prototype.show= function(){
    fill(this.col);
    // ellipse(this.currentX + 15, this.currentY + 20, this.rad, 50);

    // textSize(30);
}
