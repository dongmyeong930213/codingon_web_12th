// true, false 확인하기

// true ==1;
// false ==0;

console.log(true==1);
console.log(false==0);


let big = 999999999999999; //15자리이상
console.log(big);
let big2 = 9999999999999999; //16자리
console.log(big2)

// 제일 큰값 제일 작은 값 아랑보기
console.log(Number.MAX_SAFE_INTEGER); // 제일 큰 값
console.log(Number.MIN_SAFE_INTEGER); // 제일 작은 값

// Boolean 알아보기 : 이세상의 값 중 단 2가지 상태로 표현할 수 있는 값에 사용
console.log( 10>1)
console.log( 10>11)


// null

let somebody=null;
console.log(somebody)

let somebody2;
console.log(somebody2) // undefined;

// 심볼
console.log('심볼 --------')
const a1 ="1";
const a2 ="1";
console.log( a1==a2);

const b1 =Symbol('1');
const b2 =Symbol('1');
console.log( b1==b2);


// BigInt값을 만들려면
let num = 3945948687n;
// 데이터타입을 알아보는 명령어 typeof
console.log (typeof num);
// 문자형의 데이터타입
let surname='Bae'
console.log(typeof surname);

let age = 33;
console.log(typeof age);
let isMale = false;
console.log(typeof isMale);

let selectColor =undefined;
console.log (typeof selectColor);

let selectFont =null;
console.log(typeof selectFont);



// infinity
let x = Infinity;
let y = -Infinity;
console.log( x, y, typeof (x), typeof(y))