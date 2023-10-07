let scrollContainer = document.querySelector("gallery")
let nextBt = document.getElementById("nextBtn")
let backBt = document.getElementById("backBtn")

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft+=e.deltaY;
})

nextBt.addEventListener("click",()=>{
    scrollContainer.scrollLeft+=900;
})
backBt.addEventListener("click",()=>{
    scrollContainer.scrollLeft-=900
})