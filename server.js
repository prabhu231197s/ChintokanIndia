(function(){
    var express = require('express');
    var app = express();

    app.use('/',express.static(__dirname + '/client'));

    app.listen(2222);
    console.log('Running on port 2222');

})();