//Alta y Baja de modificacion de Tareas
const { v4: uuidv4 } = require('uuid');
//Defini la Clase Tarea(Task), las Clases empizan con Mayuscula.Este es el Modelo Tarea que voy a utilizar para la database y repositories.
class Task{

    id = '';
    title = '';
    done = null;
    created = null;
    finished = null;
    
    constructor(title){
        this.id = uuidv4(); //TODO: Asignar id
        this.title = title;
        this.done = false;
        this.created = new Date();
    }
};

module.exports = Task ;
