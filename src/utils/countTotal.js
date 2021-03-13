import moment from 'moment';

export default class CounTotal {
    constructor() {
        this.currentDate = moment(Date.now()).format('YYYY-MM-DD');
        this.date = new Date();
        // this.currentWeekDay = date.getDay() !== 0 ? date.getDay() : 7;
        // this.prevDate = moment()
        //     .subtract(currentWeekDay - 1, 'days')
        //     .format('YYYY-MM-DD');
        // console.log('prevDate :', prevDate);
        // console.log('currentWeekDay :', currentWeekDay);
        // console.log('week', moment(currentDate, 'YYY-MM-DD').isoWeek());
    }

    countDayTotal(data) {
        return data
            .filter(item => item.date === this.currentDate)
            .reduce((acc, item) => acc + Number(item.total), 0);
    }

    countWeekTotal(data) {
        return data
            .filter(
                item =>
                    moment(item.date).format('YYYY') ===
                        moment(this.date).format('YYYY') &&
                    moment(item.date, 'YYY-MM-DD').isoWeek() ===
                        moment(this.currentDate, 'YYY-MM-DD').isoWeek(),
            )
            .reduce((acc, item) => acc + Number(item.total), 0);
    }

    countMounthTotal(data) {
        return data
            .filter(
                item =>
                    moment(item.date).format('YYYY-MM') ===
                    moment(this.date).format('YYYY-MM'),
            )
            .reduce((acc, item) => acc + Number(item.total), 0);
    }
}
