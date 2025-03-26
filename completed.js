document.getElementById("com1").addEventListener("click", function (event) {

    let totaltask = "totaltask";
    let tasknum = innnetTextToNumber(totaltask);
    document.getElementById(totaltask).innerText = tasknum + 1;

    let remaintask = "remaintask";
    let remaintask1 = innnetTextToNumber(remaintask);
    document.getElementById(remaintask).innerText = remaintask1 - 1;


    let com1 = document.getElementById("com1");
    com1.style.backgroundColor = "black";
    com1.style.cursor = "default";

    //task history list
    let taskname = "task1";
    taskname = innertextgene(taskname);
    console.log(taskname);

    let taskhistory = document.getElementById("taskhistory");
    let complettask = document.createElement("p");
    complettask.innerText = "You complete The Task " + taskname;
    taskhistory.appendChild(complettask);
    taskhistory.classList.add('bg-gray-200', 'p-2', 'rounded-md', 'm-2', 'border-b', 'border-t');

})

document.getElementById("com2").addEventListener("click", function (event) {

    let totaltask = "totaltask";
    let tasknum = innnetTextToNumber(totaltask);
    document.getElementById(totaltask).innerText = tasknum + 1;

    let remaintask = "remaintask";
    let remaintask1 = innnetTextToNumber(remaintask);
    document.getElementById(remaintask).innerText = remaintask1 - 1;


    let com1 = document.getElementById("com2");
    com1.style.backgroundColor = "black";
    com1.style.cursor = "default";

    //task history list
    let taskname = "task2";
    taskname = innertextgene(taskname);
    console.log(taskname);

    let taskhistory = document.getElementById("taskhistory");
    let complettask = document.createElement("p");
    complettask.innerText = "You complete The Task " + taskname;
    taskhistory.appendChild(complettask);
    taskhistory.classList.add('bg-gray-200', 'p-2', 'rounded-md', 'm-2', 'border-b', 'border-t');
})

document.getElementById("com3").addEventListener("click", function (event) {

    let totaltask = "totaltask";
    let tasknum = innnetTextToNumber(totaltask);
    document.getElementById(totaltask).innerText = tasknum + 1;

    let remaintask = "remaintask";
    let remaintask1 = innnetTextToNumber(remaintask);
    document.getElementById(remaintask).innerText = remaintask1 - 1;


    let com1 = document.getElementById("com3");
    com1.style.backgroundColor = "black";
    com1.style.cursor = "default";

    //task history list
    let taskname = "task3";
    taskname = innertextgene(taskname);
    console.log(taskname);

    let taskhistory = document.getElementById("taskhistory");
    let complettask = document.createElement("p");
    complettask.innerText = "You complete The Task " + taskname;
    taskhistory.appendChild(complettask);
    taskhistory.classList.add('bg-gray-200', 'p-2', 'rounded-md', 'm-2', 'border-b', 'border-t');
})

document.getElementById("com4").addEventListener("click", function (event) {

    let totaltask = "totaltask";
    let tasknum = innnetTextToNumber(totaltask);
    document.getElementById(totaltask).innerText = tasknum + 1;

    let remaintask = "remaintask";
    let remaintask1 = innnetTextToNumber(remaintask);
    document.getElementById(remaintask).innerText = remaintask1 - 1;


    let com1 = document.getElementById("com4");
    com1.style.backgroundColor = "black";
    com1.style.cursor = "default";

    //task history list
    let taskname = "task4";
    taskname = innertextgene(taskname);
    console.log(taskname);

    let taskhistory = document.getElementById("taskhistory");
    let complettask = document.createElement("p");
    complettask.innerText = "You complete The Task " + taskname;
    taskhistory.appendChild(complettask);
    taskhistory.classList.add('bg-gray-200', 'p-2', 'rounded-md', 'm-2', 'border-b', 'border-t');
})

document.getElementById("com5").addEventListener("click", function (event) {

    let totaltask = "totaltask";
    let tasknum = innnetTextToNumber(totaltask);
    document.getElementById(totaltask).innerText = tasknum + 1;

    let remaintask = "remaintask";
    let remaintask1 = innnetTextToNumber(remaintask);
    document.getElementById(remaintask).innerText = remaintask1 - 1;


    let com1 = document.getElementById("com5");
    com1.style.backgroundColor = "black";
    com1.style.cursor = "default";

    //task history list
    let taskname = "task5";
    taskname = innertextgene(taskname);
    console.log(taskname);

    let taskhistory = document.getElementById("taskhistory");
    let complettask = document.createElement("p");
    complettask.innerText = "You complete The Task " + taskname;
    taskhistory.classList.add('bg-gray-200', 'p-2', 'rounded-md', 'mt-2', 'border-b', 'border-t');
    taskhistory.appendChild(complettask);

})

document.getElementById("com6").addEventListener("click", function (event) {

    let totaltask = "totaltask";
    let tasknum = innnetTextToNumber(totaltask);
    document.getElementById(totaltask).innerText = tasknum + 1;

    let remaintask = "remaintask";
    let remaintask1 = innnetTextToNumber(remaintask);
    document.getElementById(remaintask).innerText = remaintask1 - 1;


    let com1 = document.getElementById("com6");
    com1.style.backgroundColor = "black";
    com1.style.cursor = "default";

    //task history list
    let taskname = "task6";
    taskname = innertextgene(taskname);
    console.log(taskname);

    let taskhistory = document.getElementById("taskhistory");
    let complettask = document.createElement("p");
    complettask.innerText = "You complete The Task " + taskname;
    taskhistory.classList.add('bg-gray-200', 'p-2', 'rounded-md', 'mt-2', 'border-b', 'border-t');
    taskhistory.appendChild(complettask);

})

document.getElementById("Clear").addEventListener("click", function () {
    let taskhistory = document.getElementById("taskhistory");
    taskhistory.innerHTML = "";
});


//innetext to Number
function innnetTextToNumber(totaltask) {
    let totaltasknum = document.getElementById(totaltask).innerText;
    return Number(totaltasknum)
}

//innetext
function innertextgene(id) {
    let text = document.getElementById(id).innerText;
    return text;
}

