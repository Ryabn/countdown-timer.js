function load(){
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
}
function create(){
    let date = document.getElementById('date').value;
    let event = document.getElementById('event-name').value;
    window.location = `./?d=${date}&t=${event}`;
}