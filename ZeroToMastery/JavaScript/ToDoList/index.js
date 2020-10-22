let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let deleteBtn = document.querySelectorAll(".delete");
let finishedBtn = document.querySelectorAll(".finished");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");

  li.innerHTML = `
    <span class="list-value">
      ${input.value}
    </span>
    <button class="delete">❌</button>
    <button class="finished">✅</button>
  `;

  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", ({ target, currentTarget, eventPhase }) => {
  //   console.log(target);
  //   console.log(currentTarget);
  //   console.log(eventPhase);

  // if (target.matches(".delete"))
  if (target.classList.contains("delete")) {
    //     target.closest("li").remove();
    target.parentElement.remove();
  } else if (target.matches(".finished")) {
    target.parentElement.classList.toggle("done");

    // target.closest("li").classList.toggle("done");
  }
});
