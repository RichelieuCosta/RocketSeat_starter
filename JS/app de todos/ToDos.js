//alert(' teste de importação de script passou com sucesso');

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*[
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];*/

var todos = JSON.parse(localStorage.getItem('list_todos')) || []; // caso não tenha nada no storage, atribui array vazio

function renderTodos(){
    listElement.innerHTML = '';

    for (todo of todos) {

        var todoText = document.createTextNode(todo+' ');
        var todoElement = document.createElement("li");
        
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href', '#');
        var pos = todos.indexOf(todo);

        todoElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodos() {

    var todo = inputElement.value;
    console.log(todo)
    todos.push(todo);

    inputElement.value = '';
    
    /*
    var todoText = document.createTextNode(todo);
    var todoElement = document.createElement("li");
       
    todoElement.appendChild(todoText);
    listElement.appendChild(todoElement);
    */
    
    saveToStorage();
    renderTodos();
   
}

buttonElement.onclick= addTodos;

function deleteTodo(pos){

    todos.splice(pos,1);

    saveToStorage();
    renderTodos();

}

function saveToStorage(){

    localStorage.setItem('list_todos', JSON.stringify(todos));

}