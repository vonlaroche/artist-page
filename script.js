var btn = document.querySelector(".toggleMenuBtn");
var x = document.querySelector(".navBar");
var a = document.querySelectorAll("a");

btn.addEventListener("click", function(event){
    event.preventDefault();
    if (x.className === "navBar") {
        x.classList.add("responsive");
    } else {
        x.classList.remove("responsive");
    }
});


a.forEach(element => {
    if(element.className !== "toggleMenuBtn"){
    element.addEventListener("click", function(event){
        if (x.classList.contains("responsive")) {
            x.classList.remove("responsive");
        }
    });
  }
});

