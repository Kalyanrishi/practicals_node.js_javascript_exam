//   4) Create a Node.js file that writes the file using the File System module. 


var fs = require('fs');

fs.writeFile('textfile3.txt', 'Hello content!', function (err,file){
    if (err) throw err;
    console.log('Content is writtern to textfile3.txt');
});