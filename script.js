const horaElemento = document.querySelector('.hora');
const minutoElemento = document.querySelector('.minuto');
const segundoElemento = document.querySelector('.segundo');
const horarioElemento = document.querySelector('.horario');
const dataElemento = document.querySelector('.data');
const btnTemaDarkElemento = document.querySelector('.tema-dark');
const escalaHorario = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

const diasSemana = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado'
];

const mesesAno = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
];

btnTemaDarkElemento.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Tema Dark';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Tema Claro';
    }
});

function setarHorario() {
    const time = new Date();
    const mes = time.getMonth();
    const dia = time.getDay();
    const hora = time.getHours();
    const dataDia = time.getDate();
    const horaParaRelogio = hora % 12;
    const minutos = time.getMinutes();
    const segundos = time.getSeconds();

    horaElemento.style.transform = `translate(-50%, -100%) rotate(${
        escalaHorario(horaParaRelogio, 0, 11, 0, 360)
    }deg)`;

    minutoElemento.style.transform = `translate(-50%, -100%) rotate(${
        escalaHorario(minutos, 0, 59, 0, 360)
    }deg)`;

    segundoElemento.style.transform = `translate(-50%, -100%) rotate(${
        escalaHorario(segundos, 0, 59, 0, 360)
    }deg)`;

    horarioElemento.innerHTML = `${hora}:${minutos < 10 ? `0${minutos}`: minutos}`;

    dataElemento.innerHTML = `${diasSemana[dia]}, ${mesesAno[mes]} <span class='circulo'>${dataDia}</span>`
}

setarHorario();

setInterval(setarHorario, 1000);