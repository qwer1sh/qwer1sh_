const quizData = [
    {
        question: "какой его любимый цвет?",
        options: ["темно-синий и темно-красный", "желтый", "тесно-зеленый", "да он сам не знает"],
        answer: "да он сам не знает"
    },
    {
        question: "его хобби?",
        options: ["вязание", "тренировки", "учеба", "поздние вечера"],
        answer: "учеба"
    },
    {
        question: "как вы планируете назвать ваших детей?",
        options: ["Данте и Азура", "Уильям и Кёхесбаунгер", "Тихон и Калыван", "Бабака и Бабадук"],
        answer: "Данте и Азура"
    },
    {
        question: "по сюжетам каких игр были придуманы эти имена?",
        options: ["farcry и cs:2", "dota2 и zxc", "devil may cre и the elder scrolls v: skyrim", "тетрис и танчики"],
        answer: "devil may cre и the elder scrolls v: skyrim"
    },
    {
        question: "что означает имя Азура?",
        options: ["рассвет", "вечер", "богиня отчаяния", "звезда"],
        answer: "рассвет"
    },
    {
        question: "почему Данте?",
        options: ["хз вообще", "ну там божественная комедия", "прикольно звучит", "чтобы в школе поиздевались"],
        answer: "ну там божественная комедия"
    },
    {
        question: "в чем особенность ващих отношений?",
        options: ["тройное сальто назад", "топор", "нет никаких особенностей", "маленький принц"],
        answer: "маленький принц"
    },
    {
        question: "угадай что слушает твой ненаглядный когда пишет это в 5:16",
        options: ["анна асти", "тербина туриста", "король и шут", "чао бамбино"],
        answer: "анна асти"
    },
    {
        question: "а ну ка угадай еще что щас болит у твоего любимого больше всего",
        options: ["спинка", "ножка", "шейка", "глазка"],
        answer: "шейка"
    },
    {
        question: "а помнишь как ту самую крылатую фразу его бабушки?",
        options: ["шмара какая то", "симпотяшка", "ох невеста", "важная цаца"],
        answer: "важная цаца"
    },
    {
        question: "а вот какая нация больше всего не нравится твоему парню?",
        options: ["цыганки фу", "италианцы", "украинцы блина", "да он вообще поцифист"],
        answer: "цыганки фу"
    },
    {
        question: "цыганки цыганкам розь, а какие прям очень?",
        options: ["старухи рыля типа", "младенцы да есть же", "косоглазые с барадавками", "12 летние жирные"],
        answer: "12 летние жирные"
    },
    {
        question: "а ну какой по счету этот вопрос?",
        options: ["13", "12", "11", "11.5"],
        answer: "13"
    },
    {
        question: "как зовут его кошечек?",
        options: ["мотрос и бобик", "машинка и кошка", "калыван и тихон", "да никак вообще"],
        answer: "машинка и кошка"
    },
    {
        question: "сколько лет парню твоему?",
        options: ["15?", "16 точно", "15!", "16 не точно"],
        answer: "15!"
    }
];
let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timerInterval;
const timerEl = document.getElementById('time');
const questionEl = document.querySelector('.question');
const optionsEl = document.querySelector('.options');
const resultEl = document.querySelector('.result');
const scoreEl = document.getElementById('score');
const restartBtn = document.querySelector('.restart-btn');
function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }
    clearInterval(timerInterval);
    timeLeft = 20;
    timerEl.textContent = timeLeft;
    startTimer();
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = '';
    currentQuiz.options.forEach(option => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsEl.appendChild(button);
    });
}
function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

if (score <= 10) {
    document.getElementById("vivod").textContent = "(да даже я столько не знаю)) ммммммвввваа тебя)))"
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}
function endQuiz() {
    clearInterval(timerInterval);
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = score;
    restartBtn.style.display = 'block';
}
restartBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    timeLeft = 20;
    timerEl.textContent = timeLeft;
    questionEl.style.display = 'block';
    optionsEl.style.display = 'block';
    resultEl.style.display = 'none';
    restartBtn.style.display = 'none';
    loadQuestion();
});
loadQuestion();