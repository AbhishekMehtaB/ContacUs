var Contact = require('./models/contact');

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    
    // create contact
    app.post('/api/contact', function (req, res) {

        // create a contact, information comes from AJAX request from Angular
        Contact.create({
            name: req.body.name,
            email: req.body.email,
            text: req.body.text,
        }, function (err, contact) {
            if (err)
                res.send(err);
            res.send("done");
        });

    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
