var test = require('./sub_route/test');
var member = require('./sub_route/member');

module.exports = function(app){
    app.use("/test",test);
    app.use("/member",member);
}