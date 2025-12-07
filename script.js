// 1. Створити об’єкт Date: 20 лютого 2021, 03:12
const myDate = new Date(2021, 1, 20, 3, 12); // місяць 1 = лютий
document.getElementById('dateOutput').textContent = `Дата: ${myDate}`;

// 2. День тижня
function getWeekDay(date) {
    const days = ['НД','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
    return days[date.getDay()];
}
document.getElementById('weekDayOutput').textContent = `День тижня: ${getWeekDay(myDate)}`;

// 3. Останній день місяця
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
document.getElementById('lastDayOutput').textContent = 
    `Останній день лютого 2021: ${getLastDayOfMonth(2021, 1)}`;

// 4. Секунди до завтра
function getSecondsToTomorrow() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
}
document.getElementById('secondsTomorrowOutput').textContent = 
    `Секунд до завтра: ${getSecondsToTomorrow()}`;

// 5. Форматування дати
function formatDate(date) {
    const diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо зараз';
    }
    const sec = Math.floor(diff / 1000);
    if (sec < 60) {
        return `${sec} сек. назад`;
    }
    const min = Math.floor(diff / 60000);
    if (min < 60) {
        return `${min} хв. назад`;
    }

    const d = date;
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = String(d.getFullYear()).slice(-2);
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// Тестуємо formatDate()
const testDate = new Date(new Date() - 45000); // 45 секунд тому
document.getElementById('formatDateOutput').textContent = 
    `Форматована дата: ${formatDate(testDate)}`;
