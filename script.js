let input = document.querySelector("input");
let taskList = document.getElementById("tasks");
let btn = document.querySelector("button");

// Add task on clicking the button
btn.addEventListener("click", addTask);

// Add task on pressing Enter key
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }  
});

// Function to add task
function addTask(){
    if(input.value==""){
        alert("Task cannot be empty!");
        return;
    }
    console.log(input.value);
    // The task got from the input is added as <li>
    let task = document.createElement("li");
    task.innerText=input.value;
    task.classList.add("lis");

    // For the task !done the checkbox is created
    let check= document.createElement("input");    
    check.type="checkbox";
    check.classList.add("checkbox");

    // For deletion of task a delete icon
    let span = document.createElement("span");
    span.classList.add("del");

    // And at last all these added to a <ul> as a child element <li>
    task.prepend(check);
    task.append(span);
    taskList.prepend(task);

    // Clear input field
    input.value="";
}

// Function to remove tasks
document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("del")) { 
        e.target.parentElement.remove(); // Remove the parent element of the clicked button
    }
});

// Function for checkbox
document.body.addEventListener("change", function (e) {
    if (e.target.classList.contains("checkbox")) {  
        let listItem = e.target.closest("li");
        if (e.target.checked) {
            listItem.classList.add("completed"); // Add strikethrough
        } else {
            listItem.classList.remove("completed"); // Remove strikethrough
        }
    }
});