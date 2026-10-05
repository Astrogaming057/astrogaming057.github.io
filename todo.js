const todoList = document.querySelector(".todo-list")
const input = document.getElementById("new-todo")
const addButton = document.getElementById("add-todo")
const todos = JSON.parse(localStorage.getItem("todo-list")) || []







const renderTodos = () => {
    todoList.innerHTML = ""
    todos.forEach((todo) => {
        const li = document.createElement("li")
        li.className = "todo"
        li.textContent = todo.text
        todoList.append(li)
    })
}




addButton.addEventListener("click", () => {
    const text = input.value.trim()
    if (!text) return
    todos.push({ text, completed: false })
    localStorage.setItem("todo-list", JSON.stringify(todos))

    input.value = ""
    renderTodos()
})




input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addButton.click()
    }
})



renderTodos()