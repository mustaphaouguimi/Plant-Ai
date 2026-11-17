import { tasks } from "./localstorage.js"
const todo=document.getElementById("todo")
const progress=document.getElementById("progress")
const done=document.getElementById("done")

 const colors={
    Low:"bg-green-500",
    High:"bg-red-500",
    Critical:"bg-yellow-500"
}

  const stat={
    Do:"To Do",
    progress:"In Progress",
    Done:"Done"
}
 const borderLeft={
    Do:"border-l-5 border-l-red-500",
    progress:"border-l-5 border-l-yellow-500",
    Done:"border-l-5 border-l-green-500"

}
 const bg={
    Do:"bg-red-500",
    progress:"bg-yellow-500",
    Done:"bg-green-500"
}
const taskgrid =document.getElementById("task-grid")
const titre=document.getElementById("titre")

export function afficherTache(task){
    
    const card=`
    <div class="border rounded-lg w-60 mt-16 bg-white p-3 shadow-md">
                <div class="flex items-center gap-2">
                    <div class="h-3 w-3 ${bg[task.status]} rounded-full">
                    </div>
                    <div>
                        <p class="font-semibold">${stat[task.status]}</p>
                    </div>
                </div>
                <div class="w-full g p-3 bg-gray-50 ${borderLeft[task.status]} shadow-md w-50">
                    <div class="flex items-center justify-between border-1-4 border-1-red-500 mb-3">
                        <p class="text-sm font-semibold">${task.id}</p>
                        <div class="flex items-center rounded-md border ${colors[task.priority]} h-6 w-20">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <p class="text-sm font-semibold p-2">${task.priority}</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-sm font-medium mb-4">${task.title}</p>
                    </div>
                    <div class="flex items-center justify-between text-xs text-gray-500">
                        <span class="flex items-center gap-1"><i class="fa-sharp fa-solid fa-alarm-clock"></i> ${task.estimatedTime}
                            h</span>
                        <span class="flex items-center gap-1"><i class="fa-solid fa-calendar"></i>${task.deadline}</span>
                    </div>
                </div>
            </div>
    `
    if(task.status==="Do"){
        todo.innerHTML+=card
    }else if(task.status==="progress"){
        progress.innerHTML+=card
    }
    else if(task.status==="Done"){
        done.innerHTML+=card
    }
}


export function percentage(){
    let percentage = 0
            let total = 0
            let finished = 0
            tasks.tasks.forEach(element => {
                total++
                if (element.status === "Done") {
    
                    finished++
                }
    
            });
            percentage = (finished / total) * 100;
           
    tasks.tasks
            titre.innerHTML += `<div class="class="m-5">${tasks.projectName}<br>
        <span >7 jour</span>
        <span>1 dev</span>
        <span>${percentage} %terminé</span>
        </div>`
    
}