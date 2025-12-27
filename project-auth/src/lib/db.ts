import {connect} from 'mongoose'

const mongoUri = process.env.MONGODB_URI!


if(!mongoUri){
    console.log('betichod env kon dega?')
}


let cached = global.mongoose

if(!cached){
    // doing 2 things at once - assigning object to global.mongoose and assigning it to the cached
    cached = global.mongoose={conn:null,promise:null}
}


const connectDb = async ()=>{
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        cached.promise= connect(mongoUri).then((c)=>c.connection)
    }
    
    try {
        cached.conn=await cached.promise
    } catch (error) {
        throw error
    }


    return cached.conn
    
}


export default connectDb;
