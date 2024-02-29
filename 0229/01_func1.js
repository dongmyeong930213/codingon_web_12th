/**
 * 매개변수를 갖는 함수
 */

function greeting(subname, lastname="동명"){
    console.log(` Welcome  ${subname} ${lastname} 님`)
}

greeting('동명')
greeting('Bae','dongmyeong')

// function sum(a,b){
//     return a+b
// }

// let result = sum(1,2);
// console.log (` 첫번재 결과는 ${result}`) //3

// let result1 = sum(1,2,3,4);
// console.log (` 두번재 결과는 ${result}`) //3


function sum(){
    console.log(arguments)
    let total =0;
    for( let value of arguments)
    total += value;
 return total;
}
let result2 = sum(1,2,300,4,6);
console.log(result2)

/**
 * ...
 * rest operation
 * 주의할 점, rest (...)는 마지막에 위치
 * 
 */
function addAll(a,b,...args){
console.log(a,b)
console.log(args)
}

addAll(1,2,3,4,5,6)