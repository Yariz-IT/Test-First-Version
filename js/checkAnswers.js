// Проверка на  верный ответ

function checkAnswers(nextStep, id) {
    const validAnswer = data.questions[nextStep].validAnswer
    return validAnswer == id

}
