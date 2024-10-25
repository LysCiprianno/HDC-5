let contatos = [];
 
function cadastrarContato() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
 
    if (contatos.length < 10) {
        contatos.push({ nome, endereco, telefone });
        alert('Contato cadastrado com sucesso!');
        clearInputs();
    } else {
        alert('Limite de 10 contatos atingido.');
    }
}
 
function clearInputs() {
    document.getElementById('nome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('telefone').value = '';
}
 
function pesquisarContato() {
    const nomePesquisa = document.getElementById('nomePesquisa').value;
    const contato = contatos.find(c => c.nome.toLowerCase() === nomePesquisa.toLowerCase());
 
    document.getElementById('resultadoPesquisa').innerText = contato
        ? `Nome: ${contato.nome}, Endereço: ${contato.endereco}, Telefone: ${contato.telefone}`
        : 'Contato não encontrado.';
}
 
function classificarContatos() {
    contatos.sort((a, b) => a.nome.localeCompare(b.nome));
    alert('Contatos classificados com sucesso!');
}
 
function exibirContatos() {
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';
    contatos.forEach(contato => {
        const li = document.createElement('li');
        li.innerText = `Nome: ${contato.nome}, Endereço: ${contato.endereco}, Telefone: ${contato.telefone}`;
        listaContatos.appendChild(li);
    });
}