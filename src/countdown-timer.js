'use strict';

class cdtimer{
    constructor(div, date){
        this.div = div;
        this.finish = new Date(date);
        this.init();
        /**
         * Using arrow function here bypasses weird bug where you have to pass 'this' parameter in setInterval
         * 
         * Here is another fix that doesn't use the arrow function syntax
         * setInterval( this.update().bind(this), 200);
         */
        setInterval(() => this.update(), 1000);
    }
    init(){
        this.current = new Date();
        this.calculate();
        this.check();
        document.getElementById(this.div).insertAdjacentHTML('beforeend', `
            <div class="ctd-block" id="ctd-year">${this.year}<span>years</span></div>
            <div class="ctd-block" id="ctd-month">${this.month}<span>months</span></div>
            <div class="ctd-block" id="ctd-day">${this.day}<span>days</span></div>
            <div class="ctd-block" id="ctd-hour">${this.hour}<span>hours</span></div>
            <div class="ctd-block" id="ctd-minute">${this.minute}<span>minutes</span></div>
            <div class="ctd-block" id="ctd-second">${this.second}<span>seconds</span></div>
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
        // this.diff initially returns in milliseconds - we're not displaying the millisecond count so we divide 1000
        // the bitwise operator (>>) helps us round down by discarding 32 bits to the right of 0
        // this is faster than Math.floor() or any other method as proven by jsben.ch
        this.diff = (this.diff/1000) >> 0;
    }
    check(){
        //since this.diff is the total number of seconds between now and the 
        this.year = this.diff/31536000 >> 0;
        this.month = (this.diff % 31536000) / 2629746 >> 0;
        this.day = (this.diff % 2629746) / 86400 >> 0;
        this.hour = (this.diff % 86400) / 3600 >> 0;
        this.minute = (this.diff % 3600) / 60 >> 0;
        this.second = this.diff % 60;

        // setting the css variables equal to the percentage they should be
        // the css itself will use the calc() property to calculate the actual sizes
        document.documentElement.style.setProperty('--ctd-month-percent', this.month/11);
        document.documentElement.style.setProperty('--ctd-day-percent', this.day/30);
        document.documentElement.style.setProperty('--ctd-hour-percent', this.hour/23);
        document.documentElement.style.setProperty('--ctd-minute-percent', this.minute/59);
        document.documentElement.style.setProperty('--ctd-second-percent', this.second/59);
    }
    display(){
        document.getElementById('ctd-year').innerHTML = `${this.year} <span>years</span>`;
        document.getElementById('ctd-month').innerHTML = `${this.month} <span>months</span>`;
        document.getElementById('ctd-day').innerHTML = `${this.day} <span>days</span>`;
        document.getElementById('ctd-hour').innerHTML = `${this.hour} <span>hours</span>`;
        document.getElementById('ctd-minute').innerHTML = `${this.minute} <span>minutes</span>`;
        document.getElementById('ctd-second').innerHTML = `${this.second} <span>seconds</span>`;
    }
}
