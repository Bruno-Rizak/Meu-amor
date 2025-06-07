// --- CONFIGURAÇÃO DOS CONTADORES PROGRESSIVOS ---

// DEFINA AS DATAS DE INÍCIO AQUI
const dataInicio1 = new Date("Feb 21, 2024 20:10:00").getTime();
const dataInicio2 = new Date("Apr 13, 2024 18:10:00").getTime(); // NOVA DATA
const dataInicio3 = new Date("Sep 14, 2024 16:26:00").getTime(); // NOVA DATA

// Função reutilizável para calcular o tempo
function calcularTempo(tempoPassado) {
    const diasTotal = Math.floor(tempoPassado / (1000 * 60 * 60 * 24));
    const anos = Math.floor(diasTotal / 365);
    const meses = Math.floor((diasTotal % 365) / 30);
    const dias = Math.floor((diasTotal % 365) % 30);
    const horas = Math.floor((tempoPassado % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoPassado % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoPassado % (1000 * 60)) / 1000);
    return { anos, meses, dias, horas, minutos, segundos };
}

// Função para atualizar um contador no HTML
function atualizarDOM(idBase, tempo) {
    document.getElementById(`anos${idBase}`).innerText = tempo.anos || 0;
    document.getElementById(`meses${idBase}`).innerText = tempo.meses || 0;
    document.getElementById(`dias${idBase}`).innerText = tempo.dias || 0;
    document.getElementById(`horas${idBase}`).innerText = tempo.horas || 0;
    document.getElementById(`minutos${idBase}`).innerText = tempo.minutos || 0;
    document.getElementById(`segundos${idBase}`).innerText = tempo.segundos || 0;
}

// Atualiza todos os contadores a cada 1 segundo
const intervalo = setInterval(function() {
    const agora = new Date().getTime();

    // Calcula e atualiza o Contador 1
    const tempoPassado1 = agora - dataInicio1;
    const tempo1 = calcularTempo(tempoPassado1);
    atualizarDOM('1', tempo1);

    // Calcula e atualiza o Contador 2
    const tempoPassado2 = agora - dataInicio2;
    const tempo2 = calcularTempo(tempoPassado2);
    atualizarDOM('2', tempo2);

    // Calcula e atualiza o Contador 3
    const tempoPassado3 = agora - dataInicio3;
    const tempo3 = calcularTempo(tempoPassado3);
    atualizarDOM('3', tempo3);

}, 1000);