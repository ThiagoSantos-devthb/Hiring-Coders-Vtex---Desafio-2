# Desafio 2 Bootcamp Hiring Coders - Gama Academy-VTEX
## O desafio consiste em criar um inventário de um e-commerce e salvar os dados no localstorage

https://gallant-mccarthy-1aebe7.netlify.app

## Técnologias
Para esse projeto foram usados Javascript, CSS e Html.

## Descrição
Consiste uma pagina de produtos, que ao adicionar os produtos ao carrinho realiza calculo de subtotal e total, ao pressionar finalizar os dados são gravados no localstorage.

## Funcionamento
 No javascript foi declarado dois arrays, um array objeto cliente, e outro array de objetos produtos.
 ```sh
const cliente = [
    {
        nome: "Thiago Santos",
        cpf: "222.333.444-56",
        endereço: "Rua Maria Monteiro, n.200 - Campinas-SP",
        email: "thiSANTOS@gmail.com",
    }
]

const items = [
    {
        id: 0,
        nome: "Bebedouro elétrico - Fonte",
        img: "images/bebedouro.jpg",
        valor: 127.95,
        quantidade: 0

    },
    {
        id: 1,
        nome: "Cama cachorro e gato - MDF",
        img: "images/caminha.jpg",
        valor: 89.89,
        quantidade: 0

    },
    {
        id: 2,
        nome: "Camiseta Dog Love - kit ",
        img: "images/camiseta.jpg",
        valor: 51.95,
        quantidade: 0

    },
    {
        id: 3,
        nome: "Comedouro e bebedouro ",
        img: "images/comedouro.webp",
        valor: 49.99,
        quantidade: 0

    },
    {
        id: 4,
        nome: "Criado mudo e caminha",
        img: "images/criadoMudo.webp",
        valor: 99.85,
        quantidade: 0

    },
    {
        id: 5,
        nome: "Hidratante - Pet Clean",
        img: "images/Hidratante.jpg",
        valor: 17.75,
        quantidade: 0

    },
    {
        id: 6,
        nome: "Oculos Pet Love ",
        img: "images/oculos.webp",
        valor: 35.99,
        quantidade: 0

    },
    {
        id: 7,
        nome: "Tapete Higiénico - 30uni",
        img: "images/tapete.jpg",
        valor: 79.85,
        quantidade: 0

    }
]
```
Para inicializar a loja foi criado uma função que aponta para um div, o array produtos foi adicionado ao um mapa e atraves dele requisitado cada produto e com o innerHtml renderizado na div selecionada.

```sh
inicializarLoja = () => {
    var containerProdutos = document.getElementById('produtos');
    items.map((val) => {
        containerProdutos.innerHTML +=

            `
       <div class="col-4">
         <img src="`+ val.img + `"/>
          <h4>`+ val.nome + `</h4>
          <div class="rating">
          </div>
          <p>R$`+ val.valor + `</p>
          <a key="`+ val.id + `" href="#">Adicionar ao carrinho</a>
        </div>
        
       `;

    })
}
```
![Produtos](https://github.com/ThiagoSantos-devthb/Hiring-Coders-Vtex---Desafio-2/blob/main/images/produtos.png)

Foi criado uma função para varrer os produtos e verificar qual foi pressioando o botao adicionar ao carrinho. Quando pressionado pega a key do produto e incrementa no item quantidade.


```sh

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        items[key].quantidade++;

        atualizarCarrinho();

    });
}

```
Uma função atualiza carrinho, verifica se a quantidade do produto é maior que zero , e novamente adiciona ao um mapa e renderiza o carrinho de compras na div selecionada.

```sh
atualizarCarrinho = () => {
    let cart = [];

    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val) => {
        if (val.quantidade > 0) {
            let nomeProd = val.nome;
            let quantidadeProd = val.quantidade;
            let valorProd = val.valor;
            const itemCart = { nomeProd, quantidadeProd, valorProd };
            let somaItem = (val.quantidade * val.valor);
            cart.push(itemCart);
            containerCarrinho.innerHTML += `
                <tr>
                 <td>
                 <div class="cart-info">
                   <img src=`+ val.img + ` alt="" />
                   <div>
                     <p>`+ val.nome + `</p>
                     <small>Price: R$`+ val.valor + `</small>
                     <br />
                     <a key="`+ val.id + `" href="javascript:remove();">Remove</a>
                   </div>
                 </div>
               </td >
               <td><input type="nunber" value="`+ val.quantidade + `" /></td>
               <td>R$`+ somaItem.toFixed('2') + `</td>
               </tr>
           
           `;

        }
    })

```
um array itemsCart responsavel por receber os itens do carrinho para efeito de calculos e posteriormente adicionar ao localstoage.
```sh
let nomeProd = val.nome;
            let quantidadeProd = val.quantidade;
            let valorProd = val.valor;
            const itemCart = { nomeProd, quantidadeProd, valorProd };
            let somaItem = (val.quantidade * val.valor);
            cart.push(itemCart);
```
Aqui faz a soma do subtotal.
```sh
 let somaItem = (val.quantidade * val.valor);
```
e adicionado no html.
```sh
<td>R$`+ somaItem.toFixed('2') + `</td>
```
um for varre o array cart que contem todos os itens do carrinho e faz a soma de todos os itens e retorna o valor total.
```sh
 let listSoma = [];
    for (i in cart) {

        listSoma.push(cart[i].quantidadeProd * cart[i].valorProd);
    }
    const total = listSoma.reduce((total, currentElement) => total + currentElement);

```
aqui a soma total de todos os produtos.
```sh
    var soma = document.getElementById('total');
    soma.innerHTML = "";
    soma.innerHTML +=
        `<td>Total</td>
        <td >R$`+ total + `</td>
        `;
```
![Carrinho](https://github.com/ThiagoSantos-devthb/Hiring-Coders-Vtex---Desafio-2/blob/main/images/carrinho.png)

Uma função enviaPedido pega o objeto cliente e o carrinho de compras e adiciona ao finalizaCart
```sh
enviaPedido = () => {
    let finalizaCart = [];

    finalizaCart.push(cliente, Finalcart);
    if (Finalcart.length !== 0) {
        localStorage.setItem('cart', JSON.stringify(finalizaCart));
        alert("Compra finalizada!");
    }
}
```
pressionar o botão finalizar  e o carrinho possuir pelo menos um item será adicionado ao localstorage.
```sh
if (Finalcart.length !== 0) {
        localStorage.setItem('cart', JSON.stringify(finalizaCart));
        alert("Compra finalizada!");
```
No Html foi adicionado a função enviarPedido no Onclick.
```sh
  <input id="botao" type="button" onclick="enviaPedido()" value="Finalizar">
```
 
