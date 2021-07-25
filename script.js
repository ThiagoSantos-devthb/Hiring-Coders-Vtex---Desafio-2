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



let Finalcart = [];
let finalizaCart = [];



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

inicializarLoja();




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

    let listSoma = [];
    for (i in cart) {

        listSoma.push(cart[i].quantidadeProd * cart[i].valorProd);



    }
    const total = listSoma.reduce((total, currentElement) => total + currentElement);


    var soma = document.getElementById('total');
    soma.innerHTML = "";
    soma.innerHTML +=
        `<td>Total</td>
        <td >R$`+ total + `</td>
        
        `;
    Finalcart = cart;



}

enviaPedido = () => {
    let finalizaCart = [];

    finalizaCart.push(cliente, Finalcart);
    if (Finalcart.length !== 0) {
        localStorage.setItem('cart', JSON.stringify(finalizaCart));
        alert("Compra finalizada!");


    }

}
remove = () => {

    alert('removido');
}


var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let key = this.getAttribute('key');
        items[key].quantidade++;

        atualizarCarrinho();

    });
}


