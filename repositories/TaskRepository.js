const Task = require('../models/task');
const { getData,saveData} = require('../helpers/fileManager');

//Todo lo que empieza con _ es de dominio privado

//Aca vamos a manejar 2 cosas, las instancias de Tareas y el archivo para poder Almacenarlos.
class TaskRepository {
    
    _tasks = null;

    constructor(){
        const data = getData();

        if(data){
            this._tasks = data;
        }else {
            this._tasks = [];
        }
        
    }

    getAllTask(){
        return this._tasks
    }

    /*
        @param {String} title

        TODO : Nos falta persistir datos en archivo
    */
   //Esta función crea la tarea, Instancia una nueva tarea a la cual le pasamos el titulo o title como parametro, luego lo pusheamos al array vacio osea _tasks y persistimos la data guardandolo con saveData() 
    createTask(title){
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);        
    }

    deleteTask(title){
        /* const newTasks = this._tasks.filter(task => task.title != title );
        this._tasks = newTasks;
        saveData(newTasks); */
        this._tasks = this._tasks.filter(task => task.title !== title );
        saveData(this._tasks);
    }

    //updateTask
    //Implemente un If ternario 
    completeTask(title){
        this._tasks = this._tasks.map(task => {
            task.title === title ? task.done = true: null
             return task;
        })
        saveData(this._tasks);
    }


}

module.exports = TaskRepository ;
     