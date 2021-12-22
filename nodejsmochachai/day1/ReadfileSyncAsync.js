fs=require('fs')

//asynchronous
console.log("Asynchronous Started.....")
fs.readFile('./assets/data.txt',function(err,data){
    if(err)
       console.log(err)
    else {
        console.log("Asynchonous Data Reading....",data.toString())
    }

})
console.log("Asynchronous Ended.....")
//synchronous
var response = fs.readFileSync("./assets/data.txt")
console.log("Synchonous Started.......",response.toString())
console.log("Synchronous Ended.....")
