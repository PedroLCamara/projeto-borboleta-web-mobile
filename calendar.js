const containerData = document.querySelector('.container-data-info');

const dataFrom = containerData.querySelector('.data-from')
const dataTo = containerData.querySelector('.data-to')

const dayInMiliseconds = 1000 * 60 * 60 * 24;
const currDate = new Date();
const currDayOfWeek = currDate.getDay();

let initDate = new Date(currDate.getTime() - (currDayOfWeek * dayInMiliseconds) );
let endDate = new Date(initDate.getTime() + (6 * dayInMiliseconds));

function setDateViz(increment = 0) {
    const dateFromTxt = document.querySelector('.date-from')
    const dateToTxt = document.querySelector('.date-to')

    initDate.setTime(initDate.getTime() + (7 * dayInMiliseconds * increment))
    endDate.setTime(endDate.getTime() + (7 * dayInMiliseconds * increment))

    dateFromTxt.innerText = initDate.getDate() + 
    '/' + (initDate.getMonth() + 1) + '/' +
    (initDate.getFullYear()) 
    
    dateToTxt.innerText = endDate.getDate() + 
    '/' + (endDate.getMonth() + 1) + '/' +
    (endDate.getFullYear()) 

    const dataItems = document.querySelectorAll('.container-data-items .ditem');
    const weekPt = [
        'Domingo',
        'Segunda-feira',
        'Terça-feira',
        'Quarta-feira',
        'Quinta-feira',
        'Sexta-feira',
        'Sábado',
    ]

    let i = 0;
    for (const dateItem of dataItems) {
        const rect = dateItem.querySelector('.ditems-rect')
        rect.innerHTML = null;

        const tempDate = new Date(initDate.getTime() + (dayInMiliseconds * i));
        const tempDateStr = tempDate.getDate() + 
        '/' + (tempDate.getMonth() + 1) + '/' +
        (tempDate.getFullYear());
        const tempDateWeekStr = weekPt[i];
        const textParagraph = document.createElement('p')
        textParagraph.innerText = `Aqui ficarão os dados de agendamentos para o dia ${tempDateStr} (${tempDateWeekStr})`;
        
        rect.appendChild(textParagraph)
        
        i++;
    }
}

setDateViz()

const prevDateBtn = document.querySelector('.prev-date-btn');
const nextDateBtn = document.querySelector('.next-date-btn');

prevDateBtn.addEventListener('click', () => setDateViz(-1));
nextDateBtn.addEventListener('click', () => setDateViz(1));