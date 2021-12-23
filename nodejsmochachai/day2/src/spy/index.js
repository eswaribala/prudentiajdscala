var request=require('request')
module.exports={
    getUserById:async function(url){
        return new Promise((resolve, reject) => {
            request.get(url, (err, res, body) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(body));
            });
        });

    }

}
