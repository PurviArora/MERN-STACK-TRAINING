import fs from 'fs'
const mg = "Working o file again";
fs.writeFile("file_info/firts.txt", msg, (data,err)=>{
    if(err) {
        console.log("There is some error" );
    }
    else{
        console.log("Data Saved !!");
    }
})