import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);


    if(isConnected) {
        console.log('Mongodb is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true
        })

        isConnected = true;
        console.log(" MONGODB Connected")

    } catch (error) {
        console.log(error);
    }
}