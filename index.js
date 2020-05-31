// Code your solutions in this file

function countDown(num){
    while (num >= 0) {
        console.log(num--);
      }
}

function writeCards(array, event_name) {
    for (let i = 0 ; i < array.length ; i++){
        array[i] = `Thank you, ${array[i]}, for the wonderful ${event_name} gift!`;
}
return array;
};

// . Create a for loop with a counter that starts at 0 and increments at the end of each loop. 
// The condition should halt the for loop after the last name in the array is printed out in the loop body.

// Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift. 
// Collect the messages in an array and return this array. For example: