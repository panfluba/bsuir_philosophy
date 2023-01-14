const option1 = document.querySelector('.op1'),
    option2 = document.querySelector('.op2'),
    option3 = document.querySelector('.op3'),
    option4 = document.querySelector('.op4'),
    option5 = document.querySelector('.op5'),
    option6 = document.querySelector('.op6'),
    option7 = document.querySelector('.op7'),
    option8 = document.querySelector('.op8'),
    option9 = document.querySelector('.op9'),
    option = document.getElementsByClassName('.philosoph'),
    choose__button = document.querySelector('.choose_button');


// option1.onclick = function(){
//     option1.classList.add("active_choose");
// }

// function option_1(){
//     option1.classList.add("active_choose");
// }

$('.choose_button').onclick(function() {
    $(this).toggleClass('active_choose');
    });