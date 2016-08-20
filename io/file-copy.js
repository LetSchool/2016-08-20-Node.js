var fs = require('fs');

var readStream = fs.createReadStream('source.txt');
var writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);
