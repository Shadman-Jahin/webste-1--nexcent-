const listIcon = document.querySelector(".bi-list");
const slider = document.querySelector("nav .content");
const exit = slider.querySelector("i");

listIcon.addEventListener("click", () => {
    slider.style.setProperty("right", "0");
    slider.style.setProperty("transition", ".3s");
});

exit.addEventListener("click", () => {
    slider.style.setProperty("right", "-250px");
})

