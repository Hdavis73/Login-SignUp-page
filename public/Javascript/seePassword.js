const seePasswordBtn = document.querySelector('.see-password-btn')

seePasswordBtn.addEventListener('click', () => {
   seePassword()
})

function seePassword() {
    const passwordInput = document.querySelector('.password-input')

    const passwordType = passwordInput.type === "password" ? "text" : "password"

    passwordInput.type = passwordType
    if(!seePasswordBtn.classList.contains('active')) seePasswordBtn.classList.add('active')
    else{
        seePasswordBtn.classList.remove('active')
    }
}


// ====== Moving Sign In =========//

// const submitBtn = document.querySelector('.signin-btn')


// submitBtn.addEventListener('click', () => {
//     // incorrectPassword()
// })

// function incorrectPassword() {
//     const btnClassList = submitBtn.classList

//     if(btnClassList.contains('center')) {
//         btnClassList.remove('center') 
//         btnClassList.add('left')
//     }else if(btnClassList.contains('left')){
//         btnClassList.remove('left')
//         btnClassList.add('toCenter')
//     }else if(btnClassList.contains('toCenter')){
//         btnClassList.remove('toCenter')
//         btnClassList.add('right')
//     }else if(btnClassList.contains('right')){
//         btnClassList.remove('right')
//         btnClassList.add('center')
//     }
// }