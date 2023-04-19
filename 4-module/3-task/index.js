function highlight(table) {
  let getRows = table.querySelectorAll("tr");

  for (let i = 1; getRows.length > i; i++) {
    if (getRows[i].lastElementChild.dataset.available === "true") {
      getRows[i].classList.add("available");
    } else {
      getRows[i].classList.add("unavailable");
    }
    if (!getRows[i].lastElementChild.hasAttribute("data-available")) {
      getRows[i].hidden = true;
    }
    let child = getRows[i].firstElementChild.nextElementSibling;

    if (child.innerText < 18) {
      child.parentElement.style.textDecoration = "line-through";
    }
    if (child.nextElementSibling.innerText === "m") {
      child.parentElement.classList.add("male");
    } else {
      child.parentElement.classList.add("female");
    }
  }
}
