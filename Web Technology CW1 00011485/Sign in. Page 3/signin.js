let headerBurger = document.getElementById("mobileBurger");
let header = document.getElementById("header");

let headerCheck = true;

headerBurger.addEventListener("click", ()=> {
    if(headerCheck ) {
        header.classList.add("open");
        headerCheck = false;
    }else{
        header.classList.remove("open");
        headerCheck = true;
    }
})
