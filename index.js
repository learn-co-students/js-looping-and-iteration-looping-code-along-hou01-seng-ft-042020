// Code your solutions in this file

function writeCards(a,b){
    let result = [];
    for(let i=0; i < a.length; i++){
        result.push(`Thank you, ${a[i]}, for the wonderful ${b} gift!`);
    }
    return result;
}

function countDown(a){
    let i = 0
    while(i <= a){
        console.log(a);
        a --;
    }
}
writeCards(["Ada", "Brendan", "Ali"], "birthday");
countDown(10);
