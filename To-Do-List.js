function addTask(){
    let task=document.getElementById("task").Value;
    if(task == ""){
        alert("please enter a task");
        return;
    }
let li=document.createElement("li");
li.innerHTML=task;
document.getElementById("list").appendChild(li);

document.getElementById("task").value="";
}