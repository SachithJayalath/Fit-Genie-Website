//getting all required elements
const start_btn = document.querySelector(".quizbutton");
const info_box = document.querySelector(".info_box");
const quit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .continue");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");


//If start quiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show the info box
}

//If exit button clicked
quit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); // hide the info box
}

//If continue button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showquestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_num = 1;
let counter;
let timeValue = 15;
let widthValue = 0;
let userScore  = 0;
let points = 0;
let badgeType = "Silver";

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const quit_quiz = result_box.querySelector(".buttons .quit");

//If next button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_num++;
        showquestions(que_count);
        queCounter(que_num);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
    }
    else{
        console.log("Question completed")
        showResultBox();
    }
}

//If quit quiz button clicked
quit_quiz.onclick = ()=>{
    // result_box.classList.remove("activeResult"); // hide the result box
    window.location.reload();
}

//getting questions and options from array
function showquestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + '.' +questions[index].question +'</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] + '<span></span></div>'
                    +'<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                    +'<div class="option">'+ questions[index].options[2] + '<span></span></div>'
                    +'<div class="option">'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if (userAns == correctAns){
        userScore += 1;
        points += 2;
        answer.classList.add("correct");
        console.log("answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    }
    else{
        points -= 1;
        answer.classList.add("wrong");
        console.log("answer is not correct");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        //if user select wrong answer then automatically select correct answer
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    //once user selected disabled all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";

}

function showResultBox(){
    quiz_box.classList.remove("activeQuiz"); //hide the quiz box
    result_box.classList.add("activeResult"); // show the result box


    if(points >= 8){
        badgeType = "Gold";
        document.getElementById("badge").style.color = "#af9500";

    }
    else if(points < 8 && points >= 6) {
        badgeType = "Silver";
        document.getElementById("badge").style.color = "#b4b4b4";

    }else {
        badgeType = "Bronze";
        document.getElementById("badge").style.color = "#6a3805";

    }

    const queText = result_box.querySelector(".que_text");
    let queTag = '<span>You got <p>'+ userScore +'</p> out of <p>5</p></span>';
    queText.innerHTML = queTag;

    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>Congratulation! You have earned <p>'+ points + '</p> points with a <p>' + badgeType +'</p> badge, please claim the points in your next purchase</span>';
    scoreText.innerHTML = scoreTag;
}

function queCounter(index){
    const ques_counter = quiz_box.querySelector(".total_Q");
    let queCountTag = '<span><p>'+ index + '</p>of<p>'+ questions.length +'</p>Questions</span>';
    ques_counter.innerHTML = queCountTag;
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }

            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }

            next_btn.style.display = "block";
        }
    }

}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }

}
