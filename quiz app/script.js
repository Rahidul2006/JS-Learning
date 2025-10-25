const container = document.querySelector('.container');
const submit = document.querySelector('.btn');
const form = document.querySelector('.form');
const quiz = document.getElementById('quiz');
const questionH = document.getElementById('head');
const quesDiv = document.querySelector('.ques');
const quizBox = document.querySelector('.quiz');
const Name = document.getElementsByClassName('name')[0];



let currentQ = 0;
let score = 0;

const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: 2 },
    { question: "Who is known as the father of computers?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: 1 },
    { question: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
    { question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Tech Markup Language", "Hyperlinks Text Language", "None"], answer: 0 },
    { question: "CSS is used for?", options: ["Structure", "Style", "Functionality", "Database"], answer: 1 },
    { question: "Who developed JavaScript?", options: ["Brendan Eich", "Tim Berners-Lee", "Dennis Ritchie", "Guido van Rossum"], answer: 0 },
    { question: "Which language is used for backend?", options: ["Python", "HTML", "CSS", "Photoshop"], answer: 0 },
    { question: "Which planet is closest to the sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: 1 },
    { question: "Which of these is a programming language?", options: ["HTML", "CSS", "Python", "Photoshop"], answer: 2 },
    { question: "What does CPU stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"], answer: 1 },
    { question: "Who invented the World Wide Web?", options: ["Steve Jobs", "Bill Gates", "Tim Berners-Lee", "Alan Turing"], answer: 2 },
    { question: "Which is the largest planet in our Solar System?", options: ["Earth", "Jupiter", "Saturn", "Mars"], answer: 1 },
    { question: "What is the value of binary 101?", options: ["4", "5", "6", "7"], answer: 1 },
    { question: "Which tag is used for a line break in HTML?", options: ["break", "br", "lb", "hr"], answer: 1 }
];

function loadQuestion() {
    if (currentQ < questions.length) {
        const q = questions[currentQ];
        questionH.innerText = `Question ${currentQ + 1} of ${questions.length} :-`;
        quesDiv.innerHTML = `
            <h3>${q.question}</h3>
            
            <ul>
                ${q.options.map((opt, i) => `<li><input type="radio" name="q" value="${i}"><label for="q">${opt}</label></li>`).join('')}
            </ul>
            <button class="nextBtn btn">${currentQ === questions.length - 1 ? 'Finish' : 'Next'}</button>
        `;
        attachNextEvent();
    } else {
        showResult();
    }
}

function attachNextEvent() {
    const nextBtn = document.querySelector('.nextBtn');
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = document.querySelector('input[name="q"]:checked');
        if (selected) {
            if (parseInt(selected.value) === questions[currentQ].answer) {
                score++;
            }
            currentQ++;
            loadQuestion();
        } else {
            alert("Please select an answer!");
        }
    });
}

function showResult() {
    questionH.style.display = 'none';
    quesDiv.innerHTML = `<h2>Quiz Completed ✅</h2><p>Your score: ${score} / ${questions.length}</p>`;
}

function NameCheck() {
    let nameValue = Name.value;
    if (nameValue == "") {
        alert("Enter name first");
    }
    else {
        form.style.display = 'none';
        quizBox.style.display = 'block';
        loadQuestion();
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    NameCheck();
});
