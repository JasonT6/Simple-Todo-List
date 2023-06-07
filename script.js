const inputBox = document.getElementById("input-box");
const taskList = document.getElementsByClassName("task-list")[0];

function addTask(){
    if (inputBox.value !== ""){
        let newListElement = document.createElement("li");
        newListElement.innerHTML = inputBox.value;
        taskList.appendChild(newListElement)
    }
    inputBox.value = "";
}

inputBox.addEventListener("keyup", function(e){
    if (e.key === "Enter") {
      addTask();
    }
});


taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle('done');
    }
});