function toggleText() {
  let text = document.querySelector("#text");
  let btnToggle = document.querySelector(".toggle-text-button");
  btnToggle.addEventListener("click", () => {
    text.hidden
      ? text.removeAttribute("hidden")
      : text.setAttribute("hidden", true);
  });
}
