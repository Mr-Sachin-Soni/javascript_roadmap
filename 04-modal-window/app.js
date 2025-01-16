const tabs = document.querySelectorAll(".btn");
const modalBox = document.querySelector(".modal-box");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", () => {
    modalBox.classList.remove("hidden");
    overlay.classList.remove("hidden");
    overlay.style.display = "block";
  });
}

const closFunc = (e) => {
  modalBox.classList.add("hidden");
  overlay.classList.add("hidden");
  overlay.style.display = "none";
};
overlay.addEventListener("click", closFunc);
closeBtn.addEventListener("click", closFunc);
