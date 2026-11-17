const titre = document.getElementById("titre")
import { afficherTache } from "./ui.js"
import { tasks } from "./localstorage.js"
const taskgrid = document.getElementById("task-grid")
import{formValid} from "./api.js"
import { prompt } from "./script.js"
const vform = document.getElementById("vform")
const btnSubmit=document.getElementById("btnSubmit")


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
console.log(prompt)
    async function ask(){
    let description=document.querySelector("#description").value
    let brief=document.querySelector("#brief").value
    let duration=document.querySelector('#duration').value
    let technologies=document.getElementById("technologies").value
    let nmDev=document.getElementById("nmDev").value
    let level=document.getElementById('level').value
    let projectName=document.querySelector('#project-name').value
    }



    