const {inquirerMenu, inquirerInput} = require('./helpers/inquirer');
//const TaskRepository  = require('./repositories/TaskRepository');
const {getAllTask, createTask, deleteTask, completeTask} = require('./services/fileService');


const main = async() => {
    
    //const taskRepository = new TaskRepository;
    let option = '';
    //Utilizamos el Do While, Do para ingresar por primera vez al menu y mientras se siga cumpliendo la condición no va a salir del ciclo While
    do {
        //Aca llamamos a la función inquirerMenu y nos da el Menu por la terminal
        option = await inquirerMenu(); 
        switch(option){
            case 1:
                //En este caso la variable title esta esperando a que se ejecute la funcion inquirerInput la cual devuelve lo ingresado por la terminal.
                const title = await inquirerInput('Task Title');
                createTask(title);
                
                break;
            case 2:
                //En este caso se obtienen todas las tareas 
                const allTasks = getAllTask();
                console.log(allTasks);                
                break;            
            case 3:
                //En este caso actualizo/completo una tarea por su título
                const title2 = await inquirerInput('Task Title');
                completeTask(title2);                
                break;
            case 4:
                //En este caso elimino una tarea por su título
                const titleTask = await inquirerInput('Task Title');
                deleteTask(titleTask);
                break;
        };

    }while(option !== 'X'){

    }  

};

main();