function attachEventsListeners() {
    const convert = {
        days: {
            hours: 24,
            minutes: 24 * 60,
            seconds: 24 * 60 * 60
        },
        hours: {
            days: 1/24,
        },
        minutes: {
            days: 1/(24 * 60),
        },
        seconds: {
            days: 1/(24 * 60 * 60),
        }
    };

    function convertTime(value, unit) {
            const in_days = (unit === 'days') ? value : value * convert[unit].days;
            document.getElementById('days').value = in_days;
            document.getElementById('hours').value = in_days * convert.days.hours;
            document.getElementById('minutes').value = in_days * convert.days.minutes;
            document.getElementById('seconds').value = in_days * convert.days.seconds;
    }

    document.getElementById('daysBtn').addEventListener('click', () => convertTime(parseFloat(document.getElementById('days').value), 'days'));
    document.getElementById('hoursBtn').addEventListener('click', () => convertTime(parseFloat(document.getElementById('hours').value), 'hours'));
    document.getElementById('minutesBtn').addEventListener('click', () => convertTime(parseFloat(document.getElementById('minutes').value), 'minutes'));
    document.getElementById('secondsBtn').addEventListener('click', () => convertTime(parseFloat(document.getElementById('seconds').value), 'seconds'));
}