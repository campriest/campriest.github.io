
  var weatherJSON;

  var urlBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var queryCity = 'Brooklyn,us';
  var units = '&units=imperial';
  var apiID= '&APPID=876382d07d3d066d4790e041af4c051d';

  var input;
  http://api.openweathermap.org/data/2.5/weather?q=New%20York,%20us&appid=e493cd8a869d0c0ce9d5e6ef4870d52b&units=imperial




var weatherData;


var weatherTwo;

var baseTwo= 'http://api.openweathermap.org/data/2.5/weather?q=';
var queryTwo= 'Queens,us';
var unitTwo= '&units=imperial';
var apiTwo= '&APPID=876382d07d3d066d4790e041af4c051d';





var xPos = 5;
var xPosTwo=100;
var x=0;

function preload(){
    var url = urlBase + queryCity + apiID +units;
     weather = loadJSON(url);
    var urlTwo = baseTwo + queryTwo + unitTwo + apiTwo;
     weatherTwo = loadJSON(urlTwo);
}
function setup() {
    createCanvas(windowWidth, windowHeight);

    //
    // loadJSON(urlTwo, getDataTwo);
    //
    //
    //
    //     console.log(urlTwo);
}

function draw() {
    var title = createP("WIND RACER");
        title.position(50, 10);
        title.class('weatherText');

    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    var wind = weather.wind.speed;

    var textOne = createP("Brooklyn has " + wind + " MPH wind");
    // var textTwo = ;
    // var textThree = ;


    textOne.position(50,60);
    textOne.class('weatherText');

    var tempTwo = weatherTwo.main.temp;
    var humidityTwo = weatherTwo.main.humidity;
    var windTwo = weatherTwo.wind.speed;

    var textTwo = createP("Queens has " + windTwo + " MPH wind");

    textTwo.position(50, 120);
    textTwo.class('weatherText');

    console.log(temp);
    var speedOne =  wind;
    var speedTwo = windTwo;
    background(255, 240, 220);
    fill(0);
    ellipse(xPos + speedOne+5, height/2+100, 80, 80);
    fill(0);
    ellipse(xPos + speedTwo, height/2, 80, 80);
    xPos++;

        if(xPos > windowWidth){
            xPos=0;



        }




}



// function getData(data){
//
//     weatherData = data.main.temp;
//     cityData=data.main.humidity;
//     wind =data.wind.speed;
//
//
// console.log(wind);
//
// var text = createP(weatherData + " degrees");
// var city = createP(cityData + " humidity");
// var speed = createP(wind + " speed");
//
//
//     text.position(50,60);
//     text.class('weatherText');
//     city.position(50,120);
//     city.class('cityText');
//     speed.position(50,5);
//     speed.class('windText');
//
//
//
//
//
// }
//
// function getDataTwo(data){
//     var weatherDataTwo = data.main.temp;
//     var cityDataTwo = data.main.humidity;
//     var windTwo = data.wind.speed;
//
//
//
//
// }
