// Code your solutions in this file
function writeCards(arr, specialEvent) {
    let thankYouCards = []
    for (let i = 0; i < arr.length; i++) {
        thankYouCards.push(`Thank you, ${arr[i]}, for the wonderful ${specialEvent} gift!`);
        
    }
    return thankYouCards
}


function countDown(num) {
    let count = num;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}
