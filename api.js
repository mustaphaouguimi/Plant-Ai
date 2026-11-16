 const myTextInput=document.getElementById('myTextInput')
    close.addEventListener("click",(e)=>{
        e.preventDefault()
    let value=myTextInput.value;
    console.log(value)
    sessionStorage.setItem("myKey",value)
        
    })
let api=sessionStorage.getItem("mykey")


export async function getTsk(prompt){
    try{
        const res=await fetch('https://api.openai.com/v1/chat/completions',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer${api}`
            },
            body:JSON.stringify({
                model:"gpt-4o-mini",
                message:[
                    {role:"user",content:prompt}
                ]

            })
        })
        ;if(!res.ok){
            throw new Error(res.status)
        }
        const data=await res.json()
        localStorage.setItem("tasks", JSON.stringify(data))
        return data;
        
    }catch(error){
        console.log(error)
    }
}