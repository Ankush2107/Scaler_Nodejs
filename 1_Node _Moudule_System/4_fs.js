// Files : 
/*
If the file name that is passed doesn't exists a new file will be created with its name and the data will be written on that file.
*/ 

const fs = require('fs')


// reading a file

// let fileContent = fs.readFileSync('f2.txt')

// console.log('data of file 1 -> ' + fileContent)

// writing in a file

// fs.writeFileSync('f2.txt' , 'This is file 2')

// console.log('File has been written');

// append a file 

// fs.appendFileSync('f3.txt' , 'This is updated data')
// console.log('Done');


// deleting a file

// fs.unlinkSync('f2.txt')
// console.log('File has been deleted');



// Directories

// create a directory

// fs.mkdirSync('mydirectory')

// check the content inside of the directory

// let folderPath = 'C:\Users\dell\Desktop\Scaler_Nodejs\mydirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log(folderContent);



// check whether a directory exist or not

// let doesExist = fs.existsSync('mydirectory')
// console.log(doesExist);


// remove directory

fs.rmdirSync('mydirectory')
console.log('File has been delected');