var usersList = document.getElementById('usersList');
var tituloInput = document.getElementById('tituloInput');
var dataInput = document.getElementById('dataInput');
var horaInput = document.getElementById('horaInput');
var localInput = document.getElementById('localInput');
var descricaoInput = document.getElementById('descricaoInput');
var atividadesInput = document.getElementById('atividadesInput');
var addButton = document.getElementById('addButton');

//Ao Clicar no Botão
addButton.addEventListener('click', function () {
    create(tituloInput.value,
        dataInput.value,
        horaInput.value,
        localInput.value,
        descricaoInput.value,
        atividadesInput.value
    );
});

function create(titulo, data, hora, local, descricao, atividades) {
    var dados = {
        titulo: titulo,
        data: data,
        hora: hora,
        local: local,
        descricao: descricao,
        atividades: atividades
    };

    return firebase.database().ref('Eventos/').push(dados);

}

firebase.database().ref('events').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ' : ' + item.val().age));
        usersList.appendChild(li);
    });
});