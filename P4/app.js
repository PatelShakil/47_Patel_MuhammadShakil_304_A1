const fs = require('fs');
const zlib = require('zlib');

var readerStream = fs.createReadStream('./myfile.txt')

fs.createReadStream('./myfile.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./myfile.txt.gz'))

readerStream.setEncoding('utf-8');
console.log("zipping the file...");