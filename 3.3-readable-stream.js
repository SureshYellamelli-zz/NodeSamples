var request = require('request');

var s = request('https://anapioficeandfire.com/api/books');

s.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk);
});

s.on('end', function() {
    console.log(">>>Done!>>>");
});