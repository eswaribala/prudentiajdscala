fs=require('fs')
function image_base64(file){
    fs.readFile(file,function(err,imgContent){
       if(err)
           console.log('error')
        else
       {
       data= new Buffer(imgContent).toString('base64')
        console.log(data)}
        base64_image('copy.jpg',data)

       })
}

function base64_image(fileName,base64Data){
    var bitmap=new Buffer(base64Data,'base64')
    fs.writeFile(fileName,bitmap,function(err,result){
        if(err)
            console.log('Error occurred....',err)
        else
            console.log('Image created')
    })


}


//convert image to base 64
base64Data=image_base64('./assets/dentalhealth.png')

