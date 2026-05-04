function applyNow() {
    alert("Thank you for your interest! Apply process will start soon.");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}