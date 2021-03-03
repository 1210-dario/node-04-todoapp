//Alta y Baja de modificacion de Tareas
const { v4: uuidv4 } = require('uuid');

class Task{

    id = '';
    title = '';
    done = false;
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