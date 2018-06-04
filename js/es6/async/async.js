const fs=require("fs")
const readFile=function(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) reject(err); else resolve(data);
        })
    })
}
async function fn(){
    let f1=await readFile("aaa.txt");
    console.log(f1);
    let f2=await readFile("bbb.txt");
    console.log(f2);
    let f3=await readFile("ccc.txt");
    console.log(f3);
}

fn()