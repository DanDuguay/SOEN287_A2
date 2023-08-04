const findPetForm = document.getElementById('findPetForm');

const checkboxes = document.querySelectorAll('input[type="checkbox"]',);

findPetForm.addEventListener('submit', event =>
    {
        if (document.forms["FindPetForm"]["type"] === "")
        {
            event.preventDefault();
            alert("Please pick a type before submitting");
        }

        else if (!Array.from(checkboxes).some(checkbox => checkbox.checked,))
        {
            event.preventDefault();
            alert("All questions need at least one answer before submitting");
        }

    })