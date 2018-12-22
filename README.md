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

# countdown-timer.js example

In the example, I use materializecss to help me develop a user interface without having to do the individual styling myself. To create your own countdown timer, I incorporate a date picker made by the library and the resulting input is of the format (\<Month Abbreviated> \<Date>, \<Year>) which I then pass in for the Date constructor to generate a date object.
