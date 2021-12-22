fs=require('fs')

function image_base64(file){
    var bitmap=fs.readFileSync(file)
    return new Buffer(bitmap).toString('base64')
}

//convert image to base 64

base64Data=image_base64('./assets/dentalhealth.png')
console.log(base64Data)
