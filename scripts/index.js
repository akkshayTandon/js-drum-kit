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
window.addEventListener("keypress", playSound); 
// window.addEventListener("touchstart", playSound); 