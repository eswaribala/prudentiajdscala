axios=require('axios')

module.exports.getUsers=function(url){
    return axios.get(url)
}

Users=[
    {
        name:{
            firstName:"Parameswari",
            lastName:"Bala"
        }
    },
    {
        name:{
            firstName:"Vignesh",
            lastName:"Bala"
        }
    }

]

module.exports.CustomUsers=function(){
    return Users;
}


module.exports.ReadFile=function(file){
    var filetype=/text.*/;
   if(file.exist) {
       var reader = new FileReader();
       reader.onload = function (evt) {
           displayref.innerText = reader.result;
       };
       //read the content
       reader.readAsText(fileName);
   }
    else
        throw 'File Not Found';

}
