
// recuperar a UL no DOM

const ulReceitas = document.querySelector("#receitasLista")

ulReceitas.forEach(elemento => {
    
});(elemento=>{
    console.log(elemento.nome)
// criar um LI acrecestando os dados da receita atual
const liobj = document.createElement("li")
liobj.textContent = elemento.nome
// adicionar p noo li na ul

ulReceitas.appendChild(liobj);
const descricao = document.createElement("p");
descricao.textContent = elemento.descricao
liobj.appendChild(descricao)

const figura = document.createElement("img")
figura.src = elemento.foto
liobj.appendChild(figura)

const ingrediente = document.createElement("ul")
elemento.ingrediente.forEach((item)=>{
    const ingrediente = document.createElement("li")
    ingrediente.textContent = item;
    ulReceitas.appendChild(ingrediente);
    ingrediente.appendChild(ingrediente);
});

const preparar = document.createElement("ol")
elemento.preparar.forEach ((item) => {

    const passo = document.createElement("li")
    passo.textContent = item 
    ulReceitas.appendChild(preparar);
    preparar.appendChild(passo);
});
})