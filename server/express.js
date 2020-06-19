module.exports = function (application, domain = 'localhost', port = 3000, public_src = "./") {

    const express = require('express');

    const app = express();
    port = process.env.PORT || port;

    // NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });

    app.use(express.static(public_src));

    // API endpoint
    app.get("/api/ping", (req, res) => {
        res.send({
            msg: "Hello, World"
        });
    });


    // app.get('/', (req, res) => {
    //     res.send('An alligator approaches!');
    // });

    // app.listen(PORT, () => console.log(`listening on ${PORT}`));
    var url = 'http://' + domain + ':' + port;
    app.listen(port, () => console.log(application + ' is listening on: ' + url));

    return app;
};
