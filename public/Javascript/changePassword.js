const changePasswordBtn = document.querySelector('.change-password')
const mainInfo = document.querySelector('.main-info')
const enterPasswordPp = document.querySelector('.enter-password-popup')

console.log('hi')


changePasswordBtn.addEventListener('click', () => {
    const mainInfoClass = mainInfo.classList
    const ppClass = enterPasswordPp.classList

    if(!mainInfoClass.contains('hide')){
        mainInfoClass.add('hide')
        ppClass.remove('hide')
    }

})



