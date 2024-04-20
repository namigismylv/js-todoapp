const toDoApp = document.getElementById("todoapp")
const add = document.getElementById("add")
const list = document.getElementById("list")
const form=document.getElementById("form")
form.addEventListener("submit",()=>{
    
    if (toDoApp.value.trim() == "") return
        let newLi = document.createElement("li")
        let newBtn = document.createElement("button")
        let p = document.createElement("p")
        let icon = document.createElement("i")
        let checkbox = document.createElement("input")
        let div = document.createElement("div")
        p.innerHTML = toDoApp.value
        list.appendChild(newLi)
        newLi.append(div, newBtn)
        newBtn.append(icon)
        div.append(checkbox, p)
        icon.classList.add("fa-solid", "fa-trash")
        toDoApp.value = ""
        checkbox.type = "checkbox"
        newBtn.addEventListener("click",()=>{
            let choise=confirm("Silməyinizə əminsiniz?")
            if(choise)
            {   
                newBtn.parentElement.style.display="none"
            }
            
        })        
        checkbox.addEventListener("click",(e)=>{
            if (checkbox.checked){
                newLi.classList.add("completed")
                newLi.style.opacity="0.5"
            }
            else{
                newLi.classList.remove("completed")
                newLi.style.opacity="1"

            }
        })
     
})
        