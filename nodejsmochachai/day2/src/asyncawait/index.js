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
