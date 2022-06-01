const fs=require('fs')
const gitReq=require('./gitObj')

const sendDepObj =(fileName) =>{
    const path=String('././Files/'+fileName)
    const read=fs.createReadStream(path) 
    var arr=[]
    let unprocessed=''
    read.on('data',(chunk) => {
        let chunkString = unprocessed + chunk.toString()
        unprocessed=''
        if(chunkString[chunkString.length-1] !== '\r\n')
        {
            let temp=chunkString.split(/\r\n/)
            for(var ch=0;ch<=(temp.length)-1;ch++)
            {
                arr.push(temp[ch])
            }
            unprocessed=temp[temp.length-1]
        }
        else
        {
            let temp=chunkString.split(/\r\n/)
            for(var ch=0;ch<=(temp.length);ch++)
            {
                arr.push(temp[ch])
            }
        }
//-------------------------------------------------INVOKE HELPER-----------------------------------------------
        arr.forEach((ar) => {
            {
                var repo=''
                var left=''
                repo=ar.split(',')[1]
                left=ar.split(',')[0]
                gitReq(repo,left)
            }
        });
        arr=[]
    })
    read.on('end',() =>{
        console.log(arr)
    })
}

module.exports=sendDepObj