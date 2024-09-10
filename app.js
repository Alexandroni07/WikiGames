function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Tente pesquisar um game, plataforma, gênero ou 'todos'.</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let results = "";
    let titulo = "";
    let plataforma = "";
    let descricao = "";

    // Itera sobre os dados dos jogos
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase();
        plataforma = dado.plataforma.toLowerCase();
        todos = dado.todos.toLowerCase();
        genero = dado.genero.toLowerCase();
        // Se titulo includes campoPesquisa... Faça
        if (titulo.includes(campoPesquisa) || plataforma.includes(campoPesquisa) || descricao.includes(campoPesquisa) || todos.includes(campoPesquisa) || genero.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado
            results += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p>${dado.descricao}</p>
            <p>${dado.plataforma}</p>
            <p>${dado.genero}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
        `;
        }
    }

    if (!results) {
        results = "<p> Nada foi encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = results;
}


