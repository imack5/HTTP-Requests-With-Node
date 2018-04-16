var https = require('https');

function getAndPrintHTMLChunks (options, callback) {


  var fullDataSet = '';

  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      fullDataSet += data;
      //console.log("Data Chunk received: ", data, '\n');
      //console.log(fullDataSet)
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      callback('Full data set received: ' + fullDataSet)
    });

  });

}

function printHTML (html){
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getAndPrintHTMLChunks(requestOptions, printHTML);