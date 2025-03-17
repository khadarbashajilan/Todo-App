let input = document.querySelector("input");
let taskList = document.getElementById("tasks");

input.addEventListener("keydown", function (e){
    if(e.code=="Enter"||e.code=="NumpadEnter"){
        if(e.target.value==""){
            alert("Task cannot be empty!");
            return;
        }
        
        // The task got from the input is added as <li>
        let task = document.createElement("li");
        task.innerText=e.target.value;
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
        e.target.value="";
    }
})

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