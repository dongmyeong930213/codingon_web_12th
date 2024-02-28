/**
 * scope (스코프)는 범위라는 뜻으로 { }로 표현합니다
 * 특징 : 스코프안에 선언된 변수는 스코프를 벗어나면 소멸
 */
{
const msg = 'Hello';
// console.log(msg)
}
//console.log(msg)

//var는 함수단위가 스코프가 된다
//var age =33;
function showAge(){
    var age =33;
    console.log(age)
}
showAge();
