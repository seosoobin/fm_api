var test = require('./sub_route/test');

module.exports = function(app){
    app.use("/test",test);
}