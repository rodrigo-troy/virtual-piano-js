/*jshint esversion: 6 */
document.addEventListener("keydown", (e) => {
    const pressedKey = e.key.toUpperCase();
    if ("ASDFGHJ".includes(pressedKey)) {
        console.log(`The '${pressedKey}' key was pressed.`);
        var audio = new Audio(`white_keys/${pressedKey}.mp3`);
        audio.play();
    } else if ("WETYU".includes(pressedKey)) {
        console.log(`The '${pressedKey}' key was pressed.`);
        var audio = new Audio(`black_keys/${pressedKey}.mp3`);
        audio.play();
    } else {
        console.warn(`There's no music behind the ${pressedKey} key.`)
    }
});
