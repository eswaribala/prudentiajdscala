fs=require('fs')
function image_base64(file){
    fs.readFile(file,function(err,imgContent){
       if(err)
           console.log('error')
        else
       {
       data= new Buffer(imgContent).toString('base64')
        console.log(data)}
       })
}

//convert image to base 64
base64Data=image_base64('./assets/dentalhealth.png')

