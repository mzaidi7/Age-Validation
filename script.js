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

// Remove the initial text from the <h1> element
document.getElementById("typewriter").textContent = "";

const sentence = "Age Validation Form";
const title = document.getElementById("typewriter");
let characterIndex = 0;

function type() {
    if (characterIndex < sentence.length) {
        title.textContent += sentence.charAt(characterIndex);
        characterIndex++;
        setTimeout(type, 100); // Change 100 to adjust typing speed
    }
}

type(); // Start the typewriter effect
