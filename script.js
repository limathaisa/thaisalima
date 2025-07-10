const catalogo = document.getElementById("catalogo");
// Exemplo AJAX

        const cepIpt = document.querySelector("#cep")
        function carregaEndereco(){
            if(this.readyState == 4 && this.status == 200) {
                const resposta = JSON.parse(this.responseText)
                console.log("Resposta está pronta e está ok")
                console.log(resposta);
                //carregando a resposta no DOM
                const enderecoDiv = document.querySelector("#catalogo")
                catalogoDiv.innerHTML = resposta.logradouro      
            }
        }
        cepIpt.addEventListener("change", () => {
            let filmeDesejado = cepIpt.value
            let url = `https://viacep.com.br/ws/${filmeDesejado}/json/`
            //criar o objeto XMLHTTPRequest
            const objetoHTTPRequest = new XMLHttpRequest()
            //Configurar a requisição
            objetoHTTPRequest.open("GET", url)
            //Enviar a requisição
            objetoHTTPRequest.send()
            //Esperar a resposta ficar pronta
            objetoHTTPRequest.onreadystatechange = carregaEndereco
           
        })  
  

 




function carregarFilmes() {
  fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json")
    .then(res => res.json())
    .then(data => {
      console.log(data); 
      data.forEach(filme => {
        criarCardFilme(filme);
      });
    })
    .catch(erro => console.error("Erro ao carregar os filmes:", erro));
}

function faixaEtariaClasse(idade) {
  if (idade <= 14) return 'verde';
  if (idade < 18) return 'amarelo';
  return 'vermelho';
}

function criarCardFilme(filme) {
  const div = document.createElement("div");
  div.classList.add("filme");

  div.innerHTML = `
    <img src="${filme.figura}" alt="${filme.titulo}">
    <div class="conteudo">
      <span class="classificacao ${faixaEtariaClasse(filme.classificacao)}">
        ${filme.classificacao} anos
      </span>
      <h2>${filme.titulo}</h2>
      <p>${filme.resumo}</p>
      <p><strong>Gêneros:</strong> ${filme.generos.join(", ")}</p>
      <p><strong>Elenco:</strong> ${filme.elenco.join(", ")}</p>
      <p><strong>Opiniões:</strong></p>
      <ul>
        ${filme.opinioes.map(op => `<li>${op.descricao} - Nota: ${op.nota}</li>`).join("")}
      </ul>
    </div>
  `;
  
  catalogo.appendChild(div);
}

carregarFilmes();
