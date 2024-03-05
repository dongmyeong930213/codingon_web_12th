// console.log(document);
// console.log($(document));
// ready() - 모든 엘리먼트가 로딩을 마치면 실행됨
$(document).ready(function(){
    console.log('문서의 DOM 트리가 완성되면 실행 되는 것으로 body 태그 이전에 사용되고 된다.')
})

$(function(){
    console.log('로딩')
})

// 로딩에 관련된 이벤트 이름
document.addEventListener('load',function(){
// 엘리먼트를 모두 읽어오고, 외부 css, 이미지등을 모두 로딩을 마치면 실행
//windodw와 함께 사용
})

document.addEventListener('DOMContentLoaded', function(){

// 위와 다르게 외부css,이미지 외의 안에 내용을 안읽더라도 실행된다.
// document와 함께 사용
})
// 마우스 이벤트
$('.p-msg').click(function(){
    $('.p-msg').css('color','red');
});


// $('.num').click(function(){
//     // $('.num').css('color','orange');
//     $(this).css('color','orange');
// });


$('.num').on('click',function(){
    $(this).css('color','purple');
})
// mouseover() : 요소에 마우스를 올렸을때

$('.numbers').mouseover(function(){
    // $('.numbers').css('background-color', 'skyblue');
    // $(this).css('background-color', 'skyblue');
    // $(this).append('<div>Handler for .mouseover() called.</div>');
})

$('.numbers').on('mouseover', function(){
    $('this').css('background-color', 'skyblue');
    $(this).append('<div>Handler for .mouseover() called.</div>');
})

// hover()는 2가지 동작을 가지고 있다.
$('.div-hover').hover( function(){
    $(this).addclass('hover');}, function(){
   $(this).removeclass('hover');     
    }
 )

 // scroll()
//  $(window).scroll(function(){
//     console.log('스크롤')
//  })
 $(window).on('scroll',function(){
    console.log('--->스크롤')
 })


 //key event

//  $('.input-key').keydown(function(e){
// if(e.code ==="ArrowUp"){console.log('Up');}
// {console.log('Right');
//     else if (e.code === 'ArrowRight')
// }{
//     console.log('Left');
//     else if (e.code === 'ArrowLeft')
// }{
//     console.log('down');
//     else if (e.code === 'ArrowDown')
// }
// else {
//     console.log('그 외');
// }
//  })


//form
$('#todo-form').submit(function(e){
    e.preventDefault();
    const todo = $('input[name="todo]').val(); // 값을 가져오고 초기화
    $('todos').append('<li>${todo}</li>'); //li를 추가하고
    $('input[name="todo"]').val(''); // 재입력을 위해 초기화
})

const btns = document.querySelector('.btn');
const spans = document.querySelector('.span');
function setBgColr(){
    console.log('컬러설정')
}
for( let btn of btns){
    // console.log(btn)
    // // btn.style.backgroundColor = "royalblue";
    // btn.addEventListener('click',  function(){
    //     this.style.backgroundColor ="yellowgreen";
    // })
    btn.addEventListener('click', setBgColr) // setBgColr 함수이지만 ()는 없다.
}

$('a#inactive').on('click', function(event){
    event.preventDefault();
    $('#text').append('해당 링크는 동작하지 않습니다.')
})

