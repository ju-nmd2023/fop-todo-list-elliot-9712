        function loadList() {
            const inputArray = JSON.parse(localStorage.getItem("list")) || [];
            const ul = document.createElement("ul");
            inputArray.forEach(function(item) {
                const li = document.createElement("li");
                li.textContent = item;
                ul.appendChild(li);
            });
            document.getElementById("listContent").appendChild(ul);
        }

        document.addEventListener("DOMContentLoaded", function() {
            loadList();

            document.getElementById("submitButton").addEventListener("click", function() {
                const inputValue = document.getElementById("list-input").value;
                const inputArray = JSON.parse(localStorage.getItem("list")) || [];
                
                inputArray.push(inputValue);
                localStorage.setItem("list", JSON.stringify(inputArray));
                
                document.getElementById("list-input").value = "";
                document.getElementById("listContent").innerHTML = "";

                const ul = document.createElement("ul");
                inputArray.forEach(function(item) {
                    const li = document.createElement("li");
                    li.textContent = item;
                    ul.appendChild(li);
                });
                
                document.getElementById("listContent").appendChild(ul);
            });
        });