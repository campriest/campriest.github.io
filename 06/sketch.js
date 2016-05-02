

var concordance = {};
var circleSize;






var Genius = require("node-genius");

var geniusClient = new Genius('juJraY6FF42ucNoc5r6MaGQMgptq6akp2SC3FEWDnwnuGFchbvJQNAYiMdbG3cOc');

// Call functions on that instance:
geniusClient.getSong("378196", function (error, song) {
  if (error)
    console.error("Whops. Something went wrong:", error);
  else
    console.log("Hoorah. Here is the song: ", JSON.parse(song));
});













function setup() {

  createCanvas(windowWidth, windowHeight);


  data = "Throughout my life No matter what I've done. You've been merciful and your love endureth Through all things. For that I am eternally grateful";
  data += "Since my date of birth bought you nothing but hurtPlay those video games, stole change from ya purseSat on the cold court bench 'til I was arraigned in ya skirtSaw the pain in ya face, still you maintained a smirkAll you did was motivate me, Don't let 'em hold you back What I do? I turned around and I sold you crackI was a bastard for that, still I'm drowning in shameJust remember one thing now: you're not to blameYou was newly separated tryin' to escape ya worldAnd through my thirst I didn't help you I just made things worseI hated me and everybody that created crackHad me thinkin' the newest kicks and the latest gatStill haven't apologized, so please play this backWhile I try to come to terms with such a heinous actYou know in more than one way cocaine numbs the brainAll I did was think about how the funds once cameThen I ran across this memory and it stung the brainHow can you ever destroy the beauty from which one cameThat's a savage you're the reason why me and these beats make a marriageWhy I rhyme above average and I ain't shitGlad you got yourself together, no thanks to meStrong and beautiful the way thangs should beYou must love me";
  data += "So it has been. So it must be with this generation of Americans.That we are in the midst of crisis is now well understood. Our nation is at war, against a far-reaching network of violence and hatred. Our economy is badly weakened, a consequence of greed and irresponsibility on the part of some, but also our collective failure to make hard choices and prepare the nation for a new age. Homes have been lost; jobs shed; businesses shuttered. Our health care is too costly; our schools fail too many; and each day brings further evidence that the ways we use energy strengthen our adversaries and threaten our planet.These are the indicators of crisis, subject to data and statistics. Less measurable but no less profound is a sapping of confidence across our land - a nagging fear that America's decline is inevitable, and that the next generation must lower its sights.";
  data += " ";
  data += " ";

  var tokens = data.split(/\W+/);






  // for (var i = 0; i < tokens.length; i++) {
  //   var word = tokens[i];
  //   //if its a new word:
  //   if (concordance[word] === undefined) {
  //     concordance[word] = 1;
  //   } else { // if we've seen this word before:
  //     concordance[word]++;
  //   }
  // }




  // console.log(concordance);

  var keys = [];
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i];
    if (concordance[word] === undefined) {

      concordance[word] = 1;


      keys.push(word); //if we have a new word, add it to the array.
    } else {
      concordance[word]++;

    }
  }

  // console.log(keys);

  keys.sort(function(a, b) {
    return (concordance[b] - concordance[a]);
  });

  //or,
  // var concordanceSort = function(a, b) {
  //   return (concordance[b] - concordance[a]);
  // }
  // keys.sort(concordanceSort);



  //next, now that we have sorted keys, we can iterate over the concordance.

  for (var i = 0; i < keys.length; i++) {
    // console.log(keys[i] + ': ' + concordance[keys[i]]); //THIS IS THE IMPORTANT PART!

          if(concordance[keys[i]] > 1 && concordance[keys[i]] < 3){
                  var circleSize=10;
            } else if(concordance[keys[i]] > 3 && concordance[keys[i]]< 6){
                    circleSize=20;

            }else{
                    circleSize=2;
            }

            fill(random(0,150));
            textSize(random(10, 32));
            var xPos=random(windowWidth-50);
            var yPos=random(windowHeight-50);
            text(keys[i], xPos, yPos);
            fill(255,0,0);

            ellipse(xPos+10, yPos+10, 10+circleSize, 10+circleSize);
      }
}


function draw() {




}
