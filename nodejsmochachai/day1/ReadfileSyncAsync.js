fs=require('fs')

//asynchronous
fs.readFile('./assets/data.txt',function(err,data){
    if(err)
       console.log(err)
    else {
        console.log("Asynchonous Data Reading....",data.toString())
    }
})


//synchronous
