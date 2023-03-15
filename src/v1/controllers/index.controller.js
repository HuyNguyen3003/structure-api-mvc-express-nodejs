const client = require('../databases/init.redis')


module.exports.check= async(data)=>{
    try{
        await client.set("check","123")


        return data
        
    }catch(e){
        console.log(e)
    }
}