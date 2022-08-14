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

show_message('1->'+ saved_data)
