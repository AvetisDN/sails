var passwordHash = require('password-hash');

module.exports = {


    // @API основные функции сессии

    create: function (req, res) {
        var username = req.param('username'),
            password = req.param('password');

        if (!username || !password) {
            return res.redirect('/session');
        }

        User.findOneByUsername(username).exec(function (err, user) {
            if (!user || err) return res.sendStatus(500);
            if (passwordHash.verify(password, user.password)) {
                req.session.auth = true;
                req.session.User = user;

                if (req.session.User.admin) {
                    return res.redirect('/admin');
                }
            }
        });
    },
    destroy: function (req, res) {
        User.findOne(req.session.User.id).exec(function (err, user) {
            if (user) {
                req.session.destroy();
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        });
    },

    // @MAIN

    index: function (req, res) {
        res.view();
    }
};