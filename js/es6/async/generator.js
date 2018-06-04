const fs=require("fs")
const readFile=function(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,(err,data)=>{
            if(err) reject(err); else resolve(data);
        })
    })
}

function * gen(){
    yield readFile("aaa.txt")
    yield readFile("bbb.txt")
    yield readFile("ccc.txt")
}

let g1=gen();
g1.next().value.then((res)=>{
    console.log(res);
    return g1.next().value;
}).then(res=>{
    console.log(res);
    return g1.next().value;
}).then(res=>{
    console.log(res);
})