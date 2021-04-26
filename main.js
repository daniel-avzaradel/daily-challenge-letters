const letters = document.getElementById('letters');
console.log(letters)

letters.addEventListener('keydown', logLetter)
let regex = /^[a-z]*$/i
console.log(regex.test("asdasd"))

function logLetter(e) {
    let regex = /^[a-z]*$/i
    let special = /[^*&$$#%`]/g
    console.log(e)
    if(e.key == "Shift" || e.key == "Dead" || e.key == "Alt" || e.code == "BracketLeft" || e.isComposing === true) {
        e.preventDefault()
    } else if (regex.test(e.key)) {
        console.log(e)
    } else if (regex.test(e.key)) {
        e.preventDefault()
    } else { 
        e.preventDefault()
    }
    
}