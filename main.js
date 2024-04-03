document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitButton").addEventListener("click", function() {
        const inputValue = document.getElementById("list-input").value;
        console.log(inputValue);
    });
});

