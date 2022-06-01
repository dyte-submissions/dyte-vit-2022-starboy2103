const cli = require('../utils/cli');
const wr=require('./fileWriter')

const input = cli.input;
var result=false

const getCurr = (package,left,link) => {
    package=JSON.parse(package)
    const depend=package.dependencies
    for(var i=1;i<input.length;i++)
    {
        result=false
        const temp=input[i].split('@')
        const dep=temp[0]
        const ver=temp[1]
        if(dep in depend)
        {
            const nums=ver.split('.')
            var numcheck=depend[dep].split('.')
            numcheck[0]=numcheck[0].slice(1)
            console.log(numcheck+' '+nums)
            for(var i=0;i<3;i++)
            {
                if(numcheck[i]==nums[i])
                {
                    console.log(numcheck[i]+' '+nums[i])
                    result=true
                    continue
                }
                else if(numcheck[i]<nums[i])
                {
                    console.log(numcheck[i]+' '+nums[i])
                    result=false
                    break
                }
                else if(numcheck[i]>nums[i])
                {
                    console.log(numcheck[i]+' '+nums[i])
                    result=true
                    break
                }
            }
            wr.writer(left,link,depend[dep],result)
        }
        else
        {
            wr.writer(left,link,0,false)
        }
    }
}

module.exports.getVersion=getCurr