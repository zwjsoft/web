const fs=require("fs")
const readFile=function(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) reject(err); else resolve(data);
        })
    })
}

readFile("aaa.txt").then(res=>{
    console.log(res);
    return readFile("bbb.txt");
}).then(
    res=>{
        console.log(res);
        return readFile("ccc.txt");}
).then(res=>{
    console.log(res);}
)