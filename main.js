var buttonAddTask = document.querySelector(".add-task button");
var inputAddTask = document.querySelector(".add-task input");
var ulTasks = document.querySelector("ul");

buttonAddTask.addEventListener("click", function () {

    // Captura o valor do input
    var value = inputAddTask.value;
    
    // Verifica se o valor não está vazio
    if (value) {

        // Constrói o item da lista
        var li = document.createElement("li");

        // Constrói label com o valor do input
        var label = document.createElement("label");
        label.innerText = value;

        // Constrói o botão Feito
        var button = document.createElement("button");
        button.className = "btn-done";
        button.innerText = "Feito";
        button.addEventListener("click", doneTask);

        // Coloca o label e o botão num item da lista
        li.appendChild(label);
        li.appendChild(button);

        // Adiciona o item recém construído na lista
        ulTasks.insertBefore(li, ulTasks.firstChild);

    }

});

// Altera estilo do item da lista quando feito
var doneTask = function() {
    var parentLi = this.parentNode;
    parentLi.className = "task-done";
}