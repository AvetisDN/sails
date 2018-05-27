module.exports = {
    index: function (req, res) {
        res.view();
    },

    postIndex: function (req, res) {
        Category.find()
            .exec(function (err, categories) {
                Post.find()
                    .sort('id DESC')
                    .exec(function (err, posts) {
                        if (err) return res.send(500);
                        res.view('admin/post/index',{
                            posts: posts,
                            categories: categories
                        });
                    });
            });
    },

    postEdit: function (req, res) {
        var Id = req.param('id');

        Post.findOne(Id).exec(function (err, post) {
            if (!post) return res.send(404);
            if (err) return res.send(500);
            res.view('admin/post/edit',{
                post: post
            });
        });
    },

    categoryIndex: function (req, res) {
        Category.find().exec(function (err, categories) {
            if (err) return res.send(500);
            res.view('admin/category/index',{
                categories: categories
            });
        });
    },

    categoryEdit: function (req, res) {
        var Id = req.param('id');

        Category.findOne(Id).exec(function (err, category) {
            if (!category) return res.send(404);
            if (err) return res.send(500);
            res.view('admin/category/edit',{
                category: category
            });
        });
    },

};