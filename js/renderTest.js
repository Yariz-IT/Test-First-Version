//  Функция отрисовка опроса

function renderTest(total, nextStep) {
    renderProgress(total, nextStep)
    if (nextStep + 1 === total) {
        changeButtonResult()
    }

    if (nextStep < total) {
        const answers = data.questions[nextStep].answers
        const answersHTML = answerToQuestion(answers)
        renderAnswers(answersHTML)
        renderQuestion(nextStep)
        buttonDisabled(true)
    } else if (nextStep === total) {
        renderResults()

    }
}
renderTest(totalSteps, nextStep)


