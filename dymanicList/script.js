const input = document.getElementsByClassName("int")[0];
const button = document.getElementsByClassName("btn")[0];
const list = document.getElementsByClassName("list")[0];

button.addEventListener("click", () => {
  const user = input.value.trim();
  if (user != "") {
    const newList = document.createElement("li");
    newList.innerText = user;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.addEventListener("click", () => {
      list.removeChild(newList);
    });

    newList.appendChild(deleteBtn);


    list.appendChild(newList);
    input.value = "";
  }
  else {
    alert("Please enter a valid item.");
  }
})