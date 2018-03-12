// html with all divs with a class key, with a data attribute applied: 

//<div data-key="65"> --> data-xx=YY 70-keyboard key associated
//<kbd>E</kbd> -- immitates a keyboard key visually
//<span class=sound>clap</span> --> list of keyboards and associated sounds
//<audio data-key="70" src="sound.wav"></audio>  -->list of sounds being loaded

//all animation is done on CSS

// to do:
//1. Make Bigger
//2. Yellow Glow
//3. Make sound

//event litener for key bing pushed
{function playSound(e){ //e stands for key value
    //console.log(e); //all info about keydown
    //check what div to make bigger and which sound to make depending on key pressed:
    const key= document.querySelector(`audio,[data-key="${event.keyCode}"`); //e.keyCoe should come backa as 65, keyCode found from console.log(e)

    //testing varible: it has all the info I need:
    //console.group('playSound');
    //console/log('audio');
    //console.log('key')
    //console.groupEnd();

    //troubleshoot if non avalibel key is pressed:
    if (!audio) return;

    //make it bigger: affect the .playing
    //add .playing class:
    key.classList.add('playing');
       
    audio.currentTime=0 //sound ony plays after it is done playing ==>> rewind sound back to 0
    audio.play(); //whatever the audio is, play it
}
function removeTransition(e){
    if (e.propertyName ==! "transfrom") return;//transform would be the name of the logest animation
    e.target.classList.remove('playing');
}
    const keys = Array.from(document.querySelectorAll('.key')); //selected and created an array for all keys
    //when sound finished remove affect/back to original state
    for(const key of keys){
            key.addEventListener('transitioned',removeTransition); //it listens for when a CSS transition ends
    }
    window.addEventListener('keydown', playSound, false);
}




