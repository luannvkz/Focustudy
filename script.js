function mostrarSenhaLogin(){

let senha =
document.getElementById(
"senhaLogin"
);

if(senha.type === "password"){
senha.type = "text";
}
else{
senha.type = "password";
}

}

function entrarLogin(){

let email =
document.getElementById(
"emailLogin"
).value;

let senha =
document.getElementById(
"senhaLogin"
).value;

if(email === "" || senha === ""){

alert(
"Preencha todos os campos."
);

return;
}

window.location.href =
"index.html";

}

function mostrarSenhaCadastro(){

let senha =
document.getElementById(
"senhaCadastro"
);

let confirmar =
document.getElementById(
"confirmarSenha"
);

if(senha.type === "password"){

senha.type = "text";
confirmar.type = "text";

}
else{

senha.type = "password";
confirmar.type = "password";

}

}

function criarConta(){

let nome =
document.getElementById(
"nomeCadastro"
).value;

let email =
document.getElementById(
"emailCadastro"
).value;

let senha =
document.getElementById(
"senhaCadastro"
).value;

let confirmar =
document.getElementById(
"confirmarSenha"
).value;

if(
nome === "" ||
email === "" ||
senha === "" ||
confirmar === ""
){

alert(
"Preencha todos os campos."
);

return;
}

if(senha !== confirmar){

alert(
"As senhas não coincidem."
);

return;
}

alert(
"Conta criada com sucesso!"
);

window.location.href =
"index.html";

}

function rolarProdutos(){

document.getElementById(
"produtos"
).scrollIntoView({
behavior:"smooth"
});

}

let links =
document.querySelectorAll(
".header5 a"
);

links.forEach(function(link){

link.addEventListener(
"mouseenter",
function(){

link.style.transform =
"translateY(-2px)";

}
);

link.addEventListener(
"mouseleave",
function(){

link.style.transform =
"translateY(0px)";

}
);

});

const modelos =
document.querySelectorAll(".modelo");

modelos.forEach(modelo => {

modelo.addEventListener(
"click",
function(){

modelos.forEach(item =>
item.classList.remove("ativo")
);

this.classList.add("ativo");

});

});

// script.js

console.log("FocusStudy carregado");

/* SCRIPT.JS */

/* ===== ADICIONAR AO CARRINHO NOS VISUALIZADORES ===== */

function adicionarCarrinho(produto){

    let carrinho =
    JSON.parse(localStorage.getItem("carrinho"));

    if(!carrinho){

        carrinho = produto;

        localStorage.setItem(
            "carrinho",
            JSON.stringify(carrinho)
        );

        window.location.href =
        "carrinho.html";

        return;
    }

    if(carrinho.nome !== produto.nome){

        alert(
        "Você já possui outro produto no carrinho. Remova-o antes de adicionar outro."
        );

        return;
    }

    carrinho.quantidade++;

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    window.location.href =
    "carrinho.html";
}


/* ===== RENDERIZA O CARRINHO ===== */

function renderizarCarrinho(){

    const produto =
    JSON.parse(
    localStorage.getItem("carrinho")
    );

    const area =
    document.getElementById(
    "produtoCarrinho"
    );

if(!area) return;

if(!produto){

    area.innerHTML =

    `
    <p class="carVazio">

    Você ainda não tem produtos no carrinho

    </p>
    `;

    document.getElementById(
    "subtotal"
    ).innerText =
    "R$0,00";

    document.getElementById(
    "total"
    ).innerText =
    "R$0,00";

    return;
}
    atualizarTotal();

    area.innerHTML =

    `
    <div class="car7">

        <div class="car8">

            <img
            src="${produto.imagem}"
            class="car9"
            onclick="window.location.href='${produto.link}'">

            <div class="car10">

                <h2>
                ${produto.nome}
                </h2>

                <p>
                R$${produto.preco.toFixed(2)}
                </p>

                <div class="car11">

                    <button
                    class="car12"
                    onclick="removerQuantidade()">

                    −

                    </button>

                    <span class="car13">

                    ${produto.quantidade}

                    </span>

                    <button
                    class="car12"
                    onclick="adicionarQuantidade()">

                    +

                    </button>

                </div>

            </div>

        </div>

        <div class="car14">

        R$
        ${(produto.preco * produto.quantidade)
        .toFixed(2)}

        </div>

    </div>
    `;
}


