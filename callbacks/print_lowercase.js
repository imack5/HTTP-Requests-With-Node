var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function print_lowercase (html){
  console.log(html.toLowerCase());
}

getHTML(requestOptions, print_lowercase);