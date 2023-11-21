let nums = document.querySelectorAll('.num')
let inp = document.querySelector('.inp')
let emt = "";

Array.from(nums).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            emt = eval(emt)
            inp.value = emt
        }
        else if(e.target.innerHTML =='C'){
            emt = ""
            inp.value = emt
        }
        else{
            emt += e.target.innerHTML
            inp.value = emt
        }

    })
})