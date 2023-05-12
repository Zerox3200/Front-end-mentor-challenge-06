let clicking = document.querySelector("#hide");
let hide = document.getElementsByClassName("hide");
//Create array from elements that I will hide....
let hide_array = [...hide];

clicking.addEventListener("click", function () {
    hide_array.forEach(element => {
        element.classList.add("hidden");
        if (element.classList.contains("hidden")) {
            setTimeout(function () {
                hide_array.forEach(element => {
                    element.classList.add("none");
                });
            }, 1000)
        }
    });
})

