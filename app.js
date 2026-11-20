const titre = document.getElementById("titre")

import { afficherTache } from "./ui.js"
import { tasks } from "./localstorage.js"
const taskgrid = document.getElementById("task-grid")
import{formValid} from "./api.js"
const vform = document.getElementById("vform")
const btnSubmit=document.getElementById("btnSubmit")
import { percentage } from "./ui.js"
import { getTsk } from "./api.js"
import { createPrompt } from "./script.js"
import { afficher } from "./api.js"
if(taskgrid){
afficher()}


const newProject=document.querySelector("#newProject")
if(newProject){
newProject.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log("form submited")
    const prompttext=createPrompt()
console.log("2-" ,prompttext)
    if(!prompttext) return 
try {
    if(btnSubmit){
        btnSubmit.disabled=true;
        btnSubmit.value="generating..."
    }
    const result=await getTsk(prompttext)
 console.log("api result",result)

    const aiText=result.candidates[0].content.parts[0].aiText
    console.log("geminei eia ",)
    localStorage.setItem("aiText",JSON.stringify(aiText))
        newProject.reset()
        window.location.href="project.html"
    

} catch (error) {
    console.log("error",error)
    if(btnSubmit){
        btnSubmit.disabled=false;
        btnSubmit.value="Create plan"
    }
}

    
})
}

if(vform){
    formValid()
}
if(btnSubmit){
    createPrompt()
}
if(titre){
    percentage()
}

   



    