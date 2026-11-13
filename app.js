const titre = document.getElementById("titre")
import { afficherTache } from "./ui.js"

const taskgrid = document.getElementById("task-grid")

fetch("./data.json")
    .then((response => {
        if (!response.ok) {
            throw new Error(response.status)

        }
        return response.json()
    })).then(data => {
        localStorage.setItem("tasks", JSON.stringify(data))
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        console.log(tasks.projectName)
        console.log(tasks.totalEstimatedHours)
        let percentage=0
        let total = 0
        let finished=0
        tasks.tasks.forEach(element => {
             total++
         if(element.status==="Done"){
           
            finished++
         }
        
            });
        percentage =  (finished / total) * 100 ;
            console.log("percentage",percentage)
            console.log("total",total)
            console.log("finneched",finished)

            titre.innerHTML += `<div class="class="m-5">${tasks.projectName}<br>
    <span >7 jour</span>
    <span>1 dev</span>
    <span>${percentage} %terminé</span>
    </div>`


            for (const element of tasks.tasks) {
                console.log(element)
                afficherTache(element)

            }
        }).catch(error => {
            console.log(error)
        })

