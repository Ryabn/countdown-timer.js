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
        this.current = new Date();
        this.calculate();
        this.check();
        document.getElementById(this.div).insertAdjacentHTML('beforeend', `
                <div class="ctd-block" id="ctd-year">${this.year}</div>
                <div class="ctd-block" id="ctd-month">${this.month}</div>
                <div class="ctd-block" id="ctd-day">${this.day}</div>
                <div class="ctd-block" id="ctd-hour">${this.hour}</div>
                <div class="ctd-block" id="ctd-minute">${this.minute}</div>
                <div class="ctd-block" id="ctd-second">${this.second}</div>
            `);
    }
    update(){
        this.current = new Date();
        this.calculate();
        this.check();
        this.display();
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
        this.second = this.diff % 60;
    }
    display(){
        document.getElementById('ctd-year').innerHTML = `${this.year} <span>year</span>`;
        document.getElementById('ctd-month').innerHTML = `${this.month} <span>months</span>`;
        document.getElementById('ctd-day').innerHTML = `${this.day} <span>days</span>`;
        document.getElementById('ctd-hour').innerHTML = `${this.hour} <span>hours</span>`;
        document.getElementById('ctd-minute').innerHTML = `${this.minute} <span>minutes</span>`;
        document.getElementById('ctd-second').innerHTML = `${this.second} <span>seconds</span>`;
    }
}