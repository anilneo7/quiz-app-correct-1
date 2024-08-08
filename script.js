const questions=[
{ 'ques': "What is the output of the following code? console.log(typeof NaN === typeof NaN);",
'a': "true",
'b': "false",
'c': "NaN",
'd': "undefined",
'correct': "b"
},
{ 'ques': "What is the result of 5 + '3' in JavaScript?",
'a': "53",
'b': "8",
'c': "'53'",
'd': "TypeError",
'correct': "c"
},
{ 'ques': "Which event occurs when the user clicks on an HTML element?",
'a': "onclick",
'b': "onchange",
'c': "onmouseclick",
'd': "onover",
'd': "onmouseover",
'correct': "a"
},
{ 'ques': "What is a closure in JavaScript?",
  'a': "A function with access to its own local scope, and the outer function's scope, forming a 'closure'.",
  'b': "A method of closing a function so it cannot be modified.",
  'c': "A function that has been defined within another function.",
  'd': "A JavaScript concept that deals with the accessibility of variables.",
  'correct': "a"
}
];
let index=0;
let total=questions.length;
let quesBox=document.getElementById("quesBox");
const optionInputs=document.querySelectorAll("input[type='radio']"); //represents <input/>
let right=0,wrong=0;
/*
functionalities to add 
1-progressBar
2-final score
3-questions that are wrong in red at the end
4-questions that are right in green at the end
*/
const loadQuestion=()=>{
    if(index===total){
        return endQuiz();
    }
    resetOption();
    const data=questions[index];
    //displaying ques of question object
    quesBox.innerText=`Q${index+1}) ${data.ques}`;
    //displaying corresponding options of the question
    optionInputs[0].nextElementSibling.innerText=data.a; // <input/> has nextElementSibling as <label/>
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    let data=questions[index];
    let ans=getAnswers();
    if(ans===data.correct){
        right++;
    }
    else{
        wrong++;
    }
    //after submitting the ans next ques. will get displayed by loadQuestion()
    index++;
    loadQuestion();
    return;
}
const getAnswers=()=>{
    let selectedAnswer = '';
    optionInputs.forEach((input)=>{
        if(input.checked){
            selectedAnswer= input.value;
        }
    })
    return selectedAnswer;
}
//options selected in previous ques. will disapper in next question
const resetOption=()=>{
    optionInputs.forEach((input)=>{
        input.checked=false;
    })
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`Thank you for playing the Quiz
    <h3 style="color:green">Correct Answers:${right}</h3>
    <h3 style="color:red">Wrong Answers:${wrong}</h3>`
}
//initial call 
loadQuestion();

