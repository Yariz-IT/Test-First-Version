// Отобразить результат опроса

function renderResults() {
    main.answers.style.display = 'none'
    main.next.style.display = 'none'
    main.questionWrap.style.display = 'none'

    main.result.resultBlock.style.display = 'block'
    main.result.activeAnswers.innerText = validAnswersCount
    main.result.totalResult.innerHTML = totalSteps

}