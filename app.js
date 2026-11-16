const titre = document.getElementById("titre")
import { afficherTache } from "./ui.js"
import { getTsk } from "./api.js"
import { tasks } from "./localstorage.js"
const taskgrid = document.getElementById("task-grid")

fetch("./data.json")
    .then((response => {
        if (!response.ok) {
            throw new Error(response.status)

        }
        return response.json()
    })).then(data => {
        localStorage.setItem("tasks", JSON.stringify(data))
        console.log(tasks.projectName)
        console.log(tasks.totalEstimatedHours)
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
        console.log("percentage", percentage)
        console.log("total", total)
        console.log("finneched", finished)

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




    async function ask(){
    let description=document.querySelector("#description").value
    let brief=document.querySelector("#brief").value
    let duration=document.querySelector('#duration').value
    let technologies=document.getElementById("technologies").value
    let nmDev=document.getElementById("nmDev").value
    let level=document.getElementById('level').value
    let projectName=document.querySelector('#project-name').value
    }



    