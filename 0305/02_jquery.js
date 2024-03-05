//** val() input value값 가져오기 /설정하기 */
function getValue(){
    // let inputVal = document.querySelector('input').value;
    // console.log(inputVal) <== js
    let inputVal=$('input').val();
    console.log(inputVal) // <==jquery
}

function setValue(){
// document.querySelector('input').value="설정을 완료했습니다.";   
$('input').val('제이커리 사용함')
}

function changeCssJs(){
    let span = document.querySelector('span');
span.style = "font-size:2rem; color:hotpink";
}

function changeCssJquery(){
    // $('span').css('font-size', '2rem'); //css(a,b)
    // $('span').css('color','hotpink');
$('span').css{font-Size:'2rem' , backgroundColor:'hotpink'};
// css로 여러개를 바꿀경우 {} 사용, 속성의 이름은 font-Size (두번째글자를 대문자로 표기)

}

function getCssJquery(){
    // console.log($('span').css('color'));
    console.log(document.querySelector('span').style.color)
}

function changeAttrJS(){
    let a = document.querySelector('a');
    a.setAttribute('href', 'http://www.naver.com')
}

function changeAttrJquery(){
$('a').attr('href','http://www.daum.net');
    
}

function changeTextJS(){
let p= document.querySelector('p','.p-text');
p.textContent="자바스크립트로 변경"
}

function changeTextJquery(){
$('.p-text').text("제이커리로 변경")
}

function changeHtmlJS(){
    let p= document.querySelector('p','.p-html');
    p.innerHTML="<h3>javascript</h3>";

}

function changeHtmlJquery(){
$('.p-html').html('<h1>jquery</h1>');
}

//--------------------------------------
/**
 * append() : 컨텐츠를 선택한 요소 내부의 끝부분에 삽입
 * prepend() : 컨텐츠를 선택한 요소의 시작부분에 삽입
 * after() : 선택한 요소 뒤에 컨텐츠 삽입
 * before() : 선택한 요소앞에 컨텐츠 삽입
 */

function appendJS(){
let ul = document.querySelector(.'colors');
let li = document.createElement('li');
li.innerText="마지막에 자식으로 추가된 요소";
ul.append(li);
}

function appendJquery(){
$('.color').append('<li>마지막에 자식으로 추가된 jquery</li>')
}


function prependJS(){
    let ul = document.querySelector(.'colors');
    let li = document.createElement('li');
    li.innerText="첫 자식으로 추가된 요소";
    ul.prepend(li);
}

function prependJquery(){
    $('.color').prepend('<li>첫 자식으로 추가된 jquery</li>')
}

function beforeJS(){
    let green = document.querySelector(.'green');
    let li = document.createElement('li');
    li.innerText="이전 형제 요소로 추가된 자바스크립트";
    green.before(li);
}

function beforeJquery(){
    $('.green').before('<li>이전 형제 요소로 추가된 jquery</li>');
}

function afterJS(){
    let green = document.querySelector(.'green');
    let li = document.createElement('li');
    li.innerText="다음 형제 요소로 추가된 자바스크립트";
    green.before(li);
}

function afterJquery(){
    $('.green').before('<li>다음 형제 요소로 추가된 jquery</li>');
}

//-----------------------------------
// remove ()

function removeJS(){
 let li2 = document.querySelector('#li2');
 li2.remove();
}

function removeJquery(){
$('#li2').remove();
}

function emptyJS(){
   let nums = document.querySelector('ul.name');
   nums.innerHTML = ' '; // innerHTML 을 이용하여 공백을 만들어준다
}

function emptyJquery(){
$('ul.name').empty();
}

function findParent(){
console.log(document.querySelector('.child2').parentElement);
console.log($('child2').parent())
}

function findParents(){
    console.log($('child2').parents())
}

function findNext(){
console.log(document.querySelector('.child2').nextElementSibling);
console.log($('.child2').next())
}

function findPrev(){
console.log(document.querySelector('.child2').previousElementSibling);
console.log($('.child2').prev())
}

function findChildren(){
console.log(document.querySelector('.parent').children);
console.log($('.parent').children())
}

// -----------------클래스 조작
function addClass(){
    document.querySelector(.'#hi').classList.add('fs-50');
    
    
    $('#hi').addClass('fs-50')
}

function removeClass(){
    document.querySelector(.'#hi').classList.remove('fs-50');
    
    $('#hi').removeClass('fs-50')
}

function hasClass(){
    document.querySelector(.'#hi').classList.contains('fs-50');
    
    console.log($('#hi').hasClass('fs-50'))
}

function toggleClass(){
    document.querySelector(.'#hi').classList.toggle('bg-pink');
    
    $('#hi').toggleClass('bg-pink')
}

