const Task = require('../models/task');

//Todo lo que empieza con _ es de dominio privado

class TaskRepository {
    
    _tasks = null;

    constructor(){
        this._tasks = [];
    }

    getAllTask(){

    }

    createTask(task){
        this._tasks.push(task);
    }

    deleteTask(){

    }

    completeTask(){

    }


}