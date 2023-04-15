// const btnAdd = document.querySelector(".button");
// btnAdd.style.backgroundColor = "red";
// btnAdd.innerText = "wertsdfthygjhkijl";
// button.appendChild(btnAdd);

const input = document.querySelector(".placeholder");
let btn = document.querySelector(".button");
let newDictionary = document.querySelector(".dictionary");

btn.addEventListener("click", () => {
  const indexes = document.querySelectorAll(".index");

  const divDict = document.createElement("div");
  divDict.className = "row";
  const div = document.querySelector(".russian");
  const newElement = document.createElement("div");
  const newIndex = document.createElement("span");
  newElement.className = "russian";
  newIndex.className = "index";
  newElement.innerText = input.value;
  newIndex.innerText = indexes.length + 1;
  newElement.prepend(newIndex);
  div.appendChild(newElement);

  divDict.appendChild(newElement);
  newDictionary.appendChild(divDict);

  // input.value = '';
});

const indexes = document.querySelectorAll(".index");
indexes.forEach((el, index) => {
  el[index].innerText = index;
});

// btn.addEventListener("click", addNewWord);
// input.addEventListener("keydown", (event) => {
//   if (event.key == "Enter") {
//     addNewWord();
//   }
// });

// function addNewWord() {
//   const indexes = document.querySelectorAll(".index"); // обратились к о всем индексам и смотрим сколько их всего, что бы добавлять по порядку сл-й.  узнаем по длинне массива индексов

// // делаем удаление
// btn.addEventListener("click", ("src="./icons/krestik.svg"") {
//   for (i = 0; i < indexes.length; i++)
//   {
//     indexes[i].innerText = i + 1
//   }
// })
