// Code your solutions in this file
function writeCards(names,eventName){
    let array = [];
    for(let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return array;
}

function countDown(count){
    let i = count;
    while(i > -1){
        console.log(i);
        i--;
    }
}