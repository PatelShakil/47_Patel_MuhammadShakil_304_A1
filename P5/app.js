const fs = require('fs');
const zlib = require('zlib');


fs.createReadStream('../P4/myfile.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./myfile1.txt'))

var readerStream = fs.createReadStream('./myfile1.txt')
readerStream.setEncoding('utf-8');
console.log("Unzipped file content:");
