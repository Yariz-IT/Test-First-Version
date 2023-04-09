
const main = {

    title: document.getElementById('title'),
    progress: {
        progressFill: document.getElementById('progress-fill'),
        questionNumber: document.getElementById('question-number'),
        totalQuestions: document.getElementById('total-questions'),
    },

    nextStep: {
        question: document.getElementById('question'),
    },

    answers: document.getElementById('answers'),
    next: document.getElementById('next'),
    questionWrap: document.getElementById('question-wrap'),

    result: {
        resultBlock: document.getElementById('result'),
        activeAnswers: document.getElementById('active-answers'),
        totalResult: document.getElementById('total-result')
    },
}

// Название теста 

const nameTest = title.innerHTML = data.title
let totalSteps = data.questions.length
let nextStep = 0
let validAnswersCount = 0

// Клик по кнопке

main.next.onclick = () => {
    nextStep = nextStep < totalSteps ? nextStep + 1 : nextStep
    renderTest(totalSteps, nextStep)
}

// Отслеживание клика на ответе  

main.answers.onclick = (event) => {
    const target = event.target
    if (target.classList.contains('quiz__answer')) {
        const answerNumber = target.dataset.id
        const isValid = checkAnswers(nextStep, answerNumber)
        const answerClass = isValid
            ? 'active'
            : 'inactive'
        target.classList.add(answerClass)
        buttonDisabled(false)

        validAnswersCount =
            isValid ? validAnswersCount + 1 : validAnswersCount
    }
}

