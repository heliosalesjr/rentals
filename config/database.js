import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (connected) {
        console.log('Mongo is already connected')
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected = true;
        console.log('Connected!');
    } catch (error) {
        console.log('Failed to connect');
    }
}

export default connectDB;