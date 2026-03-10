//get element by id
console.log("Document Object:", document);
console.log("Page title", document.title);

// const heading = document.getElementById("mainHeading");
// console.log("Heading Text",heading.textContent);

//getElementByClass
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

//getElementbyTag
const spanTag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }

    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "lightgreen";
    }

    const mainFirstHeading = document.querySelector("#mainHeading");
    mainFirstHeading.style.color = "red";
});

//Query selector:returns the first element
//selector
const task = document.querySelectorAll(".task");
// task.style.color="purple";
task.forEach(function(task){
    task.style.color = "purple";
})