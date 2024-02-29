// 함수의 길이
// length

function foo(){
    console.log(foo.length)
}


function bar(x){
    console.log(x);
}


function baz(x,y){
    console.log(x,y);
}
console.log(bar.length)
console.log(baz.length)

foo();   // length : 0 
foo(1,2); // length : 0 , 매개변수 2개  *length = 매개변수 수량

//return문
console.log('return문 -> 받은과정을 결과로 돌려준다')

function add(x, y){
//     console.log(`주어진 값들은 x: ${x} ,y: ${y} 입니다`)
// console.log (x+y)
// add(1,2);
// add(3,4);

return x+y 

}
let result = add(1,2);
console.log(add(3,4));
console.log(result)

