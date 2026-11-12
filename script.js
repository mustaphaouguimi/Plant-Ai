 let modal = document.getElementById("modal")
        let open = document.getElementById("open")
        let close=document.getElementById("close")
        const vform=document.getElementById("vform")
        console.log(vform)
        open.addEventListener("click", () => {
            modal.classList.toggle("hidden")
        })
        vform.addEventListener("submit",()=>{
        const isValid=$(vform).parsley().isValid();

            if(isValid){
            modal.classList.add("hidden")
            }   
        })