

const saveButton = document.querySelector(".worker-form");
const starfsmadur = document.getElementById("workerName");

const starfsmenn=[];



saveButton.addEventListener("submit", (event) => {
    event.preventDefault()

    starfsmenn.push({
        name: starfsmadur.value.trim(),
        score: 0,
        pic: null
    });

    console.log(starfsmenn);
});





