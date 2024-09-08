let dados = [
    {
      "filme": "De Volta para o Futuro",
      "diretor": "Robert Zemeckis",
      "elencoPrincipal": ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
      "ano": 1985,
      "sinopse": "Marty McFly, um adolescente, viaja acidentalmente no tempo para os anos 50, onde deve garantir que seus pais se apaixonem para preservar sua própria existência.",
      "generos": ["Aventura", "Comédia", "Ficção Científica"],
      "plataformasStreaming": ["Prime Video", "Netflix (dependendo da região)"],
      "premios": ["Oscar de Edição de Som", "BAFTA"],
      "curiosidades": "O roteiro foi rejeitado mais de 40 vezes antes de ser aceito."
    },
    {
      "filme": "Duna",
      "diretor": "Denis Villeneuve",
      "elencoPrincipal": ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
      "ano": 2021,
      "sinopse": "Paul Atreides, um jovem brilhante, deve viajar ao planeta mais perigoso do universo para salvar seu povo e garantir o futuro de sua família e de sua civilização.",
      "generos": ["Ficção Científica", "Aventura"],
      "plataformasStreaming": ["HBO Max", "Apple TV+"],
      "premios": ["Oscars em categorias técnicas (2022)"],
      "curiosidades": "A produção do filme contou com extensas gravações no deserto da Jordânia e dos Emirados Árabes."
    },
    {
      "filme": "Matrix",
      "diretor": "Lana e Lilly Wachowski",
      "elencoPrincipal": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      "ano": 1999,
      "sinopse": "Um hacker descobre que o mundo ao seu redor é uma simulação e deve lutar para libertar a humanidade das máquinas que a controlam.",
      "generos": ["Ficção Científica", "Ação"],
      "plataformasStreaming": ["HBO Max", "Amazon Prime"],
      "premios": ["4 Oscars, incluindo Efeitos Visuais"],
      "curiosidades": "O conceito de 'Matrix' foi fortemente inspirado por obras filosóficas e de ficção científica, como os escritos de Baudrillard."
    },
    {
      "filme": "MIB - Homens de Preto",
      "diretor": "Barry Sonnenfeld",
      "elencoPrincipal": ["Will Smith", "Tommy Lee Jones", "Linda Fiorentino"],
      "ano": 1997,
      "sinopse": "Agentes secretos lidam com alienígenas que vivem na Terra, protegendo a humanidade de ameaças extraterrestres.",
      "generos": ["Ficção Científica", "Comédia"],
      "plataformasStreaming": ["Amazon Prime Video", "HBO Max"],
      "premios": ["1 Oscar (Maquiagem)"],
      "curiosidades": "A franquia de filmes é baseada em uma série de quadrinhos da Malibu Comics, posteriormente adquirida pela Marvel."
    },
    {
      "filme": "Star Wars: Episódio IV - Uma Nova Esperança",
      "diretor": "George Lucas",
      "elencoPrincipal": ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      "ano": 1977,
      "sinopse": "Luke Skywalker se junta a um grupo de rebeldes para derrotar o Império Galáctico e salvar a galáxia das forças malignas lideradas por Darth Vader.",
      "generos": ["Aventura", "Fantasia", "Ficção Científica"],
      "plataformasStreaming": ["Disney+"],
      "premios": ["6 Oscars", "Globo de Ouro", "BAFTA"],
      "curiosidades": "Foi o primeiro filme a usar extensivamente o conceito de 'merchandising' para vender produtos relacionados à franquia."
    },
    {
      "filme": "Alien: O Oitavo Passageiro",
      "diretor": "Ridley Scott",
      "elencoPrincipal": ["Sigourney Weaver", "Tom Skerritt", "John Hurt"],
      "ano": 1979,
      "sinopse": "A tripulação de uma nave espacial enfrenta uma forma de vida alienígena mortal que se infiltra na nave.",
      "generos": ["Horror", "Ficção Científica"],
      "plataformasStreaming": ["Star+", "Amazon Prime Video"],
      "premios": ["1 Oscar (Efeitos Visuais)"],
      "curiosidades": "O design do alienígena foi criado pelo artista H.R. Giger e se tornou um ícone do cinema de terror."
    },
    {
      "filme": "Ex Machina",
      "diretor": "Alex Garland",
      "elencoPrincipal": ["Alicia Vikander", "Domhnall Gleeson", "Oscar Isaac"],
      "ano": 2014,
      "sinopse": "Um jovem programador participa de uma experiência para testar a inteligência artificial de um robô humanoide.",
      "generos": ["Drama", "Ficção Científica"],
      "plataformasStreaming": ["Amazon Prime Video", "Apple TV+"],
      "premios": ["Oscar de Melhores Efeitos Visuais"],
      "curiosidades": "O filme foi rodado em apenas seis semanas em um local isolado na Noruega, o que ajudou a criar a atmosfera intimista."
    },
    {
      "filme": "Guardiões da Galáxia",
      "diretor": "James Gunn",
      "elencoPrincipal": ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
      "ano": 2014,
      "sinopse": "Um grupo de desajustados se une para impedir um vilão de destruir a galáxia, formando os 'Guardiões da Galáxia'.",
      "generos": ["Ação", "Aventura", "Ficção Científica"],
      "plataformasStreaming": ["Disney+"],
      "premios": ["Indicações ao Oscar em Efeitos Visuais e Maquiagem"],
      "curiosidades": "O personagem Groot teve todas as suas falas gravadas por Vin Diesel em várias línguas, apesar de só repetir a frase 'Eu sou Groot'."
    },
    {
      "filme": "Tudo em Todo Lugar ao Mesmo Tempo",
      "diretor": "Daniel Kwan, Daniel Scheinert",
      "elencoPrincipal": ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan"],
      "ano": 2022,
      "sinopse": "Uma mulher comum é envolvida em uma aventura multiversal e descobre que pode acessar diferentes versões de si mesma para salvar a existência.",
      "generos": ["Comédia", "Drama", "Ficção Científica"],
      "plataformasStreaming": ["Amazon Prime Video", "Apple TV+"],
      "premios": ["7 Oscars (2023), incluindo Melhor Filme"],
      "curiosidades": "O filme foi filmado com um orçamento relativamente baixo, e os efeitos visuais foram feitos por uma equipe pequena."
    },
    {
      "filme": "Donnie Darko",
      "diretor": "Richard Kelly",
      "elencoPrincipal": ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore"],
      "ano": 2001,
      "sinopse": "Um adolescente perturbado começa a ter visões de um coelho sinistro que o avisa sobre o fim do mundo.",
      "generos": ["Drama", "Ficção Científica"],
      "plataformasStreaming": ["HBO Max", "Amazon Prime Video"],
      "premios": ["Filme cult, várias indicações em festivais independentes"],
      "curiosidades": "Inicialmente, o filme foi um fracasso de bilheteria, mas ganhou status de 'cult' com o tempo, em grande parte devido ao seu lançamento em DVD."
    }
  ]
  