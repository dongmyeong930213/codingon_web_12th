/** 배열 , 매우 중요 */
/**
 * 변수도 값을 저장, 배열도 값을 저장
 * 배열은 하나의 이름에 여러개의 값을 저장
 */

let a = 10;
a = 20;
console.log(a)

let b = [1,2,3,4,5]       //[] = 배열
console.log(b[2])   // []<-지정배열 표시
console.log(b[0])

let furits =['🍳','🧇','🥞','🍞','7']

console.log(furits.length) // 배열에 몇개가 들어가 있는지 length로 계산한다
for(let i=0; i<furits.length; i++){
    console.log(furits [i])
}

// for in m , for of

for(let i of furits) {
    console.log(i)
}

for(let i in furits){
    console.log(furits[i])
}