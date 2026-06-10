const data = new Date()
console.log(data)

function leftZero(num) {
    return num >= 10 ? num : `0${num}`;
}

function getHour(totalhour) {

    const hour = leftZero(data.getHours());
    const min = leftZero(data.getMinutes());
    const sec = leftZero(data.getSeconds());

    return `${hour}:${min}:${sec}`
}

const hourClock = getHour()
console.log (hourClock)

function getDay(nameDay) {
    let dayweek

    switch (nameDay) {
        case 0:
            dayweek = 'Domingo';
            return dayweek;
        case 1:
            dayweek = 'Segunda';
            return dayweek;
        case 2:
            dayweek = 'Terça';
            return dayweek;
        case 3:
            dayweek = 'Quarta';
            return dayweek;
        case 4:
            dayweek = 'Quinta';
            return dayweek;
        case 5: 
            dayweek = 'Sexta';
            return dayweek;
        case 6:
            dayweek = 'Sábado';
            return dayweek;
    }
}
const weekDay = data.getDay()
console.log(getDay(weekDay))

function getMonth(numberMonth){
    let month 

    switch (numberMonth){
        case 0:
            month = 'Janeiro';
            return month;
        case 1:
            month = 'Fevereiro'
            return month;
        case 2:
            month = 'Março';
            return month;
        case 3:
            month = 'Abril';
            return month; 
        case 4:
            month = 'Maio';
            return month;
        case 5:
            month = 'Junho';
            return month;
        case 6:
            month = 'Julho';
            return month;
        case 7:
            month = 'Agosto';
            return month;
        case 8:
            month = 'Setembro';
            return month;
        case 9:
            month = 'Outubro';
            return month;
        case 10:
            month = 'Novembro';
            return month;
        case 11:
            month = 'Dezembro';
            return month;

    }    
}

const nameMonth = data.getMonth()
console.log(getMonth(nameMonth))

const year = data.getFullYear();
const dayNumber = leftZero(data.getDay());

const text = document.getElementById('clock')


text.innerText = `${hourClock}, ${getDay(weekDay)}, ${dayNumber} de ${getMonth(nameMonth)} de ${year}`



