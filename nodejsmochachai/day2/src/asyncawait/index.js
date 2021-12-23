axios=require('axios')

module.exports.getUsers=function(url){
    return axios.get(url)
}

Users=[
    {
        name:'Leane'
    },
    {
        name:'John'
    }

]

module.exports.CustomUsers=function(){
    return Users;
}
