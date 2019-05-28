var test = require('./sub_route/test');
var member = require('./sub_route/member');
var admin = require('./sub_route/admin');
var team = require('./sub_route/team');

module.exports = function(app){
    app.use("/test"     ,test);
    app.use("/member"   ,member);
    app.use("/admin"    ,admin);
    app.use("/team"     ,team);
}