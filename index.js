// variables
var keyCodeText = document.querySelector('.info')

// change the keycode
const checkKeyCode = (keyCode) => 
{
    // chenge the keycode text
    keyCodeText.innerHTML = keyCode.toString()
}


const changeKey = function(key)
{
    // change the key
    document.querySelector("#key").innerHTML = key.toString()
}

// the main event
window.addEventListener('keydown', function(event)
{
    checkKeyCode(event.keyCode)
    changeKey(event.key)

    document.querySelector("#shift").innerHTML = event.shiftKey.toString()
    document.querySelector("#alt").innerHTML = event.altKey.toString()
    document.querySelector("#ctrl").innerHTML = event.ctrlKey.toString()

})

