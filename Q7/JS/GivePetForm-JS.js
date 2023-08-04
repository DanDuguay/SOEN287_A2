const givePetForm = document.getElementById('givePetForm');

const checkboxes = document.querySelectorAll('input[type="checkbox"]',);

givePetForm.addEventListener('submit', event =>
{
    if (!Array.from(checkboxes).some(checkbox => checkbox.checked,))
    {
        event.preventDefault();
        alert("All questions need at least one answer before submitting");
    }

})