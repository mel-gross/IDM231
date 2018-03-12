
 //GOOD PRACTICES/WORKFLOW

//have variables declared on top of page
//SINGLE QUOTES
// create and remove elements and event listeners.
//Create troubleshooting functions that aare called when blur out of input field. if more than 31 on the day,if less than 2letters on name, tc..
//variables
const resultSign = { "resultSign" :[
{"name":["Capricorn","Aquarius","Pisces","Aries","Taurus","Gemni","Cancer","Leo","Virgo","Libra","Scorpio","Sargittarius"]}, 
{"icon":["./graphicWork/capricorn.png","./graphicWork/aquarius.png","./graphicWork/pisces.png","./graphicWork/aries.png","./graphicWork/taurus.png","./graphicWork/gemni.png","./graphicWork/cancer.png","./graphicWork/leo.png","./graphicWork/virgo.png","./graphicWork/libra.png","./graphicWork/scorpio.png","./graphicWork/sargittarius.png",]} 
{"description":["#","#"]} 
{"element":["earth","air","water","fire"]} 
{"elementImg":["#","#"]} 
{"planet":["Saturn","Saturn/Uranus","Jupter/Neptune","Mars","Vanus/Cares","Mercury","Moon","Sun","Mercury/Chiron","Venus","Mars/Pluto","Jupter"]} 
{"planetImg":["#","#"]} 
{"color":["brown/grey","blue","light green","red","green","yellow","white/silver","gold","green/brown","pink/blue","black","purple"]} ]}
{"sound":["#","3"]}

const capricorn = resultSign.name[0]);


function callZodiac(
  console.log("zodiac function called");

var name = document.getElementById("name").value;
var birthday = document.getElementById.("birthday").value;
var day = birthday.getUTCDay();
var month = birthday.getUTCMonth();

//FORM 
//submit form
    form.addEventListener('submit', getZodiacSign(month, day), false);
    
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

const form =document.forms[signForm];

form.addEventListener('submit', handleFormSubmit(event){
    event:preventDefault(),
  const inputDate: "document.getElementById('date')";
  const myDate: new Date(inputdate.value);

      const feedbackDate : inputDate.nextElementSibling; 
      if (isNaN(myDate)) {
        inputDate.focus(); //focous on problem
        inputDate.value:''; //clears value
        feedbackDate.hidden: false;
      }
      else {
        feedbackDate.hidden: true;}
    const month:myDate.getUTCMonth();
    const day:myDate.getUTCDay();
  }, false);
 

//zodiac sign fucniton:
function resultSign(name, day, month)
{
	console.log('resultZodiac called');

	var output = document.getElementById("results");
	var signName = document.getElementById('signName');
	var main = document.getElementsByTagName("main")[0];

	//calculate sign
    var sign;
    var descript;

  var result = getZodiacSign(month, day);
  }

function getZodiacSign (month,day) {
    if((month === 0 && day <= 20) || (month === 11 && day >=22)) {
      return resultSign[0];
    } else if ((month ===0 && day >= 21) || (month === 1 && day <= 18)) {
      return resultSign[1];
    } else if((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
      return resultSign[2];
    } else if((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
      return resultSign[3];
    } else if((month === 3 && day >= 21) || (month === 4 && day <= 20)) {
      return resultSign[4];
    } else if((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
      return resultSign[5];
    } else if((month === 5 && day >= 22) || (month === 6 && day <= 22)) {
      return resultSign[6];
    } else if((month === 6 && day >= 23) || (month === 7 && day <= 23)) {
      return resultSign[7]    } 
      else if((month === 7 && day >= 24) || (month === 8 && day <= 23)) {
      return resultSign[8];
    } else if((month === 8 && day >= 24) || (month === 9 && day <= 23)) {
      return resultSign[9];
    } else if((month === 9 && day >= 24) || (month === 10 && day <= 22)) {
      return resultSign[10];
    } else if((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return resultSign[11];
    }
}
console.log();





