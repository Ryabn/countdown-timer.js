'use strict';

class cdtimer{
    constructor(div, date){
        this.div = div;
        this.finish = new Date(date);
        this.init();
        /**
         * Using arrow function here bypasses weird bug where you have to pass 'this' parameter in setInterval
         * 
         * setInterval( this.update().bind(this), 200);
         */
        setInterval(() => this.update(), 1000);
    }
    init(){
        this.update();
        document.getElementById(this.div).insertAdjacentHTML('beforeend', `
                <div id="ctd-year">${this.year}</div>
                <div id="ctd-month">${this.month}</div>
                <div id="ctd-day">${this.day}</div>
                <div id="ctd-hour">${this.hour}</div>
                <div id="ctd-minute">${this.minute}</div>
                <div id="ctd-second">${this.second}</div>
            `);
    }
    update(){
        this.current = new Date();
        this.calculate();
        this.check();
    }
    calculate(){
        this.diff = this.finish.getTime() - this.current.getTime();
        this.diff = (this.diff/1000) >> 0;
    }
    check(){
        this.year = this.diff/31557600 >> 0;
        this.month = (this.diff % 31557600) / 2592000 >> 0;
        this.day = (this.diff % 2592000) / 86400 >> 0;
        this.hour = (this.diff % 86400) / 3600 >> 0;
        this.minute = (this.diff % 3600) / 60 >> 0;
        this.second = (this.diff % 60) >> 0;
        console.log(this.year, this.month, this.day, this.hour, this.minute, this.second);
    }
}