let nameBox = document.getElementsByClassName("name")[0];
let nameInput = document.querySelector("div.name > input");
let nameDom = document.createElement("h1");

let savedName = localStorage.getItem("name");

if (savedName) {
  nameDom.innerText = "Hello, " + savedName;
  nameBox.append(nameDom);
  nameInput.remove();
} else {
  nameInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let inputName = nameInput.value.trim();
      if (inputName) {
        localStorage.setItem("name", inputName);
        nameDom.innerText = "Hello, " + inputName;
        nameBox.append(nameDom);
        nameInput.remove();
      }
    }
  });
}
