// Функция ответа

function answerToQuestion(answers) {

    const answersHTML = []

    answers.forEach((answer, index) => {
        const html =
            `<div class="quiz__answer" data-id='${index + 1}'>${answer}</div>`

        answersHTML.push(html)

    })
    return answersHTML.join('')
}

const answersHTML = answerToQuestion(data.questions[0].answers)
