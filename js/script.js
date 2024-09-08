// Função para buscar e exibir os resultados da pesquisa
function pesquisar() {
    // Obtém o elemento da página onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    // Obtém o valor do campo de pesquisa e remove espaços em branco extras
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Prepara uma string vazia para armazenar o HTML dos resultados da pesquisa
    let resultados = '';

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === '') {
        // Se estiver vazio, exibe uma mensagem informando que a pesquisa precisa de um termo
        section.innerHTML = "<p>Nada foi encontrado. É preciso digitar o nome de um filme ou sinopse.</p>";
        return;
    }

    // Converte o termo de pesquisa para minúsculas para garantir a comparação insensível a maiúsculas/minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Percorre cada item de dados e cria o HTML para exibir os resultados
    for (let dado of dados) {
        // Converte o título do filme e a sinopse para minúsculas para comparação
        let filme = dado.filme.toLowerCase();
        let sinopse = dado.sinopse.toLowerCase();

        // Verifica se o título do filme ou a sinopse contêm o texto pesquisado
        if (filme.includes(campoPesquisa) || sinopse.includes(campoPesquisa)) {
            // Se o termo de pesquisa for encontrado, adiciona um bloco HTML com as informações do filme
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
    
    // Se não houver resultados, exibe uma mensagem de "Nada foi encontrado"
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }
    
    // Atualiza o conteúdo da seção com o HTML gerado para mostrar os resultados ou a mensagem de "Nada foi encontrado"
    section.innerHTML = resultados;
}
