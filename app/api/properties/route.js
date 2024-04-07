import connectDB from '@/config/database';

export const GET = async (request) => {
    try {
        await connectDB();
        return new Response(JSON.stringify( {message: 'Oi olá como vai?'}), { status: 200})
    } catch (error) {
        console.log(error)
        return new Response('Oops... I did it again!', { status: 500})
    }
}