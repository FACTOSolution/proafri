module.exports = {
    secret: process.env.SECRET,
    port: process.env.PORT || 5000,
    mongo: {
        url: process.env.MONGO_URL ||  'mongodb://localhost:27017/proafri'
    }
}