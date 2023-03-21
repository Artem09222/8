//Ex 1 

let number = [17, 6, 24, 67, 9, 60];
for (let i = 0; i < number.length; i++){
   if (number[i] > 17){
    console.log(number[i]);
   }
   else {
    console.log();
   }
}
    
//Ex 2

let information = {
    name: "Vitalik",
    age: 12,
    marks: [45, 12, 11, 10, 0],
};

let summa = 0;
for (let s of information.marks) {
    summa += s;
}

console.log(summa);
