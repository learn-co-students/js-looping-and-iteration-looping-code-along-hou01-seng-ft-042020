// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
function writeCards(names, event){
    let arr = []
    for (let i=0; i<names.length; i++){
        arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return arr;
}

function countDown(num){
    while (num >= 0){
    console.log(num--);
    }
}



wrapGifts(gifts);


