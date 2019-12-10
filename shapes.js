document.getElementById('choose-white').addEventListener('click', function (){
    hideCurrent()
    showChosen('white')
})

document.getElementById('choose-black').addEventListener('click', function (){
    hideCurrent()
    showChosen('black')
})

document.getElementById('choose-salmon').addEventListener('click', function (){
    hideCurrent()
    showChosen('salmon')
})

document.getElementById('choose-cornflowerblue').addEventListener('click', function (){
    hideCurrent()
    showChosen('cornflowerblue')
})

document.getElementById('choose-aquamarine').addEventListener('click', function (){
    hideCurrent()
    showChosen('aquamarine')
})

let hideCurrent = function hideCurrent(){
    let prev = document.getElementsByClassName('current')[0]
    prev.classList.remove('current')
    prev.classList.add('hidden')
}

let showChosen = function showChosen(color){
    let curr = document.getElementById(color)
     curr.classList.remove('hidden')
     curr.classList.add('current')
}