//    2)Create a Node.js file that appends the existing file with a new
//        content using the File System module
var fs = require('fs');

fs.appendFile('textfile2.txt', 'I am appending the text file', function (err,file){
    if (err) throw err;
    console.log('Content is appended!');
});
