const buttons = document.querySelectorAll(".btn");
buttons.forEach((item)=>{
    item.addEventListener("click",()=>{
        item.classList.toggle("clicked");
    })
})
2
