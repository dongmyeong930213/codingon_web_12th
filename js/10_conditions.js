// 조건문
// 기본 형식
// if(조건식){실행문}

// let hour = 10;
// if(hour >= 6 && hour < 12){
//   console.log("오전 시간입니다.");
// }
let hour = 12;
if(hour >= 6 && hour < 12) {
  console.log("good morning");
  console.log("오전 시간입니다.");
}
else if(hour >= 12 && hour < 18) {
  console.log("good afternoon");
  console.log("오후 시간입니다.");
}
else {
  console.log("저녁 시간입니다.")
}
// switch(변수)
// case(변수값) :
// 실행문;
// break;
// default;
let role = "lee";
switch(role) {
  case("guest"): {
    console.log("guest");
    break;
  }
  case("Master"): {
    console.log("Master");
    break;
  }
  case("owner"): {
    console.log("owner");
    break;
  }
  default: {
    console.log("누구?");
    break;
  }
}
if(role == "guest") {
  console.log("당신은 게스트입니다.");
}
else if(role == "owner") {
  console.log("당신은 오너입니다.");
}
else {
  console.log("누구세요?");
}

    //문제 switch문을 if문으로 바꿔서 실행, 비교문 ==


    if(role==='guest') {console.log('당신은 게스트입니다')}
    else if(role ==='master') {console.log('당신은 마스터입니다')}
    else  {console.log('누구');}


