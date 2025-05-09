const botao = document.querySelector("#executa")

const getValue = seletorDom => document.querySelector(seletorDom).value

/
 * @param {*} lista - array de palavras
 * @returns um array de palavras invertidas
 */
const inverte = lista => {
    for(let indice =0; indice< lista.length ; indice++) {
        let palavraInvertida = ""
        for(let j=lista[indice].length-1; j>=0;j--) {
            palavraInvertida += lista[indice][j]
        }
        lista[indice] = palavraInvertida
    }
    return lista
}

const imprimir = (lista,seletor) =>{
    for(let i = 0; i<lista.length;i++) {
        document.querySelector(seletor).innerHTML += lista[i] + " "
    }
}
const questao1 = () => {
   
    let listaFrase = getValue("#frase").split(" ")
    let listaFraseInvertida = inverte(listaFrase)
    
    imprimir(listaFraseInvertida,"#resultado1")
}



botao.addEventListener("click", questao1)



