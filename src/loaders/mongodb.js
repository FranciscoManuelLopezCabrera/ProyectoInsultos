const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

module.exports = async config => {
    const{ user, pass, host, port, dbName} = config;
    await mongoose.connect(`mongodb+srv://${user}:${pass}@${host}${port ? `:${port}`:''}/${dbName}?retryWrites=true&w=majority`);
    console.log('🐸Conectado🐸');
}