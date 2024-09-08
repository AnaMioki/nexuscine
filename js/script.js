
let section = document.getElementById("resultados-pesquisa")
console.log(section);

for (let dado of dados) {
section.innerHTML += `
      <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.filme}</a>
                </h2>
                <p class="diretor">${dado.diretor}</p>
                <p class="elenco">${dado.elenco}</p>
                <p class="ano">${dado.ano}</p>
                <p class="descricao-meta">${dado.sinopse}</p>
                <p class="genero">${dado.genero}</p>
                <p class="plataformasStreaming">${dado.plataformasStreaming}</p>
                <p class="curiosidades">${dado.curiosidades}</p>
                <a href="#">Mais informações...</a>
            </div>
`
}