class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List{
   /* constructor(){
        this.todos = [];
    }

    addTodos(){
        this.todos.push('Novo ToDo');
        console.log(this.todos);

    }
    //*/

    constructor(){
        super();
        
        this.usuario = 'Richelieu';

    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new ToDoList();

document.getElementById('novoToDo').onclick = function(){
    MinhaLista.add('nova adição');
}

MinhaLista.mostraUsuario();

class Matematica{
    static soma(a, b){
        return a + b;
    }
}

var resultado = Matematica.soma(3,7);
console.log(resultado);