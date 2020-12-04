airlines = ["AA", "DL", "UA", "WN", "B6", "AC", "G9", "AM", "NK", "LA", "BA", "AF", "LH", "EK", "ANA", "CX", "SQ"];
cargo = ["FX","SO", "5X", "5Y", "PO"]
destinations = ['KALB', 'KABQ', 'KACY', 'KBHM', 'KHSV', 'KMOB', 'PANC', 'KOMA', 'KTUS', 'KLIT', 'KXNA', 'KBAB', 'KBUR', "KORF", "KHYS", "KORD", "KBOS", "KMCO"]
let cargo_button = document.getElementById("cargo");
let airline_button = document.getElementById("airline");
let clear_button = document.getElementById("reset")
let ga_button = document.getElementById("ga")
let flight_ul = document.getElementById("flight_list");
let url = "https://www.flightstats.com/v2/flight-tracker/"
let d = new Date()
let my_year = d.getFullYear()
let my_month = d.getMonth()
let my_day = d.getDay()

function getRandomNo() {
    return Math.floor(Math.random() * (1 - 999))
}

cargo_button.addEventListener("click", function() {
    let ra = cargo[Math.floor(Math.random()*cargo.length)]
    let n = getRandomNo()
    let randomCargo = ra + n
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(randomCargo));
    flight_ul.appendChild(li);
    let nf = n.toString()
    let final = nf.replace('-','');
    const myurl = `https://www.flightstats.com/v2/flight-tracker/${ra}/${final}?year=${my_year}&month=${my_month}&day=${my_day}`
    window.open(myurl);
})

airline_button.addEventListener("click", function() {
    let ra = airlines[Math.floor(Math.random()*airlines.length)]
    let n = getRandomNo()
    let randomAirline = ra + n
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(randomAirline));
    flight_ul.appendChild(li);
    let nf = n.toString()
    let final = nf.replace('-','');
    const myurl = `https://www.flightstats.com/v2/flight-tracker/${ra}/${final}?year=${my_year}&month=${my_month}&day=${my_day}`
    window.open(myurl);
})

ga_button.addEventListener("click", function() {
    let ga = destinations[Math.floor(Math.random()*destinations.length)] + "-" + destinations[Math.floor(Math.random()*destinations.length)];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(ga));
    flight_ul.appendChild(li);

})

clear_button.addEventListener("click", function() {
    flight_ul.innerHTML="";
})








