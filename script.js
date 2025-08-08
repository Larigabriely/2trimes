
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Qual será o nome do personagem?",
        alternativas: [
            {
                texto: "ana",
                afirmacao: [
            "ana"
        ]
 
            },
            {
                texto: "lucas",
                afirmacao:  [
            "lucas"
        ]
            }         
            
        ]
    },
    {
        enunciado: "Qual o nome do planeta natal dele(a)?",
        alternativas: [
            {
            texto: "terra",
                afirmacao:"esta sabendo muito"
            },
            {
                texto: "saturno",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "o que ele(a) é?",
        alternativas: [
            {
                texto:"aventureiro",
                afirmacao:"afirmacao"
            },
            {
                texto:" humano trabalhador",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "como era o dia?",
        alternativas: [
            {
                texto:"os dias era triquilos",
                afirmacao:"afirmacao"
            },
            {
                texto:"sempre tinha algo novo para fazer",
                afirmacao:"afirmacao"
            }
            
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();