// Отрисовка вопроса

function renderQuestion(nextStep) {
    main.nextStep.question.innerHTML =
        data.questions[nextStep].question

}
