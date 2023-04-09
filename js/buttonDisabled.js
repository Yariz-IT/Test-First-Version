
// Блокировка кнопки

function buttonDisabled(isDisable) {
    if (isDisable) {
        main.next.classList.add('button_inactive')
    } else {
        main.next.classList.remove('button_inactive')
    }
}