function adicionarQuantidade(){

    const produto =
    JSON.parse(
    localStorage.getItem("carrinho")
    );

    produto.quantidade++;

    localStorage.setItem(
    "carrinho",
    JSON.stringify(produto)
    );

    renderizarCarrinho();
}


function removerQuantidade(){

    const produto =
    JSON.parse(
    localStorage.getItem("carrinho")
    );

    produto.quantidade--;

    if(produto.quantidade <= 0){

        localStorage.removeItem(
        "carrinho"
        );

        location.reload();

        return;
    }

    localStorage.setItem(
    "carrinho",
    JSON.stringify(produto)
    );

    renderizarCarrinho();
}


function atualizarTotal(){

    const produto =
    JSON.parse(
    localStorage.getItem("carrinho")
    );

    const total =
    produto.preco *
    produto.quantidade;

    document.getElementById(
    "subtotal"
    ).innerText =
    `R$${total.toFixed(2)}`;

    document.getElementById(
    "total"
    ).innerText =
    `R$${total.toFixed(2)}`;
}


function continuarCompra(){

    window.location.href =
    "compradadosvisu.html";
}

renderizarCarrinho();

/* COMPRADADOSVISU */


/* ===== RESUMO AUTOMATICO ===== */

function renderizarResumoDados(){

    const produto =
    JSON.parse(
    localStorage.getItem("carrinho")
    );

    if(!produto) return;

    const area =
    document.getElementById(
    "produtoResumo"
    );

    const total =
    produto.preco *
    produto.quantidade;

    area.innerHTML =

    `
    <div class="dadosProduto">

        <img
        src="${produto.imagem}">

        <div>

            <h3>
            ${produto.nome}
            </h3>

            <p>
            Quantidade:
            ${produto.quantidade}
            </p>

        </div>

    </div>
    `;

    document.getElementById(
    "subtotal"
    ).innerText =
    `R$${total.toFixed(2)}`;

    document.getElementById(
    "total"
    ).innerText =
    `R$${total.toFixed(2)}`;
}


/* ===== MASCARA CPF ===== */

document.addEventListener(
"input",
function(e){

if(e.target.id === "cpf"){

let valor =
e.target.value
.replace(/\D/g,"")
.slice(0,11);

valor =
valor.replace(
/(\d{3})(\d)/,
"$1.$2"
);

valor =
valor.replace(
/(\d{3})(\d)/,
"$1.$2"
);

valor =
valor.replace(
/(\d{3})(\d{1,2})$/,
"$1-$2"
);

e.target.value =
valor;
}

/* DATA */

if(e.target.id === "data"){

let valor =
e.target.value
.replace(/\D/g,"")
.slice(0,8);

valor =
valor.replace(
/(\d{2})(\d)/,
"$1/$2"
);

valor =
valor.replace(
/(\d{2})(\d)/,
"$1/$2"
);

e.target.value =
valor;
}

/* TELEFONE */

if(e.target.id === "telefone"){

let valor =
e.target.value
.replace(/\D/g,"")
.slice(0,11);

valor =
valor.replace(
/(\d{2})(\d)/,
"($1) $2"
);

valor =
valor.replace(
/(\d{5})(\d)/,
"$1-$2"
);

e.target.value =
valor;
}

});


/* ===== VALIDACAO ===== */

function prosseguirPagamento(){

    const form =
    document.getElementById(
    "formularioCompra"
    );

    if(!form.checkValidity()){

        form.reportValidity();

        return;
    }

    window.location.href =
    "finalizar.html";
}

renderizarResumoDados();