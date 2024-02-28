/**
 * 연산자종류
 * 산술연산자 : +, -, *, /, %, **, ++, --, += , -= , *= , /=*
 * 대입연산자
 * 비교연산자
 * 삼항연산자
 * 논리연산자
 */

console.log( 1+1);
console.log(10 - 1);
console.log(10 * 2);
console.log(10/2);
console.log(10%2); //나머지 연산자

console.log(13%3); // 나머지는 0 1 2 외에는 나오지 않는다

// = 할당연산자, , == , ===, ! (not) , != 같지 않다
console.log('----------비교연산자');
console.log(1 ==1);
console.log(1 ==2 );
console.log(1 != 1);
console.log(1 !=2 );
console.log("'1' == 1", '1' ==1);
console.log("'1' === 1", '1' ===1);

console.log("'1' !== 1'", '1' !==1);
console.log("'1' !== 1'", '1' !==1);

console.log('--------')
console.log(!true)
console.log(false)
console.log(!!true)
console.log(!!false)

console.log('&&(and) || (or) ')
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(false && true)

console.log(true || true)
console.log(true || false)
console.log(false || false)
console.log(false || true)

console.log( !(2>1))
console.log ( !(2<1))

console.log('0' ==false)
console.log(''==0) // ''= 0으로 간주


// 자동증가++ 자동감소--

// console.log(num++)
// console.log(++num)
let num = 10;
console.log(num--)
console.log(num)


// +=, -= , *=, /=

let x =10;
//let result = x + 10;
// console.log("result :", result)
// console.log(x)
// 결과값 result 변수, x?
// x = x + 10;

x += 10;
console.log("x : ", x)
console.log(x)

// falsy
console.log('----------falsy가 되는 경우--------')
console.log(false || true)
console.log(false || 'John')
console.log(false || 1)

//let userColor ='red';
let userColor= undefined ;
let defaultColor='blue'; //값을 설정하지않을때 디폴트값으로   
let currentColor= userColor || defaultColor;
console.log('현재 컬러는', currentColor)

// 24.2.28 ppt 9장까지 , 24.2.29 ppt 10장부터