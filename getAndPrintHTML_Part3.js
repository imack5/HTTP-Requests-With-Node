var https = require('https');

function getAndPrintHTMLChunks (options) {


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
      console.log('Full data set received: ', fullDataSet)
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTMLChunks(requestOptions);