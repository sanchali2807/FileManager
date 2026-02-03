const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname,'files');
if(!fs.existsSync(baseDir)){
    fs.mkdirSync(baseDir);
}
const command = process.argv[2];
const filename = process.argv[3];
const content = process.argv[4];
const filePath = filename?path.join(baseDir,filename):null;
