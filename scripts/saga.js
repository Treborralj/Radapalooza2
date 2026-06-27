const fakeDatabase = {
    "25-06-2026": {
        "5B": "Biggi",
        "5A": "Tinna",
        "4B": "Robbi",
        "4A": "Jóna",
        "3B": "Sigga",
        "3A": "Pétur",
        "2D": "Bubbi",
        "2C": "Siggi",
        "2F": "Nonni",
        "2A": "Ugla"
    },

    "23-06-2026": {
        "5B": "Tinna",
        "5A": "Robbi",
        "4B": "Biggi",
        "4A": "Sigga",
        "3B": "Jóna",
        "3A": "Pétur",
        "2D": "Nonni",
        "2C": "Ugla",
        "2F": "Bubbi",
        "2A": "Siggi"
    },

    "27-06-2026": {
        "5B": "Tinna",
        "5A": "Robbi",
        "4B": "Biggi",
        "4A": "Sigga",
        "3B": "Jóna",
        "3A": "Pétur",
        "2D": "Nonni",
        "2C": "Ugla",
        "2F": "Bubbi",
        "2A": "Siggi"
    }
};

const datePicker = document.getElementById("datePicker");
const dateButton = document.getElementById("dateButton");
const previousButton = document.getElementById("prevButton");
const nextButton =document.getElementById("nextButton");
function formatDate(date){
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
}

function getCurrentDateString(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2,"0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function updateView(date){
    const ordering = fakeDatabase[date];

    dateButton.textContent = date;

    const entranceCards = document.querySelectorAll(".entrance")
    entranceCards.forEach(card => {
        const entranceName = card.dataset.entrance;
        const nameElement = card.querySelector("p");

        if (ordering && ordering[entranceName]) {
            nameElement.textContent = ordering[entranceName];
        } else {
            nameElement.textContent = "-";
        }
    });
}

function previousDay() {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - 1);

    currentDate = date.toISOString().split("T")[0];
    datePicker.value = currentDate;

    const formatedDate = formatDate(currentDate);
    updateView(formatedDate);
}

function nextDay() {
    const date = new Date(currentDate);
    date.setDate(date.getDate() + 1);

    currentDate = date.toISOString().split("T")[0];
    datePicker.value = currentDate;

    const formatedDate = formatDate(currentDate);
    updateView(formatedDate);
}

previousButton.addEventListener("click", previousDay);
nextButton.addEventListener("click", nextDay);
dateButton.addEventListener("click", () => {
    datePicker.showPicker()
})
datePicker.addEventListener("change", () => {
    currentDate = datePicker.value;
    const formattedDate = formatDate(currentDate);
    updateView(formattedDate);
})

let currentDate = getCurrentDateString();
let currentDateFormatted = formatDate(currentDate);
updateView(currentDateFormatted)
