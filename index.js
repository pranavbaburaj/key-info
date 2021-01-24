// variables

import TextChanger from "./text.js"
import Title from "./title.js"

function t(text, e) {
    var changer = new TextChanger(text, e)
    return changer
}
var keyCodeText = document.querySelector('.info')

const text = document.querySelector(".text")

text.addEventListener('keydown', function(e) {
    t(text, e)
})
// text.addEventListener()
// change the keycode
const checkKeyCode = (keyCode) => 
{
    // chenge the keycode text
    keyCodeText.innerHTML = keyCode.toString()
}


const changeKey = function(key)
{
    // change the key code
    document.querySelector("#key").innerHTML = key.toString()
}

export function updateKeys(event) {
    document.querySelector("#shift").innerHTML = event.shiftKey.toString()
    document.querySelector("#alt").innerHTML = event.altKey.toString()
    document.querySelector("#ctrl").innerHTML = event.ctrlKey.toString()
}

// the main event
window.addEventListener('keydown', function(event)
{
    checkKeyCode(event.keyCode)
    changeKey(event.key)

    updateKeys(event)
    Title(`${event.key} pressed`, 0)

})

// prevent the context menu from poping up
window.addEventListener("contextmenu", function(event)
{
        event.preventDefault();
})


// EVENT LISTENERS
window.addEventListener('keydown', function(event){
    if(event.ctrlKey && event.shiftKey && event.keyCode == 73){
        event.preventDefault()
    }
})




