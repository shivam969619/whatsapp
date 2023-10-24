import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-fzguv0f-shard-00-00.bgupccp.mongodb.net:27017,ac-fzguv0f-shard-00-01.bgupccp.mongodb.net:27017,ac-fzguv0f-shard-00-02.bgupccp.mongodb.net:27017/?ssl=true&replicaSet=atlas-f1refk-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
           
        });
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;
