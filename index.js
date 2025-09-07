import connectDB from '../Project/src/db/db.js'
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT ${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("MONGO db connection failed!!!", error);
    
})