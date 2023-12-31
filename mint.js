// Description: This file is used to run the cli.js file in a loop and write the output to a file.
// Usage: node mint.js <arguments>
// author: x.com/weideyyds
// date: 2023-12-25

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const dirPath = 'logs';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }


const args = process.argv.slice(2);
args.unshift('dist/cli.js');
console.log(args);

function monitor() {
    const unixTime = Math.floor(Date.now() / 1000).toString();
    const ls = spawn('node', args);

    ls.stdout.on('data', data => {    
    writetoFile(unixTime,data);       
    console.log(data.toString());
    });

    ls.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
    });

    ls.on('close', code => {
    console.log(`child process exited with code ${code}`);
        monitor();
 
    });
}

function writetoFile(unixTime,logStr) { 
    const writeStream = fs.createWriteStream(dirPath+'/'+unixTime+'_log.txt', { flags: 'a' });
    writeStream.write(logStr);    
    writeStream.end();
}   


monitor();
