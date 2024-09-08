// Função para buscar e exibir os resultados da pesquisa
function pesquisar() {

    // Obtém o elemento da página onde vamos mostrar os resultados
    let section = document.getElementById("resultado-pesquisa");
    console.log(section); // Verifica no console se o elemento foi encontrado

    // Prepara uma string vazia para armazenar o HTML dos resultados
    let resultados = '';

    // Percorre cada item de dados e cria o HTML para cada um
    for (let dado of dados) {
        resultados += `
      <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.filme}</a>
                </h2>
                <p class="diretor">${dado.diretor}</p>
                <p class="elenco">${dado.elencoPrincipal}</p>
                <p class="ano">${dado.ano}</p>
                <p class="descricao-meta">${dado.sinopse}</p>
                <p class="genero">${dado.generos}</p>
                <p class="plataformasStreaming">${dado.plataformasStreaming}</p>
                <p class="curiosidades">${dado.curiosidades}</p>
                <a href="#">Mais informações...</a>
            </div>
`;
    }
    // Atualiza a seção com o HTML gerado para mostrar os resultados
    section.innerHTML = resultados;
}
