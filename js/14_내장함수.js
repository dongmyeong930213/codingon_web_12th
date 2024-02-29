// // random() 0~1사이의 값을 임의로 추출한다
// console.log(Math.random())
// console.log(Math.round(0.9))
// console.log(Math.round(5.95), Math.round(5.5), Math.round(0.05))
// console.log(Math.round(-5.05))

// // 최대값, 최소값
// console.log(Math.max(1,3,2)) // 주어진 값 중 제일 큰값
// console.log(Math.min(1,3,2)) // 주어진 값 중 제일 작은값


// console.log('문자열 내장 함수들')
// let msg ='This is my first message';
// let result1 = msg.includes('my') // true
// let result2 = msg.includes('your') //false
// let result3 = msg.startsWith('This')// true
// let result4 = msg.startsWith('this')//false
// let result5 = msg.endsWith('e') // true
// let result6 = msg.indexOf('my') // 8
// let result7 = msg.replace('first', 'second')
// let result8 = msg.toUpperCase()

// console.log(result1, result2, result3, result4)
// console.log(result5, result6, result7, result8)


let str =" This is my first message ";
let result1 = str.toLowerCase();
let result2 = str.trim();
let result3 = str.trimStart();
let result4 = str.trimEnd();
let result5 = str.split(' '); // ' ' 공백 , 공백을 기준으로 글자를 분리
let result6 = str.split(''); // '' 공백없음, 한글자씩 분리

console.log(result1, result2, result3, result4)
console.log(result5, result6)


// escape notation \'
const msg1 = " this is \'  my first message";      // \' 
const msg2 = " this is \n  my first message";      // \n (줄바꿈표시)

console.log(msg1)
console.log(msg2)