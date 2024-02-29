/**
 * 화살표 연산자 function() = [ ()=>표시가능하다 ]
 *아래 3개의 함수는 동일하고 표현만 다르다*/

// function add(x,y) {
//     return x+y
// }
// let result = add(x,y);

// let result = function(){
//     return x+y
// }


let result = ()=>{
    return x+y
}

/**
 * 함수표현식 이해하기
 * ()=> {코드} 매개변수가 없을때 (단일개체)
 * 매개변수를 x라고 할때 x => {코드}
 * (x,y)=>{코드}  // 매개변수가 여러개일때
 */

// es5

let pow= function(x){
    return x *x;
}
// es6
let pow = x => x*x;

