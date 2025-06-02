class TodoItemFormat {
    formatTask(task){
        return task.length > 14 ? task.slice(0 , 14) + "...." :task;
    }
    
    formatDueDate(dueDate){
        return dueDate || "no due date";
    }

    formatStatus(completed){
        return completed , "complete" , "pending";
    }
}

class ToDoManager{
    constructor(todoItemFormatter){
        this.todos=JSON.parse(localStorage.getItem("to do")) ||[];
        this.todoItemFormatter = todoItemFormatter;
    }

    addToDo(task, dueDate){
        const newToDo={
            id: this.getRandomId(),
            task: this.todoItemFormatter.formatTask(task),
            dueDate: this.todoItemFormatter.formatDueDate(dueDate),
            completed: false,
            status:"pending",
        }
    }
}

