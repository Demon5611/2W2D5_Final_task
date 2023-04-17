const input = document.querySelector(".placeholder");
let btn = document.querySelector(".button");
let newDictionary = document.querySelector(".dictionary");
const english = document.querySelector(".english");

btn.addEventListener("click", addNewWord);

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

  // english===========================
  const englElem = document.createElement("div");
  englElem.className = "english";
  divDict.appendChild(englElem);
  // translit ========================
  const englWord = translit(input.value);
  englElem.innerText = englWord;
  divDict.append(englElem);
  input.value = "";
}

function translit(addNewWord) {
  let result = "";
  for (let i = 0; i < addNewWord.length; i++) {
    if (dictionary[addNewWord[i]] && dictionary[addNewWord[i]]) {
      result += dictionary[addNewWord[i]];
    } else {
      result += addNewWord[i];
    }
  }
  return result;
}

const dictionary = {
  а: "а",
  б: "b",
  с: "с",
  д: "d",
  и: "i",
};

// // делаем удаление erase
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
