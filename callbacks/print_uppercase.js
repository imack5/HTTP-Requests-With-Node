var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function print_uppercase (html){
  console.log(html.toUpperCase());
}

getHTML(requestOptions, print_uppercase);