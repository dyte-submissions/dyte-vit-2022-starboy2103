const fs = require('fs')

const write=fs.createWriteStream('./Files/output.csv')

const writer = (left,right,version,ver_satis) => {
    write.write(left+','+right+','+version+','+ver_satis+'\r\n')
}

module.exports.writer=writer