'use strict';
function show_message(msg) {
	alert(msg);
}

let saved_data = "";

function test(data) {
        saved_data = data;
	show_message('2->' + saved_data)
}

fetch('https://alvinmlytics.xyz/wtf.txt')
  .then((response) => response.text())
  .then((data) => test(data));
// fetch is a process that runs on background (synchronous function) , but not all function runs on background (asynchronous function)

show_message('1->'+ saved_data);


function movies(){
  return `Movies
  1. Back to the Future (Trilogy)
  2. Donnie Darko
  3. Summer Time Machine Blues
  4. Interstellar
  5. FAQ About Time Travel
  6. 12 Monkeys
  7. Primer
  8. Edge of Tomorrow
  9. Groundhog Day
  10. The Time Machine (1960 and 2003)`
}

function tvseries(){
  return `TV series
      1. Dark
      2. Steins;Gate
      3. Boku Dake Ga Inai Machi`
}

function shortfilms(){
return `Short Films (mostly youtube videos)
    1. One-Minute Time Machine - Sploid
    2. This Is Why Eating Healthy Is Hard (Time Travel Dietician) - Funny Or Die
    3. Exit Strategy - Omeleto
    4. Chrono Perambulator - gavdoff
    5. Dirty Machines: The End of History - Short of the Week
    6. Time - TROPFEST
    7. CTRL Z - DUST
    8. Echo/Back - The Time Travel Virus - Torchborne Screens
    9. A Single Life - Job, Joris & Marieke
    10. Timeless - Planet Froth`
}

function show() {
  let x = document.getElementById("my-text")
  alert(x.value)
}

function change_content(arg1, arg2) {
  let x = document.getElementById("div_1"); // get the html element namely div_1
  x.innerHTML = arg1 + "--" + arg2;
  // x.innerHTML = '<input value="newnewnew" />'
}

function request_text() {
  let fieldtext = document.getElementById("my-text").value;
  // alert(fieldtext);
  if (fieldtext == 'movies') {
    let movies_list = movies().replace(/\n/g, "<br/>");
    let div1 = document.getElementById("div_1");
    div1.innerHTML = movies_list;
    // return;
  } else if (fieldtext == 'series') {
      let series_list = tvseries().replace(/\n/g, "<br/>");
      let div1 = document.getElementById("div_1");
      div1.innerHTML = series_list;
      // return;
  } else if (fieldtext == 'shorts') {
    let shorts_list = shortfilms().replace(/\n/g, "<br/>");
    let div1 = document.getElementById("div_1");
    div1.innerHTML = shorts_list;
    // return;
  } else {
    let others = fieldtext
    let div1 = document.getElementById("div_1")
    div1.innerHTML = others
    return;
  }

  // alert(1); // to test how else if and return works
}