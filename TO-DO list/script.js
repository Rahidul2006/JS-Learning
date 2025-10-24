let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

button.addEventListener('click', function () {
    let task = input.value.trim();
    if (task != "") {
        let li = document.createElement('li');
        li.textContent = task;
        const DLbtn = document.createElement('button');
        DLbtn.textContent = ("Mark as Complete");
        DLbtn.style.marginLeft = "10px";
        DLbtn.style.padding = "5px";
        DLbtn.addEventListener("click", () => {
            li.style.color = "green";
            li.removeChild(DLbtn);
            const tik = document.createElement('span');
            tik.textContent = ("✅")
            li.appendChild(tik)
        });
        // li.appendChild(tik);
        li.appendChild(DLbtn);
        ul.appendChild(li);
        input.value = '';
    }
    else{
        alert("Enter a value.")
    }
});