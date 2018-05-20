/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: async function (req, res) {

        var params = {
            description : req.param('description'),
            content     : req.param('content'),
            title       : req.param('title'),
        };

        var post = await Post.create(params).fetch();
        res.redirect('/post/watch/' + post.id);

    },
    update: function (req, res) {
        var Id = req.param('id');

        var elem = {
            description : req.param('description'),
            content : req.param('content'),
            title : req.param('title')
        };

        Post.update(Id, elem).exec(function (err) {
            if (err) return res.sendStatus(500);
            res.redirect('/admin');
        });

    },
    delete: function (req, res) {
        var Id = req.param('id');
        Post.destroy(Id).exec(function (err) {
            if (err) return res.sendStatus(500);
            res.redirect('/admin');
        });
    },

    index: function (req, res) {
        Post.find()
            .sort('id DESC')
            .limit(5)
            .exec(function (err, posts) {
                if (err) return res.sendStatus(500);
                res.view({
                    posts: posts
                });

            });
    },
    watch: function (req, res) {
        var Id = req.param('id');
        Post.findOne(Id).exec(function (err, post) {
            if (!post) return res.sendStatus(404);
            if (err) return res.sendStatus(500);
            res.view({
                post: post
            });

        });
    },
    page: function (req, res) {
        var page = req.param('page');

        Post.find()
            .sort('id DESC')
            .paginate({
                page : page,
                limit: 5
            })
            .exec(function (err, posts) {
                if (err) return res.sendStatus(500);
                res.view({
                    posts: posts
                });

            });
    }

};

