
let addNum =0;
let subNum =1000;
let increase = setInterval(function(){
addNum++;
console.log ("addNum++" , addNum);
}, 1000)

let decrease = setInterval(function(){
    addNum--;
    console.log ("addNum--" , addNum);
}, 1000)

let interclear = setInterval(function(){
    console.log('addNum++', 1000);
})
clearTimeout(interclear);