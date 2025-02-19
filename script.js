/*
Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, 
adicione um título simples ao site com o id 'titulo', e um elemento que represente 
um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. 
Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. 
Procure usar o método simples e o método complexo, ensinados neste tópico.
*/

// Array de conteudo dos cards 
const ferramentasArray = [
    {
        titulo: "Chave Phillips",
        img: "_imagens/chave-phillips.png",
        descricao: "A chave Philips é modelo constituído por uma cabeça com ponta. Ela permite apertar ou afrouxar os parafusos de equipamentos eletrônicos e outros objetos que tenham como parafuso o formato cruzado."
    },
    {
        titulo: "Chave de Fenda",
        img: "_imagens/chave-de-fenda.png",
        descricao: "Uma das chaves manuais mais tradicionais e funcionais, está presente na maioria das caixas de ferramentas. Ela pode ser encontrada em tamanhos diferenciados, dependendo apenas do tamanho do parafuso em que ela será utilizada."
    },
    {
        titulo: "Chave de Teste",
        img: "_imagens/chave-de-teste.png",
        descricao: "Muito utilizada pelos eletricistas, a chave de teste possui um formato e finalidades bem diferentes das demais chaves já apresentadas aqui. Ela não serve para apertar ou afrouxar, mas para se constatar se existe alguma corrente elétrica passando em tomadas e fios."
    },
    {
        titulo: "Chave Allen",
        img: "_imagens/chave-allen.png",
        descricao: "A chave Allen possui um formato diferente. Ela é uma haste em metal no formato em L, vendida em um conjunto com diferentes tamanhos. Com um formato sextavado, a Allen é muito utilizada na indústria automobilística."
    },
    {
        titulo: "Chave de Boca",
        img: "_imagens/chave-de-boca.png",
        descricao: "Também conhecida como chave fixa, esse é mais um dos tipos de chaves que podem ser compradas em conjuntos de diferentes tamanhos ou de maneira separada. A chave de boca pode apertar, afrouxar parafusos e porcas, com formatos quadrados ou sextavados."
    },
    {
        titulo: "Chave de Combinada",
        img: "_imagens/chave-combinada.png",
        descricao: "A chave combinada une o melhor dos dois mundos em uma única ferramenta. Em uma extremidade, temos uma chave estrela e na outra a chave fixa."
    },
    {
        titulo: "Chave Estrela",
        img: "_imagens/chave-estrela.png",
        descricao: "O modelo de chave estrela possui muita similaridade com a chave de boca por que ela também possui duas extremidades com aberturas de diferentes tamanhos. Além de serem vendidas em jogo ou separadas, em tamanhos diferentes conforme a necessidade de uso."
    },
    {
        titulo: "Chave de Inglesa",
        img: "_imagens/chave-inglesa.png",
        descricao: "Com a chave inglesa, o usuário pode aplicar torque para girar porcas e parafusos sextavados ou quadrados de tamanhos diferentes. Pois, ela possui uma pequena regulagem, onde é possível deixar maior ou menor o espaço de encaixe."
    }
];


// Criando um titulo para a pagina
let tituloPagina = document.createElement("h1");

// Definindo ID ao titulo
tituloPagina.id = "titulo_pagina";

// Definindo texto do titulo
tituloPagina.innerText = "Tipos de Chaves";

// Adicionado titulo a pagina
let body = document.querySelector("body");
body.appendChild(tituloPagina);

// Adicionar texto inicial
let texto_inicial = document.createElement("div");
texto_inicial.id = "texto_inicial"
texto_inicial.innerHTML = `
<p class="textos">Os tipos de chaves manuais são ferramentas essenciais para o cotidiano das demandas domésticas ou 
como prestador de serviços. Assim, elas são indispensáveis na maleta de ferramentas, servindo para 
reparos e manutenções diversas, seja para apertar um parafuso ou auxiliar na troca do pneu do carro 
e outras finalidades.</p><br>

<p class="textos">Mais do que saber que elas são necessárias, é preciso entender quais são elas e suas funcionalidades, 
para escolher a chave correta para o tipo de serviço que você vai realizar. Neste conteúdo, vou mostrar 
os diferentes tipos e aplicações das chaves manuais. Continue na página e confira!</p>
`;
body.appendChild(texto_inicial);

// Criando divisão para os cards
let conteiner_cards = document.createElement("div");
conteiner_cards.classList.add("conteiner_cards");
body.appendChild(conteiner_cards);

for (let c = 0; c < ferramentasArray.length; c++) {

    // Criando cards
    let card = document.createElement("div");
    card.classList.add("cards_ferramentas");
    conteiner_cards.appendChild(card);

    // Titulo do card
    let titulo_card = document.createElement("h1");
    titulo_card.classList.add("cards_title");
    titulo_card.innerText = ferramentasArray[c].titulo;
    card.appendChild(titulo_card);

    // Imagem do card
    let img_card = document.createElement("img");
    img_card.classList.add("cards_img");
    img_card.src = ferramentasArray[c].img;
    card.appendChild(img_card);

    // Descrição do card
    let descricao_card = document.createElement("p");
    descricao_card.classList.add("cards_p");
    descricao_card.innerText = ferramentasArray[c].descricao;
    card.appendChild(descricao_card);
}