import { afficherTache } from "./ui.js"
import { tasks } from "./localstorage.js"

const vform = document.getElementById("vform")
export function formValid() {
    let close = document.getElementById("close")
    let modal = document.getElementById("modal")
    let open = document.getElementById("open")

    open.addEventListener("click", () => {
        modal.classList.toggle("hidden")
    })
    vform.addEventListener("submit", (e) => {
        e.preventDefault()

        const isValid = $(vform).parsley().isValid();

        if (isValid) {
            const apiKey = document.getElementById('myTextInput').value

            sessionStorage.setItem("apiKey", apiKey)

            modal.classList.add("hidden")
        }

    })
}
let key = sessionStorage.getItem("apiKey")

console.log(key)

export async function getTsk(prompttext) {
    try {
        const apiKey = sessionStorage.getItem("apiKey")
        console.log("apikey",apiKey)
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-goog-api-key": apiKey
            },
            body: JSON.stringify({
                "contents": [{"parts": [{
                                "text": prompttext }]} ],
             generationConfig: { responseMimeType: "application/json" }


            })
        })
            ;
            console.log(res.status)
            if (!res.ok) {
                const errorData=await res.json()
                console.log(errorData)
                console.log("status", res.status)
                throw new Error(res.status)

            }
        const data = await res.json()
        
        console.log(data)
        return data;

    } catch (error) {
        console.log("api error", error)
    }
}

export async function afficher() {
    fetch("./data.json")
        .then((response => {
            if (!response.ok) {
                throw new Error(response.status)

            }
            return response.json()
        })).then(data => {
            console.log(data)
            localStorage.setItem("tasks", JSON.stringify(data))


            for (const element of tasks.tasks) {
                // console.log(element)
                afficherTache(element)

            }
        }).catch(error => {
            console.log(error)
        })
}

