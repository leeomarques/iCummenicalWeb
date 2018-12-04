var nomeInput = document.getElementById('nomeInput');
var enderecoInput = document.getElementById('enderecoInput');
var responsavelInput = document.getElementById('responsavelInput');
var tipolInput = document.getElementById('tipolInput');
var funcionamentoInput = document.getElementById('funcionamentoInput');
var addButton = document.getElementById('addButton');

//Ao Clicar no Botão
addButton.addEventListener('click', function () {
    create(nomeInput.value,
        enderecoInput.value,
        responsavelInput.value,
        tipolInput.value,
        funcionamentoInput.value
    );
});

function create(nome, endereco, responsavel, tipo, funcionamento) {
    var dados = {
        nome: nome,
        endereco: endereco,
        responsavel: responsavel,
        tipo: tipo,
        funcionamento: funcionamento
    };

    return firebase.database().ref('Templos/Igrejas/').push(dados);

}
