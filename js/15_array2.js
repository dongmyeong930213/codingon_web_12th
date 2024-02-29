/**배열에 사용되는 메서드 */

/**
 * push() 맨끝에 추가
 * pop() 맨끝에서 추출 (제거)
 * shift() 맨앞에서 제거
 * unshift() 맨앞에 추가
 * 중요, 원본 배열에 변화가 있다. 
 */
// let arr1= [1,2,3,4,5]
// arr1[5] = 6;
// console.log(arr1)
// arr1.push(7)
// console.log(arr1)
// arr1.pop()
// console.log(arr1)

// arr1.shift()
// console.log(arr1)
// arr1.unshift(100)
// console.log(arr1)

console.log('----------')
let arr1= [1,2,3,4,5]
// console.log(arr1.splice(2,1)) //splice 인수제거
// console.log(arr1)
let x = arr1.splice(2,0,'a','b'); //splice의 두번째 인수가 몇개를 제거할지 결정하는데 0이 들어오면
// 제거대신 추가의 기능이 된다. 0 뒤에 추가할 내용을 넣어준다
console.log(arr1)

// 배열을 empty으로 만들기
let num1= [10,20,30]
console.log(num1);
num1= [];
console.log(num1);

let num2= [10,20,30]
num2.length= 0;
console.log(num2)

//forEach()
let num3=[10,20,30]
// num3.forEach(function(i){
//     //뭘 할지를 
//     console.log(i)
// })

num3.forEach(i=>console.log(i))
num3.forEach((i, index)=>console.log(i, index))

// 배열합치기
let num4 = [1,2,3]
let num5 = [4,5,6]
let combined = num4.concat(num5)
console.log(combined)
console.log(num4)  //원래값유지
console.log(num5)
 
//... *배열합치기
let arrayTwo = [...num4, ...num5]  // 배열합치기 
console.log(arrayTwo)

let arrayThree = [...num4,'a','b', ...num5] // 배열을 합치고 추가가능
console.log(arrayThree)

// 배열정렬 , 올림차순 (a~z) , 내림차순 (z~a)
let arr = [1,4,3,2,6,9,8,7]
console.log(arr.sort()) // 올림차순 정렬 *sort()
console.log(arr.reverse()) // 내림차순 정렬 *reverse()

//문자열을 분리하고 합치기
let str = "test";
console.log(str.split(''))  // *split('') 문자열 분리
let str2 = ['c','o','m']
console.log(str2.join('-'))    // *join('') 문자열합치기

console.log('-------------------')
let arr5 = [1,4,3,2,6,9,8,7,11, 23]
console.log(arr5.sort())

// arr5.sort((a,b)=>{ // *오름차순
//    return a>b? 1 : -1
// })

arr5.sort((a,b)=>{ // *오름차순
    return a>b? -1 : 1
 })

console.log(arr5)
