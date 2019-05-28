var test = require('./sub_route/test');
var member = require('./sub_route/member');
var admin = require('./sub_route/admin');

module.exports = function(app){
    app.use("/test"     ,test);
    app.use("/member"   ,member);
    app.use("/admin"    ,admin);
}