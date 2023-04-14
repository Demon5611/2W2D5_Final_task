const btnAdd = document.querySelector(".button");
btnAdd.style.backgroundColor = "red";
btnAdd.innerText = "wert";
button.appendChild(btnAdd);

const input = document.querySelector(".input-form");
const btn = document.querySelector(".button");
const container = document.querySelector(".container");

btn.addEventListener("click", addNewWord);
input.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    addNewWord();
  }
});

function addNewWord() {
  const indexes = document.querySelectorAll(".index"); // обратились к о всем индексам и смотрим сколько их всего, что бы добавлять по порядку сл-й.  узнаем по длинне массива индексов

  const newValue = document.createElement("div");
  const newIndex = document.createElement("span"); // дальше нужно задать классы див и спан
  newValue.className = "russian";
  newIndex.className = "index";
  newValue.innerText = input.value;
  newIndex.innerText = indexes.length + 1; // смотрим на длину списка индексов и вставляем след-им
  newValue.prepend(newIndex); // prepend ставит в начало списка
  container.appendChild(newValue);
  input.value = " ";
}

// делаем удаление
btn.addEventListener("click", ("src="./icons/krestik.svg"") {
  for (i = 0; i < indexes.length; i++)
  {
    indexes[i].innerText = i + 1
  }
})