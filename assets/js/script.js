let menu=document.querySelector("nav ul")
let menuBar=document.querySelector(".menu")
var menuIcon=document.querySelector(".menu img")

menuBar.addEventListener('click',function(){
    menu.classList.toggle('active')
    if(menuIcon.getAttribute("src")=="assets/imgs/menu.png"){
        menuIcon.setAttribute("src","assets/imgs/close.png")
    }else{
        menuIcon.setAttribute("src","assets/imgs/menu.png")
    }
})
