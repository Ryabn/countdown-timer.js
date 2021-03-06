function load(){
    let divName = 'timer-main';
    let params = (new URL(document.location)).searchParams;
    let date = params.get("d"), background = params.get("b"), title = params.get("t"); 
    date === null ? date = new Date('06/01/2021') : (date = new Date(date), document.title = title);  
    title===null?document.getElementById('event-name').textContent = '':document.getElementById('event-name').textContent = 'Until ' + title;
    setBackground(background);

    let timer = new cdtimer(divName, date);
    setupTooltip();
}
function setupTooltip(){
    let temp = `        
    <div id="info-tooltip">
        <button onclick="link();">Create your own countdown</button>
        <br>
        Made with <span style="color: #e25555;">&hearts;</span> by <a href="https://github.com/ryabn">Ryan Yang</a>
    </div>`;
    tippy('#info-button', {
        arrow: true,
        interactive: true,
        interactiveBorder: 50,
        size: "large",
        content: temp
    })
}
function link(){
    window.open('./create.html', '_blank');
}
function setBackground(background){
    switch(background){
        case 1:
            document.body.style.backgroundImage = 'url("./assets/bg1.jpg")';
            break;
        default:
            document.body.style.backgroundImage = 'url("./assets/bg.jpg")';
            break;
    }
}