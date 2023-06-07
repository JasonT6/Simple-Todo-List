const inputBox = document.getElementById("input-box");
const taskList = document.getElementsByClassName("task-list")[0];

function increaseCount(className){
    const currentNumberElement = document.getElementsByClassName(className)[0];
    var number = parseInt(currentNumberElement.innerHTML);
    number = number + 1;
    currentNumberElement.innerHTML = number;
}

function decreaseCount(className){
    const currentNumberElement = document.getElementsByClassName(className)[0];
    var number = parseInt(currentNumberElement.innerHTML);
    number = number - 1;
    currentNumberElement.innerHTML = number;
}

function addTask(){
    if (inputBox.value !== ""){
        let newListElement = document.createElement("li");
        newListElement.innerHTML = inputBox.value;
        taskList.appendChild(newListElement);

        let closeButton = document.createElement("span");
        var closeIcon = document.createTextNode("\u00D7");
        closeButton.className = "close-button";
        closeButton.appendChild(closeIcon);
        newListElement.appendChild(closeButton);

        increaseCount("remaining-number");

    }
    inputBox.value = "";
    saveData();
    
}

inputBox.addEventListener("keyup", function(e){
    if (e.key === "Enter") {
      addTask();
    }
});


taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('done');
        if (e.target.className === "done"){
            decreaseCount("remaining-number");
        }
        else{
            increaseCount("remaining-number");
        }
    }
    saveData();
});

taskList.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        if (e.target.parentElement.className !== "done"){
            decreaseCount("remaining-number");
        }
        e.target.parentElement.remove();
    }
    saveData();
});

function countRemaning(){
    var count = document.getElementsByClassName("task-list")[0].getElementsByTagName("li").length;
    var doneCount = document.getElementsByClassName("task-list")[0].getElementsByClassName("done").length
    console.log(count - doneCount);
    return count - doneCount;
}

function saveData(){
    localStorage.setItem("taskData", taskList.innerHTML);
}

function loadData(){
    taskList.innerHTML = localStorage.getItem("taskData");
    document.getElementsByClassName("remaining-number")[0].innerHTML = countRemaning();
}

loadData();