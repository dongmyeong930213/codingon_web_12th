/**
 * 함수선언과 함수 표현식
 */

// 함수선언
function sayHello(){
 console.log('Hello')
}
// 함수 사용법
sayHello(); //-콜


// 함수표현식    -let문으로 실행시 function 선언으로 내용 표현
let sayHi = function(){
    console.log ('🍕');
}
sayHi();

console.log('-----비교해서 참고--------')
let a = sayHello;
let b = sayHi();

