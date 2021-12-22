var http=require('http')
var server = http.createServer(function (req,res){
    res.writeHead("Status:Code"+200)
    res.send("Server Ready to Rock.....")
})

//listener
exports.listen=function(port){
    server.listen(port)
}

exports.close=function(){
    server.close()
}
