import { Connection } from "mongoose"


// You are declaring a global variable called mongoose.
// Why store it globally?
// In Next.js:
// Files can run multiple times
// Hot reload happens
// Serverless functions may re-execute
// If you connect to MongoDB every time → 💥 too many connections.
// So this pattern:
// Caches one MongoDB connection
// Reuses it across renders / API calls



declare global{
    var mongoose:{
        conn:Connection | null, // null untill connected
        promise:Promise<Connection> | null // holds connection is progress
    }
}


export {} // it tells typescript that This file is a module, not a script