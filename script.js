const caixaInicio = document.querySelector(".caixa-inicio");
const conteudoQuiz = document.querySelector(".conteudo-quiz");
const botaoIniciar = document.querySelector(".botao-iniciar");

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".botao-jogar-novamente");

const perguntas = [
    {
        enunciado: "Você acabou de adotar um felino e precisa decidir como será a rotina de acesso à rua. Como você organiza o ambiente da casa?",
        alternativas: [
            {
                texto: "Instala telas de proteção em todas as janelas e mantém o gato exclusivamente dentro de casa por segurança.",
                afirmacao: "Priorizou a segurança e a prevenção de acidentes mantendo o gato em ambiente interno."
            },
            {
                texto: "Deixa o gato com livre acesso ao quintal e à rua para que ele explore a vizinhança livremente.",
                afirmacao: "Valorizou a liberdade total do felino para explorar o ambiente externo."
            }          
        ]
    },
    {
        enunciado: "Seu gato começou a arranhar o sofá da sala com frequência. Qual medida você toma para resolver a situação?",
        alternativas: [
            {
                texto: "Espalha arranhadores de diferentes materiais e texturas perto dos móveis e recompensa o gato quando ele os usa.",
                afirmacao: "Usou o reforço positivo para redirecionar o comportamento natural de arranhar."
            },
            {
                texto: "Usa borrifadores de água ou sons altos toda vez que pega o gato arranhando o sofá.",
                afirmacao: "Optou por métodos de repulsão imediata para afastar o gato dos móveis."
            }
        ]
    },
    {
        enunciado: "Na hora de escolher a alimentação diária do seu felino, qual tipo de dieta você decide oferecer?",
        alternativas: [
            {
                texto: "Combina ração seca de alta qualidade com saches de comida úmida diariamente para ajudar na hidratação.",
                afirmacao: "Focou na saúde renal do felino aumentando a ingestão diária de água pela alimentação."
            },
            {
                texto: "Oferece exclusivamente ração seca pela praticidade no dia a dia e manutenção da higiene bucal.",
                afirmacao: "Apostou na praticidade e consistência da ração seca na dieta diária."
            }
        ]
    },
    {
        enunciado: "Ao planejar uma viagem de férias de uma semana, como você organiza os cuidados com o seu gato?",
        alternativas: [
            {
                texto: "Contrata um cat sitter (cuidador de gatos) para visitar sua casa diariamente, mantendo o gato em seu próprio território.",
                afirmacao: "Evitou o estresse do felino mantendo-o no seu ambiente familiar durante sua ausência."
            },
            {
                texto: "Leva o gato para se hospedar em um hotelzinho especializado para animais durante o período.",
                afirmacao: "Preferiu a supervisão presencial contínua 24 horas por dia em um local fechado."
            }
        ]
    },
    {
        enunciado: "Chegou o momento da consulta veterinária de rotina, mas o seu gato fica muito estressado ao ver a caixa de transporte. Como você age?",
        alternativas: [
            {
                texto: "Deixa a caixa aberta na sala dias antes com mantas e petiscos para que o gato se acostume com ela gradualmente.",
                afirmacao: "Trabalhou a dessensibilização do animal com antecedência para reduzir o estresse."
            },
            {
                texto: "Coloca o gato na caixa rapidamente no momento de sair para resolver a situação sem prolongar a espera.",
                afirmacao: "Optou por uma ação rápida e direta para não perder a consulta agendada."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener("click", () => {
    caixaInicio.classList.add("escondido");
    conteudoQuiz.classList.remove("escondido");
    caixaResultado.classList.add("escondido");
    caixaPerguntas.classList.remove("escondido");
    caixaAlternativas.classList.remove("escondido");
    
    atual = 0;
    historiaFinal = "";
    
    mostraPergunta();
});

botaoJogarNovamente.addEventListener("click", () => {
    conteudoQuiz.classList.add("escondido");
    caixaResultado.classList.add("escondido");
    caixaInicio.classList.remove("escondido");
    
    atual = 0;
    historiaFinal = "";
    caixaAlternativas.innerHTML = "";
});

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    // Esconde o enunciado e limpa/esconde as alternativas
    caixaPerguntas.classList.add("escondido");
    caixaAlternativas.textContent = "";
    caixaAlternativas.classList.add("escondido");
    
    // Exibe o bloco de resultado final com o botão de jogar novamente
    caixaResultado.classList.remove("escondido");
    textoResultado.textContent = "Resumo do seu perfil de tutor: " + historiaFinal;
}