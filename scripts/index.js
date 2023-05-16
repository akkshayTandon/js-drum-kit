

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove("effect");
}

function playSound(e) {
    const audio = document.getElementById(`${e.key}`);
    const key = document.getElementsByClassName(`${e.key}`);
    if (!audio) return;
    key[0].classList.add("effect");
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.getElementsByClassName("key"));
keys.forEach(k => k.addEventListener("transitionend", removeTransition));
keys.forEach(key => key.addEventListener("touch", playMouseClick));
keys.forEach(key => key.addEventListener("click", playMouseClick));

window.addEventListener("keypress", playSound); 

function playMouseClick(event) {
    const button = event.target.attributes[0].nodeValue;
    const audio = document.querySelector(`audio[data-key="${button}"]`)
    const key = document.querySelector(`.key[data-key="${button}"]`);
    if (!audio) return;
    audio.currentTime = 0; 
    key.classList.add("effect");
    audio.play();
}