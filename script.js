// ARRAY: Armazena os alunos cadastrados
let alunos = [
    { nome: "Gustavo", nota: 7.4, frequencia: 80},
    { nome: "Mateus", nota: 3.2, frequencia: 70},
    { nome: "Renata", nota: 8.6, frequencia: 55}
];


// FUNÇÃO: Cadastrar um novo aluno
function cadastrarAluno() 
{
    let nome = document.getElementById("nome").value;
    let nota = Number(document.getElementById("nota").value);
    let frequencia = Number(document.getElementById("frequencia").value);

    // CONDICIONAL: Verifica os dados
    if (nome === "" || document.getElementById("nota").value === "" ||
        nota < 0 || nota > 10 || 
        document.getElementById("frequencia").value === "" ||
        frequencia < 0 || frequencia > 100)

        {

        alert("⚠️​ É necessário preencher todos os campos antes de inserir os dados na tabela");

        } 
    else 
        {

        // ARRAY: Adiciona o aluno
        alunos.push(
        {
            nome: nome,
            nota: nota,
            frequencia: frequencia
        });

        alert("​✨ Cadastro realizado com sucesso! ​🎉");

        document.getElementById("nome").value = "";
        document.getElementById("nota").value = "";
        document.getElementById("frequencia").value="";

        listarAlunos();
    }
}


// FUNÇÃO: Exibir os alunos na tabela
function listarAlunos() 
{

    let tabela = document.getElementById("listaAlunos");

    tabela.innerHTML = "";

    // LAÇO DE REPETIÇÃO: Percorre o array
    for (let i = 0; i < alunos.length; i++) 
    {

        let situacao = "";

        // CONDICIONAL: Verifica a aprovação
        if (alunos[i].nota >= 7 && alunos[i].frequencia >=75) 
            {

            situacao = "Aprovado";

            } 
        else 
            {

            situacao = "Reprovado";
            }



        // Adiciona os dados na tabela
        tabela.innerHTML += `
            <tr>
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].nota}</td>
                <td>${alunos[i].frequencia}%</td>
                <td class="${situacao === "Aprovado" ? "aprovado" : "reprovado"}">
                    ${situacao}
                </td>
            </tr>
        `;
    }
}


// 1. Função para calcular a média
function calcularMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i].nota;
    }
    return soma / alunos.length;
}

// 1. Função para calcular a MAIOR nota
function calcularMaiorNota(alunos) {
    let maior = alunos[0].nota;

    for (let i = 0; i < alunos.length; i++) {
        let notaAtual = alunos[i].nota;

        if (notaAtual > maior) {
            maior = notaAtual;
        }
    }

    return maior;
}

// 1. Função para calcular a MENOR nota
function calcularMenorNota(alunos) {
    let menor = alunos[0].nota;

    for (let i = 0; i < alunos.length; i++) {
        let notaAtual = alunos[i].nota;

        if (notaAtual < menor) {
            menor = notaAtual;
        }
    }

    return menor;
}

// 2. A função principal que o botão "Ver Resultados" chama
function calcularResultados() {
    let aprovados = 0;
    let reprovados = 0;

    // LAÇO: Percorre todos os alunos para contar aprovados/reprovados
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 7 && alunos[i].frequencia >= 75) {
            aprovados++;
        } else {
            reprovados++;
        }
    }

    // Chama as funções de cálculo
    let mediaFinal = calcularMedia(alunos);
    let maiorNota = calcularMaiorNota(alunos);
    let menorNota = calcularMenorNota(alunos);

    // Exibe tudo na tela (incluindo maior e menor nota)
    document.getElementById("resultado").innerHTML = 
        "Aprovados: " + aprovados + 
        " | Reprovados: " + reprovados + 
        " | Média da Turma: " + mediaFinal.toFixed(2) + 
        " | Maior Nota: " + maiorNota + 
        " | Menor Nota: " + menorNota;
}
// Executa a função ao abrir a página
listarAlunos();