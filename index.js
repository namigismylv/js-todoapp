const toDoApp = document.getElementById("todoapp")
const add = document.getElementById("add")
const list = document.getElementById("list")

add.addEventListener("click", (e) => {
    if (toDoApp.value != "") {
        let newLi = document.createElement("li")
        let newBtn = document.createElement("button")
        let p = document.createElement("p")
        let icon = document.createElement("i")
        let checkbox = document.createElement("input")
        let div = document.createElement("div")
        icon.classList.add("fa-solid", "fa-trash")
        p.innerHTML = toDoApp.value
        list.appendChild(newLi)
        newLi.append(div, newBtn)
        newBtn.append(icon)
        div.append(checkbox, p)
        toDoApp.value = ""
        checkbox.type = "checkbox"
    }

})