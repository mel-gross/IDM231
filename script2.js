//AJAX object organization of all the Zodiac sign information being appended
//all properties should have 12 options, that is consistent (by Index#) 

var ultSign = {
    "name": ["Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sargittarius"],
    "icon": ["../graphicWork/capricorn.png", "../graphicWork/aquarius.png", "../graphicWork/pisces.png", "../graphicWork/aries.png", "../graphicWork/taurus.png", "../graphicWork/gemini.png", "../graphicWork/cancer.png", "../graphicWork/leo.png", "../graphicWork/virgo.png", "../graphicWork/libra.png", "./graphicWork/scorpio.png", "../graphicWork/sargittarius.png"],
    "description": ["You can always find Capricorn at the top of the heap! The Mountain Goat combines its traditional methods with powerful determination to climb the ladder of success each and every day. Classy and reserved, Capricorn likes to play hard, and work harder.",
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
        "Sagittarius is on the hunt for the biggest, best experiences life has to offer! With a love of adventure and all things exotic, the worldly Archer just wants to soak it all in. Sagittarius is driven by a constant need to explore and expand its mind, heart, and awareness to the fullest extent. Fiery and free, Sagittarius knows that the only limits are the ones we create ourselves."],
    "element": ["earth", "air", "water", "fire", "earth", "air", "water", "fire", "earth", "air", "water", "fire"],
    "elementImg": ["../graphicWork/earth.png", "../graphicWork/air.png", "../graphicWork/water.png", "../graphicWork/fire.png", "../graphicWork/earth.png", "../graphicWork/air.png", "../graphicWork/water.png", "../graphicWork/fire.png", "../graphicWork/earth.png", "../graphicWork/air.png", "../graphicWork/water.png", "../graphicWork/fire.png"],
    "sound": ["../sounds/earthSound1.mp3", "../sounds/airSound1.mp3", "../sounds/waterSound1.mp3", "../sounds/fireSound1.mp3","../sounds/earthSound2.mp3", "../sounds/airSound2.mp3", "../sounds/waterSound2.mp3", "../sounds/fireSound2.mp3","../sounds/earthSound3.mp3", "../sounds/airSound3.mp3", "../sounds/waterSound3.mp3", "../sounds/fireSound3.mp3","../sounds/earthSound4.mp3", "../sounds/airSound4.mp3", "../sounds/waterSound4.mp3", "../sounds/fireSound4.mp3"],
    "planet": ["Saturn", "Saturn/Uranus", "Jupter/Neptune", "Mars", "Vanus/Cares", "Mercury", "Moon", "Sun", "Mercury/Chiron", "Venus", "Mars/Pluto", "Jupter"],
    "planetImg": ["../graphicWork/saturn.png", "../graphicWork/uranus.png", "../graphicWork/neptune.png", "../graphicWork/mars.png", "../graphicWork/venus.png", "../graphicWork/mercury.png", "../graphicWork/moon.png", "../graphicWork/sun.png", "../graphicWork/mercury.png", "../graphicWork/venus.png", "../graphicWork/mars.png", "../graphicWork/jupter.png"],
    "color": ["brown", "blue", "light green", "red", "green", "yellow", "silver", "gold", "green", "pink", "black", "purple"],
    "colorHex": ["#884500", "#0040AF", "#00A26D", "#950C00", "#006020", "E9E552", "#999999", "#DB9400", "#567600", "#FFA7D3", "#000000", "#6B00FF"]
};

console.log(ultSign);
const form = document.forms['signForm'];
var name = document.getElementById("name").value; //username
var submitForm = document.getElementById("submitForm"); //submit button
const birthdayString = document.getElementById("birthday").value; //yyyy-mm-dd
const birthdayArray = birthdayString.split("-") //yyyy,mm,dd
const Bday = birthdayArray[2]; //dd
const Bmonth = birthdayArray[1]; //mm 

var AppendName = document.getElementById("AppendName");
console.log(AppendName);
var AppendIcon = document.getElementById("AppendIcon");
var AppendDescription = document.getElementById("AppendDescription");
var AppendElement = document.getElementById("AppendElement");
var AppendElementImg = document.getElementById("AppendElementImg");
var AppendPlanet = document.getElementById("AppendPlanet");
var AppendPlanetImg = document.getElementById("AppendPlanetImg");
var AppendColor = document.getElementById("AppendColor");
var AppendColorHex = document.getElementById("AppendColorHex");

console.group();
console.log("BirthdayString: " + birthdayString);
console.log("BirthdyArray: " + birthdayArray);
console.log("Birthday is: " + Bday);
console.log("Birthmonth is: " + Bmonth);
console.groupEnd(); //tests vars

//did the user input the birthday date yet?
function checkForm() {
    if (birthday.value == '') {
        return false;
    } else {
        return true;
    }
}
console.log("birthday given: " + checkForm());

//this function SELECTS which sign date RANGE the DATE INPUT FALLS into and
// OUTPUTS the number corresponding to the index number on the AJAX objects list TO THE getText function
function getZodiacSign(Bmonth, Bday) {
    if ((Bmonth == 1 && Bday <= 20) || (Bmonth == 12 && Bday >= 22)) {
        getText(0);
    } else if ((Bmonth == 1 && Bday >= 21) || (Bmonth == 2 && Bday <= 18)) {
        getText(1);
    } else if ((Bmonth == 2 && Bday >= 19) || (Bmonth == 3 && Bday <= 20)) {
        getText(2);
    } else if ((Bmonth == 3 && Bday >= 21) || (Bmonth == 4 && Bday <= 20)) {
        getText(3);
    } else if ((Bmonth == 4 && Bday >= 21) || (Bmonth == 5 && Bday <= 20)) {
        getText(4);
    } else if ((Bmonth == 5 && Bday >= 21) || (Bmonth == 6 && Bday <= 20)) {
        getText(5);
    } else if ((Bmonth == 6 && Bday >= 22) || (Bmonth == 7 && Bday <= 22)) {
        getText(6);
    } else if ((Bmonth == 7 && Bday >= 23) || (Bmonth == 8 && Bday <= 23)) {
        getText(7);
    } else if ((Bmonth == 8 && Bday >= 24) || (Bmonth == 9 && Bday <= 23)) {
        getText(8);
    } else if ((Bmonth == 9 && Bday >= 24) || (Bmonth == 10 && Bday <= 23)) {
        getText(9);
    } else if ((Bmonth == 10 && Bday >= 24) || (Bmonth == 11 && Bday <= 22)) {
        getText(10);
    } else if ((Bmonth == 11 && Bday >= 23) || (Bmonth == 12 && Bday <= 21)) {
        getText(11);
    }
}

//The getText function appends all the properties from the correct sign according to index# to the 
// resultingSign output template on the HTML file.
function getText(x) {
    console.log("x is: " + x);
    AppendName.innerHTML = ultSign['name'][x];
    AppendIcon.src = (ultSign['icon'][x]);
    AppendDescription =(ultSign['description'][x]);
    AppendElement.innerHTML = (ultSign['element'][x]);
    AppendElementImg.src = (ultSign['elementImg'][x]);
    AppendPlanet.innerHTML =(ultSign['planet'][x]);
    AppendPlanetImg.src =(ultSign['planetImg'][x]);
    AppendColor.innerHTML =(ultSign['color'][x]);
    AppendColor.style.color = (ultSign['colorHex'][x]);
}

getZodiacSign(Bmonth, Bday); //callling out function and passing in the input date values
