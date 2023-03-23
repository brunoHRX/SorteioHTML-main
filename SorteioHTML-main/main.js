$(function() {
    var orgaos = [];
    
    function renderizarLista() {
    var lista = $('#orgaos-list');
    lista.empty();
    orgaos.forEach(function(orgao) {
    lista.append($('<li>').addClass('list-group-item').text(orgao));
    });
    }
    
    $('#orgaos-form').submit(function(event) {
    event.preventDefault();
    var nome = $('#nome').val().trim();
    if (nome) {
    orgaos.push(nome);
    renderizarLista();
    $('#nome').val('');
    }
    });
    
    $('#sortear-btn').click(function() {
    if (orgaos.length > 0) {
    var index = Math.floor(Math.random() * orgaos.length);
    var orgao = orgaos.splice(index, 1)[0];
    $('#resultado').append($('<div>').addClass('alert alert-success').text(orgao));
    renderizarLista();
    if (orgaos.length == 0) {
    Swal.fire('Sorteio Concluído', 'Todos os órgãos foram sorteados!', 'success');
    $('#sortear-btn').prop('disabled', true);
    }
    } else {
    Swal.fire('Erro', 'Não há órgãos cadastrados!', 'error');
    }
    $('#nova-votacao-btn').click(function() {
        location.reload();
    });
    
    });
    });