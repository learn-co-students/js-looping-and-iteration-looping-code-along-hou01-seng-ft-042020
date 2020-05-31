// Code your solutions in this file

const names = ["Ada", "Brendan", "Ali"]
let arr = []
function writeCards(names, event) {
    
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
return arr
}

function countDown(integer) {
    while (integer > 0) {
        console.log(integer)
        integer -= 1
    }
    console.log(integer)
}