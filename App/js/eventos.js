var atividades = document.getElementById('atividades');
var data = document.getElementById('data');
var descricao = document.getElementById('descricao');
var horario = document.getElementById('horario');
var local = document.getElementById('autocomplete');
var titulo = document.getElementById('titulo');
var addButton = document.getElementById('addButton');

//Ao Clicar no Botão
addButton.addEventListener('click', function () {
    create(atividades.value, data.value, descricao.value, horario.value, autocomplete.value, local.value, titulo.value);
});

function create(atividades, data, descricao, horario, local, titulo) {
    var dados = {
        atividades: atividades,
        data: data,
        descricao: descricao,
        horario: horario,
        local: local,
        titulo: titulo
    };

    return firebase.database().ref().child('Eventos').push(dados);

}

firebase.database().ref('Eventos').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().atividades + ' : ' + item.val().data + ' : ' +
            item.val().descricao + ' : ' + item.val().horario + ' : ' + item.val().local + ' : ' +
            item.val().titulo));
        usersList.appendChild(li);
    });
});