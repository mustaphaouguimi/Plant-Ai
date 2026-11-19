
const vform = document.getElementById("vform")
export function formValid(){
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
let key=sessionStorage.getItem("apiKey")
console.log (key)


export async function getTsk(prompttext) {
    try {
        const apiKey=sessionStorage.getItem("apiKey")
        const res = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer${api}`
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: [
                    { role: "user", content: prompttext }
                ]

            })
        })
            ; if (!res.ok) {
                throw new Error(res.status)
            }
        const data = await res.json()
        localStorage.setItem("tasks", JSON.stringify(data))
        return data;

    } catch (error) {
        console.log("api error",error)
    }
}