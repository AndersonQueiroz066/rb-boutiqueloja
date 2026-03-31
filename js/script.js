let carrinho = []
let total = 0

function adicionarCarrinho(nome, preco){
    carrinho.push({nome, preco})
    total += preco
    atualizarCarrinho()
}

function removerDoCarrinho(nome){

    let index = carrinho.findIndex(item => item.nome === nome)

    if(index !== -1){
        total -= carrinho[index].preco
        carrinho.splice(index, 1)
    }

    atualizarCarrinho()
}

function atualizarCarrinho(){

    let lista = document.getElementById("listaCarrinho")
    lista.innerHTML = ""

    carrinho.forEach(item => {

        let li = document.createElement("li")
        li.innerText = item.nome + " - R$ " + item.preco

        lista.appendChild(li)

    })

    document.getElementById("total").innerText = total.toFixed(2)

    // 🔥 CONTADOR
    document.getElementById("contador").innerText = carrinho.length
}

function finalizarPedido(){

    if(carrinho.length === 0){
        document.getElementById('carrinhoVazio').innerHTML = 'Nenhum Pedido adicionado no carrinho.'
        return
    }

    let mensagem = "🛒 *Pedido RB Boutique*%0A%0A"

    carrinho.forEach(item => {
        mensagem += `• ${item.nome} - R$ ${item.preco}%0A`
    })

    mensagem += `%0ATotal: R$ ${total.toFixed(2)}`

    let telefone = "558899087701"

    let url = `https://wa.me/${telefone}?text=${mensagem}`

    window.open(url, "_blank")
}

// 🔥 ABRIR / FECHAR MENU
const icone = document.getElementById("iconeCarrinho");
const menu = document.getElementById("menuCarrinho");

icone.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});