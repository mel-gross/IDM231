
 //GOOD PRACTICES/WORKFLOW

//have variables declared on top of page
//SINGLE QUOTES
// create and remove elements and event listeners.
//Create troubleshooting functions that aare called when blur out of input field. if more than 31 on the day,if less than 2letters on name, tc..
//variables

const resultSign = { "resultSign" :[
{"name":["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemni","Cancer","Leo","Virgo","Libra","Scorpio","Sargittarius"]}, 
{"icon":["./graphicWork/capricorn.png","./graphicWork/aquarius.png","./graphicWork/pisces.png","./graphicWork/aries.png","./graphicWork/taurus.png","./graphicWork/gemni.png","./graphicWork/cancer.png","./graphicWork/leo.png","./graphicWork/virgo.png","./graphicWork/libra.png","./graphicWork/scorpio.png","./graphicWork/sargittarius.png"]} ,
{"description":["You can always find Capricorn at the top of the heap! The Mountain Goat combines its traditional methods with powerful determination to climb the ladder of success each and every day. Classy and reserved, Capricorn likes to play hard, and work harder.",
                "The worldly Water-bearer is a progressive spirit who’s focused on the greater good. When this rebellious sign isn’t satisfied with the way things are, they’re experts at garnering the support they need to instigate change. Ruled more by the head than the heart, Aquarius’ brilliant ideas and visionary plans inspire us all to raise the bar in our everyday lives.",
                "The last sign of the zodiac is where the real magic lies! With a soul as deep and vast as the oceans, Pisces thrives in a world of fantasy, where its imagination can flow freely. Driven by its intuition and strongly connected to the spiritual world, the sign of the Fishes knows how to balance cold, hard reality with the warmth of love and understanding.",
                "Aries is always ready to take charge and conquer whatever challenge they meet. Courageous and competitive, this sign of the Ram is a powerful force, carving paths through new territory to find undiscovered treasures. This fearless sign lives life as a warrior, infusing everything it touches with fire, passion, and strength.",
                "Symbolized by the Bull, Taurus is known for being stubborn. But it's not about standing in the way -- Taurus' stubbornness comes through in its sense of determination. Refusing to give up, Taurus will push through to the end, no matter what tries to block its path. Careful and low-risk, this sign of the Bull knows that slow and steady wins the race.",
                "Gemini is like a sponge, soaking up as much information as they possibly can. Whether it’s through reading, talking, or writing, Gemini’s thirst for knowledge is constant. As the most talkative sign of the zodiac, the Twins are known to be social, and are always on the lookout for a good time. Thriving on variety, you never know what you’ll get with Gemini!",
                "Both emotional and intuitive, Cancer is one of the most soft and gentle signs of the zodiac, but don’t let that fool you: Cancer is a lover not a fighter, but will always fight for who they love. Embodied by the Crab’s hard shell, Cancer prizes comfort, security, and protection. This sign is connected to the grace and ferocity of motherhood, and is highly influenced by subconscious thought and feeling.",
                "With its shining heart of gold, Leo is a loyal lover and a proud and courageous leader. This sign of the Lion embodies an air of royalty, just like the kings and queens of the jungle. Sometimes expressive to a fault, Leo has never been known to keep its feelings hidden! Steer clear of Leo’s drama, and you’ll find some of the most generous souls you’ll ever meet.",
                "Straight-laced Virgo knows what perfection looks like, and won’t stop until it’s reached. With all eyes fixed on improvement, Virgo the Virgin is quick to point out what’s wrong in any situation. But this sign is one of service, helping itself and others to fine-tune their lives. One of Virgo’s strongest abilities is to take in a wealth of information, and pick out only what’s important and useful. This makes Virgo one of the most productive and efficient signs of all.",
                "Beautiful both inside and out, Libra stands for harmony, equality, and grace. As the sign of balance, Libra represents both the head and the heart -- they focus on logic and fact to ensure everything is on the up-and-up, but really thrive in the mutual feelings and closeness of one-on-one relationships.",
                "Scorpio thrives in a world of passion, depth, questions, and answers. The Scorpion isn’t interested in what’s sitting right on the surface -- they want to dig down to get to the real treasures that lie beneath. Intense and steadfast, this sign’s lifelong mission is to rebuild itself over and over again, creating, in the end, the most aware, insightful, and capable soul imaginable.",
                "Sagittarius is on the hunt for the biggest, best experiences life has to offer! With a love of adventure and all things exotic, the worldly Archer just wants to soak it all in. Sagittarius is driven by a constant need to explore and expand its mind, heart, and awareness to the fullest extent. Fiery and free, Sagittarius knows that the only limits are the ones we create ourselves."]} ,
{"element":["earth","air","water","fire","earth","air","water","fire","earth","air","water","fire"]} ,
{"elementImg":["./graphicWork/earth.png","./graphicWork/air.png","./graphicWork/water.png","./graphicWork/fire.png","./graphicWork/earth.png","./graphicWork/air.png","./graphicWork/water.png","./graphicWork/fire.png","./graphicWork/earth.png","./graphicWork/air.png","./graphicWork/water.png","./graphicWork/fire.png"]} ,
{"sound":["./sounds/earthSound.mp3","./sounds/airSound.mp3","./sounds/waterSound.mp3","./sounds/fireSound.mp3"]},
{"planet":["Saturn","Saturn/Uranus","Jupter/Neptune","Mars","Vanus/Cares","Mercury","Moon","Sun","Mercury/Chiron","Venus","Mars/Pluto","Jupter"]} ,
{"planetImg":["./graphicWork/saturn.png","./graphicWork/uranus.png","./graphicWork/neptune.png","./graphicWork/mars.png","./graphicWork/venus.png","./graphicWork/mercury.png","./graphicWork/moon.png","./graphicWork/sun.png","./graphicWork/mercury.png","./graphicWork/venus.png","./graphicWork/mars.png","./graphicWork/jupter.png"]},
{"color":["brown","blue","light green","red","green","yellow","silver","gold","green","pink","black","purple"]},
{"colorHex":["884500","0040AF","00A26D","950C00","006020","E9E552","999999","DB9400","567600","FFA7D3","000000","6B00FF"]}
]}

