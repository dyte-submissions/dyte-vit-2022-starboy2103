const { default: axios } = require('axios');
const version = require('./getVersion')


var URL = '';
var lefts=''
var link=''
const TOKEN = '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';

var options = {
  headers: {
    'Authorization': 'token ' + TOKEN
  }
};

function callback(response, error, body) {
      error && console.log(error)
      if(response){
        const base64=response.data.content
        const buff=new Buffer.from(base64,'base64')
        const package = buff.toString('ascii')
        version.getVersion(package,lefts,link)
      }
}

const sendReq = async (gitRepo,left) =>
{
    try{
        const arr=gitRepo.split('github.com/')
        var required=''
        required=arr[1]
        if(required[(required.length)-1]!=='/')
        {
            required+='/'
        }
        URL='https://api.github.com/repos/'+required+'contents/package.json'
        lefts=left
        link=gitRepo
        await axios.get(URL,options).then(callback);
    }
    catch(err)
    {
        console.log(err)
    }
}

module.exports=sendReq