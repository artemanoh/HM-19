// Task 1
const openModalButton = document.querySelector("[data-action=open-modal]");
const closeModalButton = document.querySelector("[data-action=close-modal]");
const modalBackdrop = document.querySelector(".backdrop");
const bodyElement = document.querySelector("body");
openModalButton.addEventListener("click", (event) => {
    bodyElement.classList.add("show-modal");
});

closeModalButton.addEventListener("click", (event) => {
    bodyElement.classList.remove("show-modal");
});
// Task 2
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    bodyElement.classList.remove("show-modal");
  }
});
// Task 3
const redColor = document.querySelector("#red")
const whiteColor = document.querySelector("#white")
const greenColor = document.querySelector("#green")

redColor.addEventListener("focus", (event) => {
bodyElement.style.backgroundColor = "red";
});

whiteColor.addEventListener("focus", (event) => {
bodyElement.style.backgroundColor = "white";
});

greenColor.addEventListener("focus", (event) => {
bodyElement.style.backgroundColor = "green";
});
// Task 4
const inputElement = document.querySelector("#name-input");
const nameElement = document.querySelector("#name-output");
inputElement.addEventListener("input", (event) => { 
    if (event.target.value === "") {
        nameElement.textContent = "незнайомець";
    } else{
        nameElement.textContent = event.target.value;
    }
});
// Task 5
const valideInput = document.querySelector("#validation-input");
valideInput.addEventListener("input", (event) => {
    if (event.target.value.length === 6) {
        valideInput.classList.add("valid");
        valideInput.classList.remove("invalid");
    } else if (event.target.value.length === 0) {
        valideInput.classList.remove("invalid");
        valideInput.classList.remove("valid");
    } else {
        valideInput.classList.add("invalid");
        valideInput.classList.remove("valid");
    }
});

// Task 6
const sliderElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
sliderElement.addEventListener("input", (event) => {
    textElement.style.fontSize = `${sliderElement.value}px`
}); 