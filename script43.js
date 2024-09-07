const questions = [
    {
        question: "1. Which of the following is a primary function of an operating system?",
        options: ["Managing hardware resources", " Creating graphics", " Connecting to the internet", "Running applications"],
        answer: "Managing hardware resources"
    },
    {
        question: "Which of the following is a cloud computing service model?",
        options: [" SaaS", "FTP", "VPN", "DNS"],
        answer: "Saas"
    },
    {
        question: "What is the main purpose of a firewall in network security?",
        options: ["To store data", "To filter incoming and outgoing traffic", "To create user accounts", "To increase internet speed"],
        answer: "To filter incoming and outgoing traffic"
    },
    {
        question: "Which company developed the Android operating system?",
        options: ["Microsoft ", "Apple", "Google", "Samsung"],
        answer: "Google"
    },
    {
        question: "What does the acronym “USB” stand for?",
        options: [" Universal Serial Bus ", "Unified System Bus", "Universal Service Bus", "Uniform Serial Bus"],
        answer: "Uniform Serial Bus"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('quiz');
    const nextButton = document.getElementById('next');
    const submitButton = document.getElementById('submit');
    const resultContainer = document.getElementById('result');

    // Clear previous content
    questionContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];

        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            ${question.options.map((option, index) => `
                <label class="option">
                    <input type="radio" name="option" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;

        nextButton.style.display = 'inline';
        submitButton.style.display = 'none';
    } else {
        questionContainer.innerHTML = '';
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline';
    }
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answer = selectedOption.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        loadQuestion();
    }
}

document.getElementById('next').addEventListener('click', checkAnswer);
document.getElementById('submit').addEventListener('click', () => {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `You scored ${score} out of ${questions.length}!`;
    resultContainer.style.display = 'block';
    document.getElementById('submit').style.display = 'none';
});

loadQuestion();
