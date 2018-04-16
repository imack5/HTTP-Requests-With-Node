var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function print_reverse (html){
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, print_reverse);