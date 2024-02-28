// 한줄짜리 주석
/** 
 * 여러줄 주석을 사용할때 
*/



/**콘솔, 브라우저의 콘솔창에 출력 */
console.log("배동명");
console.log(console);
// 시간계산
console.time('label');
console.timeEnd('label');

//string substituion (문자대용)
console.log("This is a string %s","Dong Myeong");
console.log("이것은 숫자 %i 입니다", 32);
console.log("%c This is Large red text", "color:red; font-size:30px")
console.table({name:"Bae", email:"dongmyeong930213@gmail.com"})



// 브라우저의 경고표시 노란새개 ! 아이콘이 나옵니다
function division(x,y){
    if(y=-1) {
        console.warn("y는 1보다 커야합니다")
    }
    return x -y;
}

division(2,-1);

