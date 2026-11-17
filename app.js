const titre = document.getElementById("titre")

import { afficherTache } from "./ui.js"
import { tasks } from "./localstorage.js"
const taskgrid = document.getElementById("task-grid")
import{formValid} from "./api.js"
const vform = document.getElementById("vform")
const btnSubmit=document.getElementById("btnSubmit")
import { percentage } from "./ui.js"

fetch("./data.json")
    .then((response => {
        if (!response.ok) {
            throw new Error(response.status)

        }
        return response.json()
    })).then(data => {
        localStorage.setItem("tasks", JSON.stringify(data))
      

        for (const element of tasks.tasks) {
            // console.log(element)
            afficherTache(element)

        }
    }).catch(error => {
        console.log(error)
    })



if(vform){
    formValid()
}
if(btnSubmit){
    prompt()
}
if(titre){
    percentage()
}

   



    