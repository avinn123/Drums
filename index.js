var drumList = document.querySelectorAll(".drum")
for (i=0; i<drumList.length;i++){
    drumList[i].addEventListener("click",handleClick);
}

function handleClick(){
    // alert("I got clicked");
    var buttonInnerHTML = this.innerHTML;
    var buttonClassList = this.classList;
    buttonClassList.add('pressed');
    
    switch(buttonInnerHTML)
    {
        case 'w':
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            // buttonClassList.remove('pressed');
            break;
        case 'a':
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            // buttonClassList.remove('pressed');
            break;
        case 's':
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            // buttonClassList.remove('pressed');
            break;
        case 'd':
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            // buttonClassList.remove('pressed');
            break;
        case 'j':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            // buttonClassList.remove('pressed');
            break;
        case 'k':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            // buttonClassList.remove('pressed');
            break;
        case 'l':
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            // buttonClassList.remove('pressed');
            break;
        default:
            console.log(buttonInnerHTML);
    }
}
