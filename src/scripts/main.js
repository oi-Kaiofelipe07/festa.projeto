AOS.init();

const dataEvento = new Date("Dec 17, 2030 20:00:00")
const timeDoEvento = dataEvento.getTime();

const contaAshora = setInterval(function() {
    const agora = new Date();
    const timeAtual = agora.getTime();

    const diferenca = timeDoEvento - timeAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoasEmMs = 1000 * 60;
    const segundosEmMs = 1000

    const diasAteEvento = Math.floor(diferenca / diaEmMs);
    const horasAteEvento = Math.floor((diferenca % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((diferenca % horaEmMs) / minutoasEmMs);
    const segundosAteEvento = Math.floor((diferenca % minutoasEmMs) / segundosEmMs);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (diferenca < 0) {
        clearInterval(contaAshora);
        document.getElementById('contador').innerHTML = 'Que pena, Você perdeu o evento';
    }
}, 1000)