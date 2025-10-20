export default function hello(){

    //all functions are functional except background color change based on status
    const userName = "Evie";
    let premiumStatus = false;
    let tasks = [
        {taskName: "Make a playlist", 
        completed: false},
        {taskName: "Add a profile picture", 
        completed: true}];
    return(
        <div>
            <h3>Today's Date: {displayDate()}</h3>
            <h1>Hello, {userName}!</h1>
            <h3>{showPremiumStausMsg(premiumStatus)}</h3>
            <h3>{showTasklist(tasks)}</h3>
            <h3 id="progress">{showProgress(tasks)}</h3>
        </div>
    );
}

function displayDate(){
    const todaysDate = new Date().toLocaleDateString();
    return todaysDate;
}
function showPremiumStausMsg(premiumStatus){
    if (premiumStatus == true){
        return "Thank you for being a premium member!";
    } else {
        return  "Upgrade to premium to enjoy exclusive features!";
    }
}

function showTasklist(tasklist){ //returns array of strings
    const formattedTasklist = tasklist.map(function(task){
            return displayTask(task);
    });
    return formattedTasklist;//returns array of strings
}

function displayTask(taskObj){
    let taskStr = `Task: ${taskObj.taskName}, Status: ${getStatusSymbol(taskObj)}`;
    if(taskObj.completed == "false"){
        document.getElementById('progress').style.backgroundColor = "green";
    }
    return taskStr;
}
function getStatusSymbol(task){
    if(task.completed == "true"){
        return "✅";
    } else {
        return "❌";
    }
}
function showProgress(tasklist){
    let numComplete = 0;
    let numIncomplete = 0;

    tasklist.forEach(task => {
        if(task.completed == "true"){
            numComplete++;
        } else {
            numIncomplete++;
        }
    });
    return `Completed Tasks: ${numComplete}
            Incomplete Tasks: ${numIncomplete}`;
}