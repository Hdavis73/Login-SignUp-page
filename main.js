const signInBtn = document.querySelector('.signin-btn')
const seePassword = document.querySelector('.see-password-btn')

seePassword.addEventListener('click', () => {
    const passwordInput = document.querySelector('.password-input')

    const passwordType = passwordInput.type === "password" ? "text" : "password"

    passwordInput.type = passwordType
    if(!seePassword.classList.contains('active')) seePassword.classList.add('active')
    else{
        seePassword.classList.remove('active')
    }
})

signInBtn.addEventListener('click', () => {

})

function incorrectPassword() {
    const btnClassList = signInBtn.classList

    if(btnClassList.contains('center')) {
        btnClassList.remove('center') 
        btnClassList.add('left')
    }else if(btnClassList.contains('left')){
        btnClassList.remove('left')
        btnClassList.add('toCenter')
    }else if(btnClassList.contains('toCenter')){
        btnClassList.remove('toCenter')
        btnClassList.add('right')
    }else if(btnClassList.contains('right')){
        btnClassList.remove('right')
        btnClassList.add('center')
    }
}

