function validateAge() {
    const ageInput = document.getElementById("age");
    const resultDiv = document.getElementById("result");

    const age = parseInt(ageInput.value);

    if (age <= 30) {
        document.body.style.backgroundColor = "yellow";
        resultDiv.innerText = `Name: ${document.getElementById("name").value}, Age: ${age}`;
    } else {
        document.body.style.backgroundColor = "green";
        resultDiv.innerText = `Name: ${document.getElementById("name").value}, Age: ${age}`;
    }

    // Prevent form submission
    return false;
}