var AppendName = document.getElementById("AppendName");
var AppendIcon = document.getElementById("AppendIcon");
var AppendDescription = document.getElementById("AppendDescription");
var AppendElement = document.getElementById("AppendElement");
var AppendElementImg = document.getElementById("AppendElementImg");
var AppendPlanet = document.getElementById("AppendPlanet");
var AppendPlanetImg = document.getElementById("AppendPlanetImg");
var AppendColor = document.getElementById("AppendColor");
var AppendColorHex = document.getElementById("AppendColorHex");


var name = document.getElementById("name").value;
var birthday = document.getElementById("birthday").value;
var day = birthday.getDate.UTC(day);
var month = birthday.getUTCMonth();

console.log(day)


addEventListener('click',openInput,false)

//function openInput
//{ 
// document.getElementById("inputBox").style.display="none"; 
// document.getElementById("signFormDiv").style.display="block"; 
// } 
//submit form
  form.addEventListener('submit', function(){
  console.log(getZodiacSign(month, day)) }, false);

//zodiac sign fucniton:

function getZodiacSign (month,day) {
  console.log(month);
  console.log(day);
    if((month === 0 && day <= 20) || (month === 11 && day >=22)) {
     getText(0);
    } else if ((month ===0 && day >= 21) || (month === 1 && day <= 18)) {
     getText(1);
    } else if((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
     getText(2);
    } else if((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
     getText(3);
    } else if((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
     getText(4);
    } else if((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
     getText(5);
    } else if((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
     getText(6);
    } else if((month === 6 && day >= 23) || (month === 7 && day <= 23)) {
     getText(7);    
    } else if((month === 7 && day >= 24) || (month === 8 && day <= 23)) {
     getText(8);
    } else if((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
     getText(9);
    } else if((month === 9 && day >= 24) || (month === 10 && day <= 22)) {
     getText(10);
    } else if((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
     getText(11);
    }
}
getZodiacSign()


function getText(x){
  resultSign['name'][x].appendChild(AppendName);
  resultSign['icon'][x].appendChild(AppendIcon);
  resultSign['description'][x].appendChild(AppendDescription);
  resultSign['element'][x].appendChild(AppendElement);
  resultSign['elementImg'][x].appendChild(AppendElementImg);
  resultSign['planet'][x].appendChild(AppendPlanet);
  resultSign['planetImg'][x].appendChild(AppendPlanetImg);
  resultSign['color'][x].appendChild(AppendColor);
  resultSign['colorHex'][x].appendChild(AppendColorHex);
}


//FORM VALIDATION//
//validade name input (3char min)
     
function checkName(min_length) {

  if (nameINP.value.length < min_length) {
    feedback_el.textContent = 'Make sure you typed your name correctly; it needs to have 3 characters please.';
    feedback_el.classList.add('danger');
  } else {
    feedback_el.textContent = '';
    feedback_el.classList.remove('danger');
  }
}

nameINP.addEventListener('blur', function() {
  checkName(3);
}, false);

    var feedback_el = document.getElementById('feedback');
    var nameINP = document.getElementById('nameINP');
    
    nameINP.addEventListener('blur', function() {
      preventDefault();
      }, false);
    
      //change the default behaior of an element

      
      
//validade date input:  
//const form =document.forms[signForm];
//form.addEventListener('submit', handleFormSubmit(event){
  //   event:preventDefault(),
  // const inputDate: "document.getElementById('date')";
  // const myDate: new Date(inputdate.value);

  //     const feedbackDate : inputDate.nextElementSibling; 
  //     if (isNaN(myDate)) {
  //       inputDate.focus(); //focous on problem
  //       inputDate.value:''; //clears value
  //       feedbackDate.hidden: false;
  //     }
  //     else {
   //       feedbackDate.hidden: true;}
  //   const month:myDate.getUTCMonth();
  //   const day:myDate.getUTCDay();
  // }, false);
 
