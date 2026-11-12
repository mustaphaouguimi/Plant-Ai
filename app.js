const taskgrid =document.getElementById("task-grid")



fetch("./data.json")
.then((response=>{
    if(!response.ok){
        throw new Error(response.status)
        
    }
    return response.json()
})).then(data=>{
    localStorage.setItem("tasks",JSON.stringify(data))
    let tasks=JSON.parse(localStorage.getItem("tasks"))
    for (const element of tasks) {
        console.log(element)
        afficherTache(element)
        
    }
}).catch(error=>{
    console.log(error)
})


function afficherTache(task){
    taskgrid.innerHTML+=`
    <div class="border rounded-lg w-60 mt-16 bg-white p-3 shadow-md">
                <div class="flex items-center gap-2 ">
                    <div class="h-3 w-3 border bg-red-500 rounded-full">
                    </div>
                    <div>
                        <p class="font-semibold">To Do</p>
                    </div>
                </div>
                <div class="w-full g p-3 bg-gray-50  border-l-5 border-l-red-500 shadow-md w-50">
                    <div class="flex items-center justify-between border-1-4 border-1-red-500 mb-3">
                        <p class="text-sm font-semibold">${task.id}</p>

                        <div class=" flex items-center rounded-md border bg-red-500 h-6 w-15">
                            <i class="fa-solid fa-plus text-xs"></i>
                            <p class="text-sm font-semibold">${task.priority}</p>
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
}