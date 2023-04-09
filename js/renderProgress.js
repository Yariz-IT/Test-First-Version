// Отрисовка данных прогресс бара 

function renderProgress(total, nextStep) {
    const progressPercent = 100 / total * nextStep
    main.progress.progressFill.style.width = `${progressPercent}%`
    main.progress.questionNumber.innerHTML = nextStep
    main.progress.totalQuestions.innerHTML = total

}
