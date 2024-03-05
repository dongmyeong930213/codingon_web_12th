const colorjs = document.querySelectorAll('.color');
const colorjquery= $('.color')

console.log(Array.isArray(colorjs));         //( )안에 있는것이 배열인지?
console.log(Array.isArray(colorjquery));





function submitjs(){
    // const colorjs = document.querySelectorAll('.color');
  
    for(let i=0; i<colorjs.length; i++){
        colorjs[i].addEventListener('click', function(){
            colorjs[i].style.color="red";
        })
    }



    // colorjs.forEach((color)=>(
    //     color.addEventListener('click', function(){
    //     this.style.color="red";
    //     })
    //     ))  
    }


// function submitjs(){
// const colorjs = document.querySelectorAll('.color');
// colorjs.forEach((color)=>(
// color.addEventListener('click',function(){
//     // console.log('This');

// this.style.color="red";
// })
// ))

//     // document.getElementById('div1').innerText="반갑습니다"
//     // document.getElementById('div1').setAttribute('style',"border:2px solid red");

// }


function submitjquery(){
//const colorjquery = $('.color')
colorjquery.on('click', function(){
$(this).css('background-color','skyblue')
})

    // const div1= $("#div1");
// div1.text('새로 왔습니다');
// div1.css('border','3px dashed gold');
}