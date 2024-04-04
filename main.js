const inputArray = [];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", function() {
        const inputValue = document.getElementById("list-input").value;
        
        inputArray.push(inputValue);
        
        document.getElementById("list-input").value = "";
        document.getElementById("listContent").innerHTML = "";
        
        const ul = document.createElement("ul");
        
        inputArray.forEach(function(item) {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
        
        document.getElementById("listContent").appendChild(ul);
        console.log(inputArray);
    });
});