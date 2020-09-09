//alert(' teste de importação de script passou com sucesso');

var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer Café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];

function renderTodos(){
    for (todo of todos) {

        var todoText = document.createTextNode(todo);
        var todoElement = document.createElement("li");
        
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);

    }
}

function addTodos() {

    

}

renderTodos();