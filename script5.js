const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "JavaScript",
        c: "C++",
        d: "Java",
        correct: "b"
    },
    {
        question: "What is 2 + 2?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const nextBtn = document.getElementById('next');
const resultText = document.getElementById('result');

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuizData.a}
        </label><br>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuizData.b}
        </label><br>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuizData.c}
        </label><br>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuizData.d}
        </label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    
    if (!answer) {
        resultText.textContent = "Please select an answer!";
        return;
    }

    if (answer.value === quizData[currentQuestion].correct) {
        score++;
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Wrong!";
    }

    submitBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
});

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
        resultText.textContent = "";
        submitBtn.classList.remove('hidden');
        nextBtn.classList.add('hidden');
    } else {
        quizContainer.innerHTML = `<h2>You scored ${score}/${quizData.length}!</h2>`;
        submitBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    }
});
