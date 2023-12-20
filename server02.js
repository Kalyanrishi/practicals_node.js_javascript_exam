// 3)Create a Node.js file that opens an empty file using the File System module.


var fs = require('fs');

fs.open('textfile2.txt', 'w', function (err,file){
    if (err) throw err;
    console.log('Empty file is created!');
});