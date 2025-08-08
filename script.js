
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
            "ana,"
        ]
 
            },
            {
                texto: "lucas",
                afirmacao:  [
            "lucas,"
        ]
            },
            
            
        ]
    },
    {
        enunciado: "Qual o nome do planeta natal dele(a)?",
        alternativas: [
            {
            texto: "terra",
                afirmacao: [
            "que assim como todos os dias,sempre tem uma rotina a ser seguida,"
                ]
        },
            {
                texto: "saturno",
                afirmacao:[
        "após muito tempo longe de casa, decidiu retornar ao seu planeta natal,"
                ]       
    },
        ]
    },
    {
        enunciado: "o que ele(a) é?",
        alternativas: [
            {
                texto:"aventureiro",
                afirmacao: [
                    "apesar das inumeras aventuras,nunca se esqueceu da tranquilida que sentia antes de começar a jornada,"
                ]
                },
            {
                texto:" humano trabalhador",
                afirmacao:[ 
                    "eu me dedico ao maximo no meu trabalho, sempre mostrando resultados,"
                ]
                },
            
        ]
    },
         {
        enunciado: "como era o dia?",
        alternativas: [
            {
                texto:"os dias era tranquilos",
                afirmacao:[ 
                    "nos dias quentes ou frios sempre procura relaxar idependente da situação"
                ]
                },
            {
                texto:"sempre tinha algo novo para fazer",
                afirmacao:[
                    "não conseguia ficar um dia sequer parado,só de pensar que ainda existe tantas coisas para fazer. "
                ]
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
    caixaPerguntas.textContent = "Era uma vez...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ";;;;"; 
}

mostraPergunta();