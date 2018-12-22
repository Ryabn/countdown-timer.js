# countdown-timer.js
Countdown-timer.js is a small library for incorporating a visual countdown on your site

## How to use

To create a countdown, you need to first create an html tag and pass the id of it as a string into the first parameter and a date object in the second.

For ex:


### index.html
```html
<body onload="load();">
    <div id="timer-main"></div>
</body>
```

### script.js
```javascript
function load(){
    let divName = 'timer-main';
    let date = new Date('06/01/2021');
    let timer = new cdtimer(divName, date);
}
```
Keep in mind that divName can be anything as long as there is the corresponding html tag that has that id. 

The date needs to be a date object using the javascript built-in date class.

## Styling your own countdown

Styling is done mostly through css variables.
Here are all the variables used

|Variable Name | Default Value | What it represents | Can I change? |
|---|---|---|---| 
| --ctd-block-height  |  100% | How much of the height it should take up |  No |
| --ctd-block-width  |  100% | How much of the width it should take up |  No |
| --ctd-month-percent |  1 | See countdown-timer.js |  No |
| --ctd-day-percent |  1 | See countdown-timer.js |  No |
| --ctd-hour-percent |  1 | See countdown-timer.js |  No |
| --ctd-minute-percent |  1 | See countdown-timer.js |  No |
| --ctd-second-percent |  1 | See countdown-timer.js |  No |
| --ctd-color-month-start-limit |  0 | Starting HSL color value | Yes |
| --ctd-color-day-start-limit |  80 | Starting HSL color value | Yes |
| --ctd-color-hour-start-limit |  160 | Starting HSL color value | Yes |
| --ctd-color-minute-start-limit |  240 | Starting HSL color value | Yes |
| --ctd-color-second-start-limit |  0 | Starting HSL color value | Yes |
| --ctd-color-month-end-limit |  50 | Range of color value | Yes |
| --ctd-color-day-end-limit |  50 | Range of color value | Yes |
| --ctd-color-hour-end-limit |  50 | Range of color value | Yes |
| --ctd-color-minute-end-limit |  50 | Range of color value | Yes |
| --ctd-color-second-end-limit |  1080 | Range of color value | Yes |
| --ctd-color-month |  hsla( calc( var(--ctd-color-month-start-limit) + ( var(--ctd-month-percent) * var(--ctd-color-month-end-limit))), 90%, 77%, 0.8) | Color value | Yes* |
| --ctd-color-day |  hsla( calc( var(--ctd-color-day-start-limit) + ( var(--ctd-day-percent) * var(--ctd-color-day-end-limit))), 90%, 77%, 0.8) | Color value | Yes* |
| --ctd-color-hour |  hsla( calc( var(--ctd-color-hour-start-limit) + ( var(--ctd-hour-percent) * var(--ctd-color-hour-end-limit))), 90%, 77%, 0.8) | Color value | Yes* |
| --ctd-color-minute |  hsla( calc( var(--ctd-color-minute-start-limit) + ( var(--ctd-minute-percent) * var(--ctd-color-minute-end-limit))), 90%, 77%, 0.8) | Color value | Yes* |
| --ctd-color-second |  hsla( calc( var(--ctd-color-second-start-limit) + ( var(--ctd-second-percent) * var(--ctd-color-second-end-limit))), 90%, 77%, 0.8) | Color value | Yes* |

* This value by default will change colors if you alter the other color variables. Look at the defualt value to understand how it works

# countdown-timer.js example

In the example, I use materializecss to help me develop a user interface without having to do the individual styling myself. To create your own countdown timer, I incorporate a date picker made by the library and the resulting input is of the format (\<Month Abbreviated> \<Date>, \<Year>) which I then pass in for the Date constructor to generate a date object.
