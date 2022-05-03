// Code your solutions in this file
const myArr= [ 'Guadalupe', 'Ollie', 'Aki' ];

function writeCards(arr, eventName) {
    const emptyArr = [];
    for(let i=0 ; i< arr.length ; i++) {
        emptyArr.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`);
    }
    return emptyArr;
}
console.log(writeCards(myArr));

function countDown(j){
    while (j>=0) {
        console.log(j);
        j--;
    }
    
}
countDown(10);
