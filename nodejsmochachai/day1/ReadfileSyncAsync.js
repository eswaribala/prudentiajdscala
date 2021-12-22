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
var response = fs.readFileSync("./assets/data.txt")
console.log("Synchonous Started.......",response.toString())
console.log("Synchronous Ended.....")
