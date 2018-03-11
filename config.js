module.exports = {
    secret: process.env.SECRET,
    port: process.env.PORT || 5000,
    mongo: {
        url: process.env.MONGO_URL ||  'mongodb://factos:factos45@ds251588.mlab.com:51588/stage'
    }
}