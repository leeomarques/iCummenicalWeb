var usersList = document.getElementById('usersList');
var nomeInput = document.getElementById('nomeInput');
var emailInput = document.getElementById('emailInput');
var telefoneInput = document.getElementById('telefoneInput');
var addButton = document.getElementById('addButton');

//Ao Clicar no Botão
addButton.addEventListener('click', function () {
    create(nomeInput.value,
        emailInput.value,
        telefoneInput.value
    );
    alert('Cadastro Realizado com sucesso!');
    reload_page();
});

function create(nome, email, telefone, local, descricao, atividades) {
    var dados = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    return firebase.database().ref('voluntarios/').push(dados);

}