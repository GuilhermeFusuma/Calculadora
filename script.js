const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const times = document.getElementById("times");
const divided = document.getElementById("divided");
const firstNumber = document.getElementById("number1");
const secondNumber = document.getElementById("number2");
const answerContainer = document.getElementById("answer");

let answer;

const showAnswerPlus = () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    answerContainer.style.display = "none";

    if(isNaN(num1)) {
        alert("Please enter a valid number.");
        return;
    }
    else if(isNaN(num2)) {
        alert("Please enter a valid number.");
        return;
    }
    else {
        answer = num1 + num2
        let formattedNum = parseFloat(answer.toFixed(1));
        answerContainer.innerHTML = `${formattedNum}`;
        answerContainer.style.display = "block";
    }
}
plus.addEventListener("click", showAnswerPlus)

const showAnswerMinus = () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    answerContainer.style.display = "none";

    if(isNaN(num1)) {
        alert("Please enter a valid number.");
        return;
    }
    else if(isNaN(num2)) {
        alert("Please enter a valid number.");
        return;
    }
    else {
        answer = num1 - num2
        let formattedNum = parseFloat(answer.toFixed(1));
        answerContainer.innerHTML = `${formattedNum}`;
        answerContainer.style.display = "block";
    }
}
minus.addEventListener("click", showAnswerMinus)

const showAnswerTimes = () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    answerContainer.style.display = "none";

    if(isNaN(num1)) {
        alert("Please enter a valid number.");
        return;
    }
    else if(isNaN(num2)) {
        alert("Please enter a valid number.");
        return;
    }
    else {
        answer = num1 * num2
        let formattedNum = parseFloat(answer.toFixed(1));
        answerContainer.innerHTML = `${formattedNum}`;
        answerContainer.style.display = "block";
    }
}
times.addEventListener("click", showAnswerTimes)

const showAnswerDivided = () => {
    const num1 = Number(firstNumber.value);
    const num2 = Number(secondNumber.value);

    answerContainer.style.display = "none";

    if(isNaN(num1)) {
        alert("Please enter a valid number.");
        return;
    }
    else if(isNaN(num2)) {
        alert("Please enter a valid number.");
        return;
    }
    else {
        answer = num1 / num2;
        let formattedNum = parseFloat(answer.toFixed(1));
        answerContainer.innerHTML = `${formattedNum}`;
        answerContainer.style.display = "block";
    }
}
divided.addEventListener("click", showAnswerDivided)