function loadList() {
    const inputArray = JSON.parse(localStorage.getItem("list")) || [];
    const ul = document.createElement("ul");

    for (let index = 0; index < inputArray.length; index++) {
        const item = inputArray[index];
        const li = document.createElement("li");
        li.textContent = item.text;

        if (item.active) {
            li.classList.add('active');
        }

        const deleteIcon = document.createElement("span");
        deleteIcon.classList.add("delete-icon");
        deleteIcon.innerHTML = "&#128465;";
        deleteIcon.addEventListener('click', function(event) {
            removeItem(index);
        });

        li.appendChild(deleteIcon);
        li.addEventListener('click', function() {
            toggleClass(li, index);
        });

        ul.appendChild(li);
    }

    document.getElementById("listContent").innerHTML = '';
    document.getElementById("listContent").appendChild(ul);
}

function toggleClass(liClass, index) {
    const inputArray = JSON.parse(localStorage.getItem("list")) || [];
    liClass.classList.toggle('active');
    inputArray[index].active = liClass.classList.contains('active');
    localStorage.setItem("list", JSON.stringify(inputArray));
}

function removeItem(index) {
    const inputArray = JSON.parse(localStorage.getItem("list")) || [];
    inputArray.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(inputArray));
    loadList(); 
}

function onLoadHandler() {
    loadList();

    document.getElementById("submitButton").addEventListener("click", function() {
        const inputValue = document.getElementById("list-input").value;

        const inputArray = JSON.parse(localStorage.getItem("list")) || [];
        
        inputArray.push({ text: inputValue, active: false });
        localStorage.setItem("list", JSON.stringify(inputArray));
        
        document.getElementById("list-input").value = ""; //revert back the input field to an empty text field
        loadList();
    })
};
    
onLoadHandler();