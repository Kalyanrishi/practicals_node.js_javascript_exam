// 5) Create a Node.js file that replaces the content of existing file using the File System module. 


var fs = require('fs');

fs.writeFile('textfile3.txt', 'This is the replaced content ', function (err,file){
    if (err) throw err;
    console.log('Content replaced!');
});