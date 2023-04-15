const input = document.querySelector(".placeholder");
let btn = document.querySelector(".button");
let newDictionary = document.querySelector(".dictionary");
btn.addEventListener("click", addNewWord);
const english = document.querySelector(".english");

// keydown работает только с  input полем
// event.key  - key - это обьект, где указывается то, на что нажали
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addNewWord();
    // console.log(event) смотрим что дает нажатие клавиши
  }
});

function addNewWord() {
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
  divDict.appendChild(newElement);
  newDictionary.appendChild(divDict);
  input.value = "";

  // english===========================
  const englElem = document.createElement("div");
  englElem.className = "english";
  english.appendChild(englElem);


  

  // const newDiv = document.querySelector(".english");
  // const newSpan = document.createElement("span");
  // englElem.className = "english";
  // englElem.innerText = input.value;
  // // englElem.innerText = indexes.length + 1;

  // const div2Dict = document.createElement("div");
  // div2Dict.className = "row";

  // const newImg = document.querySelector("img");
  // newImg.className = "english_krestik";
  // newImg.src = "./icons/krestik.svg";
  // newImg.alt = "#";

  // englElem.appendChild(newSpan);
  // englElem.appendChild(newImg);
  // div2Dict.appendChild(englElem);
  // div2Dict.appendChild(newDiv);
  // newDictionary.appendChild(div2Dict);
}

// // делаем удаление srase
// btn.addEventListener("click", ("src="./icons/krestik.svg"") {
//   for (i = 0; i < indexes.length; i--)
//   {
//     indexes[i].innerText = i + 1 ???
//   }
// })

/*для удаления индексов по крестику*/
// const indexes = document.querySelectorAll(".index");
// indexes.forEach((el, index) => {
//   el[index].innerText = index;
// });
