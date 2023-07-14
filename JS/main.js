const menu = document.querySelector('#menu ul')
const icon = document.querySelector('#menu #button img')
const links = document.querySelectorAll('#menu ul div li a')
const main = document.querySelector('main')
const title = document .querySelector('main .title')
const desktop = document.querySelector('#desktop')

function menuMobile(){
    if(menu.classList.contains('show')){
        menu.classList.remove('show')
        menu.classList.add('hidden')
        icon.classList.remove('close')
        icon.setAttribute("src", "../assets/menu-buguer-open.svg")
   
        main.classList.remove('hidden')
        title.classList.remove('hidden')
        desktop.classList.add('hidden')
    }
    else{
        menu.classList.add('show')
        icon.classList.add('close')
        icon.setAttribute("src", "../assets/menu-buguer-close.svg")
       
        menu.classList.remove('hidden')
        title.classList.add('hidden')
        
        desktop.classList.add('hidden')
    }

    for (const link of links) {
        link.addEventListener('click', function(){
            menu.classList.remove('show')
        })
    }
}


function e(){
    const logo = document.querySelector('#logo')
    const largura = window.screen.width
    
    if( largura < 768){
        logo.setAttribute("src", "../assets/logo-mobile.svg")
        console.log("mobile")
    }
    else{
        logo.setAttribute("src", "../assets/logo-desktop.svg")
        console.log("desktop")
    }

}

window.addEventListener('resize', function(){
    e()
})