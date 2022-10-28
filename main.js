const signInBtn = document.querySelector('.signin-btn')

signInBtn.addEventListener('click', () => {
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
})


