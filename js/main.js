const share = document.getElementById("share");
const group = document.getElementById("group");
const button_group = document.getElementById("button_group");
const button_share = document.getElementById("button_share");

button_group.addEventListener("click", () => {
    share.classList.toggle("invisible");
})

button_share.addEventListener("click", () => {
    share.classList.toggle("invisible");
})
