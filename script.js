 import {getTsk} from "./api.js"
 
 
//  let modal = document.getElementById("modal")
//         let open = document.getElementById("open")
//         let close=document.getElementById("close")
//         const vform=document.getElementById("vform")
//         console.log(vform)
//         open.addEventListener("click", () => {
//             modal.classList.toggle("hidden")
//         })
//         vform.addEventListener("submit",()=>{
//         const isValid=$(vform).parsley().isValid();

//             if(isValid){
//             modal.classList.add("hidden")
//             }   
//         })

//     const myTextInput=document.getElementById('myTextInput')
//     close.addEventListener("click",(e)=>{
//         e.preventDefault()
//     let value=myTextInput.value;

//     sessionStorage.setItem("myKey",value)
        
//     })
    
    console.log(sessionStorage.getItem("kesy ","myKey"))



const newProject=document.querySelector("#newProject")


const btnSubmit=document.getElementById("btnSubmit")




export function prompt(){
    if(btnSubmit){
btnSubmit.addEventListener("submit",(e)=>{
  e.preventDefault()
});
newProject.addEventListener("submit",(e)=>{
    e.preventDefault()
    let description=document.getElementById("description").value
    console.log(description.length)
    let brief=document.querySelector("#brief").value
    let duration=document.querySelector('#duration').value
    let technologies=document.getElementById("technologies").value
    let nmDev=document.getElementById("nmDev").value
    let level=document.getElementById('level').value
    let projectName=document.querySelector('#project-name').value
console.log(brief)
console.log(description,duration)
const prompt=`You are an experienced Senior Project Manager and Agile Coach specialized in software development.
Your mission is to analyze the project brief below and transform it into a detailed, realistic and well-organized development plan.
PROJECT INFORMATION:
Project Name: ${projectName}
Project Duration: ${duration} days
Team Size: ${nmDev} developer(s)
Technologies: ${technologies}
Difficulty Level: ${level}
Project Description: ${description}
Project Brief:${brief}

YOUR TASK:
Analyze the project carefully and break it down into actionable development tasks. For each task, generate the following information:
id: Unique task identifier (TASK-001, TASK-002...).title: Short, clear and descriptive title.description: Detailed explanation of what needs to be implemented.userStories: At least one user story following the format "As a [user], I want [feature] so that [benefit]."acceptanceCriteria: Clear and testable conditions that define when the task is completed.priority: Low, Medium, High or Critical.importance: Low, Medium or High.size: XS, S, M, L or XL.estimatedTime: Estimated effort in hours (a number).deadline: Expected completion day, expressed as Day 1, Day 2, etc.status: Always "To Do".dependencies: IDs of tasks that must be completed before this task. Use an empty array if there are none.
SIZE AND WORKLOAD RULES:
Size guide: XS = 2 hours or less, S = 3-4 hours, M = 5-6 hours, L = 7-8 hours, XL = more than 8 hours (avoid XL: split the task instead).The estimatedTime of a task must match its size.Assume 6 productive hours per developer per day.The sum of all estimatedTime values must not exceed: Project Duration x Team Size x 6 hours.Adapt the granularity and the complexity of the tasks to the Difficulty Level (Beginner = simpler and smaller tasks, Advanced = more technical tasks).
PLANNING RULES:
Break large features into smaller, actionable tasks.Avoid vague tasks such as "Develop the website".Each task must have a clear and achievable goal.Include setup, design, implementation, integration, testing, deployment and documentation tasks when relevant.Start with setup tasks and finish with final testing, deployment and documentation tasks.Prioritize essential features before optional ones.Do not generate tasks unrelated to the project and do not duplicate tasks.Acceptance criteria must be testable.Dependencies must only reference existing task IDs and must never be circular.A task's deadline must not be earlier than the deadline of any task it depends on.Every deadline must fit within the project duration (never later than Day [NUMBER OF DAYS]).Distribute the workload realistically across the available days and avoid impossible deadlines.
OUTPUT REQUIREMENTS:
Return ONLY a valid JSON object, with no markdown, no code fences and no text before or after it, using exactly this structure:
{
  "projectName": "string",
  "totalEstimatedHours": number,
  "tasks": [
    {
      "id": "TASK-001",
      "title": "string",
      "description": "string",
      "userStories": ["string"],
      "acceptanceCriteria": ["string"],
      "priority": "Low | Medium | High | Critical",
      "importance": "Low | Medium | High",
      "size": "XS | S | M | L | XL",
      "estimatedTime": number,
      "deadline": "Day N",
      "status": "To Do",
      "dependencies": ["TASK-001"]
    }
  ]
}
Property names and allowed values must be written exactly as shown above.estimatedTime and totalEstimatedHours must be numbers, not strings.totalEstimatedHours must equal the sum of all estimatedTime values.Generate between 8 and 40 tasks, depending on the project duration, the team size and the difficulty level.
--- FIN DU PROMPT ---`
console.log(prompt)
newProject.reset()
if(!prompt.valueOf) return
getTsk(prompt)


})
}}