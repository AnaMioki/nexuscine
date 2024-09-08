// Função para buscar e exibir os resultados da pesquisa
function pesquisar() {
    // Obtém o elemento da página onde vamos mostrar os resultados
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Prepara uma string vazia para armazenar o HTML dos resultados
    let resultados = '';

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === '') {
        section.innerHTML = "<p>Nada foi encontrado. É preciso digitar o nome de um filme ou sipnose.</p>";
        return;
    }

    // Converte o campo de pesquisa para minúsculas para comparação insensível a maiúsculas/minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Percorre cada item de dados e cria o HTML para cada um
    for (let dado of dados) {
        let filme = dado.filme.toLowerCase();
        let sinopse = dado.sinopse.toLowerCase();

        // Verifica se o título do filme ou a sinopse incluem o texto pesquisado
        if (filme.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.filme}</a>
                </h2>
                <p class="diretor">${dado.diretor}</p>
                <p class="elenco">${dado.elencoPrincipal.join(', ')}</p>
                <p class="ano">${dado.ano}</p>
                <p class="descricao-meta">${dado.sinopse}</p>
                <p class="genero">${dado.generos.join(', ')}</p>
                <p class="plataformasStreaming">${dado.plataformasStreaming.join(', ')}</p>
                <p class="curiosidades">${dado.curiosidades}</p>
                <a href="#">Mais informações...</a>
            </div>
            `;
        }
    }
    
    if("!resultados"){
        resultados = "<p>Nada foi encontrado.</p>"
    }
    // Atualiza a seção com o HTML gerado para mostrar os resultados
    section.innerHTML = resultados || '<p>Nada foi encontrado</p>';
}
