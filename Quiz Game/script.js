document.addEventListener("DOMContentLoaded", () => {
    showSection("home");
});

function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

const quizzes = {
    js: [
        { question: "What is JavaScript?", options: ["Programming Language", "Car Model", "Game"], answer: "Programming Language" },
        { question: "Which company developed JavaScript?", options: ["Microsoft", "Apple", "Netscape"], answer: "Netscape" },
        { question: "What keyword is used to declare a variable in JavaScript?", options: ["var", "define", "declare"], answer: "var" },
        { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/* */", "<!-- -->"], answer: "//" },
        { question: "Which function is used to print output in JavaScript?", options: ["console.log()", "print()", "log()"], answer: "console.log()" }
    ],
    html: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
        { question: "Which tag is used to create a hyperlink?", options: ["<link>", "<a>", "<href>"], answer: "<a>" },
        { question: "What is the correct doctype declaration?", options: ["<!DOCTYPE html>", "<DOCTYPE>", "<html doctype>"], answer: "<!DOCTYPE html>" },
        { question: "Which HTML tag is used to define an image?", options: ["<img>", "<picture>", "<image>"], answer: "<img>" },
        { question: "Which tag is used for creating a table?", options: ["<table>", "<tbl>", "<tr>"], answer: "<table>" }
    ],
    react: [
        { question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
        { question: "Who created React?", options: ["Facebook", "Google", "Microsoft"], answer: "Facebook" },
        { question: "Which hook is used to handle state in React?", options: ["useEffect", "useState", "useRef"], answer: "useState" },
        { question: "React components should return?", options: ["Function", "HTML", "JSX"], answer: "JSX" },
        { question: "What is used for handling side effects in React?", options: ["useEffect", "useState", "useReducer"], answer: "useEffect" }
    ],
    python: [
        { question: "What is Python?", options: ["Programming Language", "Snake", "Operating System"], answer: "Programming Language" },
        { question: "Who developed Python?", options: ["Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"], answer: "Guido van Rossum" },
        { question: "Which keyword is used to define a function?", options: ["function", "def", "func"], answer: "def" },
        { question: "Which data type is immutable?", options: ["List", "Dictionary", "Tuple"], answer: "Tuple" },
        { question: "Which symbol is used for single-line comments?", options: ["//", "#", "/* */"], answer: "#" }
    ],
    data: [
        { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Linked List"], answer: "Stack" },
        { question: "Which sorting algorithm is the fastest in average case?", options: ["Bubble Sort", "Merge Sort", "Quick Sort"], answer: "Quick Sort" },
        { question: "What is the worst-case time complexity of Binary Search?", options: ["O(n)", "O(log n)", "O(n^2)"], answer: "O(log n)" },
        { question: "Which data structure uses key-value pairs?", options: ["Array", "Dictionary", "Queue"], answer: "Dictionary" },
        { question: "Which algorithm is used for finding the shortest path in a graph?", options: ["Dijkstra’s Algorithm", "Merge Sort", "Binary Search"], answer: "Dijkstra’s Algorithm" }
    ],
    ai: [
        { question: "What does AI stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Information"], answer: "Artificial Intelligence" },
        { question: "Which branch of AI deals with learning from data?", options: ["Computer Vision", "Machine Learning", "Neural Networks"], answer: "Machine Learning" },
        { question: "Which AI model is commonly used for image recognition?", options: ["CNN", "RNN", "SVM"], answer: "CNN" },
        { question: "What does NLP stand for in AI?", options: ["Neural Language Processing", "Natural Language Processing", "Network Learning Program"], answer: "Natural Language Processing" },
        { question: "Which company created GPT models?", options: ["OpenAI", "Google", "Microsoft"], answer: "OpenAI" }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(quizType) {
    currentQuiz = quizzes[quizType];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-selection").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    let questionObj = currentQuiz[currentQuestionIndex];
    document.getElementById("question").innerText = questionObj.question;
    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionObj.options.forEach(option => {
        let button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    document.getElementById("next-btn").classList.add("hidden");
}

function checkAnswer(selectedOption) {
    if (selectedOption === currentQuiz[currentQuestionIndex].answer) {
        score++;
    }
    document.getElementById("next-btn").classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").innerText = `Your Score: ${score} / ${currentQuiz.length}`;
}

function restartQuiz() {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("quiz-selection").classList.remove("hidden");
}
