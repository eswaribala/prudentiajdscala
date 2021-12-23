axios=require('axios')

module.exports.getUsers=function(url){
    return axios.get(url)
}
