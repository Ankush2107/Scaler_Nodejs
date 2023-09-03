// files

const fs = require('fs')


// reading a file

// let fileContent = fs.readFileSync('f2.txt')

// console.log('data of file 1 -> ' + fileContent)

// writing in a file

fs.writeFileSync('f2.txt' , 'This is file 2')

console.log('File has been written');

// append a file 

// fs.appendFileSync('f3.txt' , 'This is updated data')
// console.log('Done');


// deleting a file

// fs.unlinkSync('f2.txt')
// console.log('File has been deleted');

