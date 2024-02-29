/**
 * 반복문 : 무엇을 반복해야 하는지, 몇번을 해야 하는지,
 * 
 */
// for (변수를 이용해서 몇번을 반복할지 결정)  *반복해야 하는 코드


// for (i=1;i<10 ; i++)
// console.log(i,'👳‍♂️');

// for (i=10;i>1 ; i--)
// console.log(i,'👳‍♂️');

for(let i=0; i<10; i++) {
    if( i%2 ==0)
    console.log(i)
}

console.log('--------------')

// for(let i=0; i<10; i++) {
//     if( i%2 ==0)
//     console.log(i)
// } *배수출력

// 3의 배수만 출력해보기

// for(let i=0; i<50; i++) {
//     if( i%3 ==0)
//     console.log(i)
// }

for(let i=3; i<50; i++) {
    if( i%3 ==0)
    console.log(i)
}
for(let i=0; i<50; i++){
    if(i%3 ==0 && i !=0)
    console.log(i)
}


//while문 형식 while(조건)       코드;
let j=0;
while(j<5) {
    console.log(j);
    j++; //조건을 변경하는 내용을 줘야 한다
}

//do ~ while은 while문과 거의 동일하지만 do때문에 무조건 1번은 실행한다
// do{
//     코드;
// } while(j<5)

// for ~ in , 조건에 들어간 (i는 내용순서)이고 내용을 배열[i] (ex; asdf[i] )

// console.log('for~in') 
// const foods = ['🍕','🍳','🥖'];
// for(let i in foods) //내용순서~내용배열
// console.log(i, foods[i])  


console.log('for~of')
const colors = ['🍕','🍳','🥖'];
for(let color of colors) //of는 내용을 가져온다
console.log(color)

