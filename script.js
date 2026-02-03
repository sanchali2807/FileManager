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
function createFile(){
    if(!filename || !content){
        return console.log("file name is missing");
    }
    fs.writeFileSync(filePath,content+'\n');
    console.log("file written successfuly");
}
function readFile(){
    if(!fs.existsSync(filePath)){
        return console.log("file does not exist");
    }
    const data = fs.readFileSync(filePath,'utf-8');
    // const data = fs.readFileSync(filePath);
    console.log(data);
}
function listFile(){
    if(!fs.existsSync(baseDir)){
        return console.log("directory does not exist");
    }
    const lists = fs.readdirSync(baseDir);
    if(lists.length === 0){
        console.log("directory is empty");
    }
    lists.forEach((l)=>console.log(`-${l}`));
}
switch(command){
    case 'create':
        createFile();
        break;
        case 'read':
            readFile();
            break;
            case 'append':
                appendFile();
                break;
                case 'list':
                    listFile();
                    break;
                    case 'delete':
                        deleteFile();
                        break;
                        case 'info' :
                            infoFile();
                            break;
}