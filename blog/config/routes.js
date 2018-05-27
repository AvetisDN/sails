/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    '/': {
        view: 'pages/homepage'
    },
    '/post': {
        controller: 'post', // Контроллер
        action: 'index' // Действие
    },
    'get /post/:page': {
        controller: 'post', // Контроллер
        action: 'page' // Действие
    },
    'post /post/create': {
        controller: 'post',
        action: 'create'
    },

    'get /post/delete/:id': {
        controller: 'post',
        action: 'delete'
    },

    'get /post/watch/:id': {
        controller: 'post',
        action: 'watch'
    },

    'post /post/update': {
        controller: 'post',
        action: 'update'
    },

    '/register' : {
        controller: 'user',
        action: 'index'
    },

    'post /user/create' : {
        controller: 'user',
        action: 'create'
    },

    '/login'    : {
        controller: 'session',
        action: 'index'
    },

    '/logout'   : {
        controller: 'session',
        action: 'destroy'
    },

    'post /session/create' : {
        controller: 'session',
        action: 'create'
    },

    '/category': {
        controller: 'category', // Контроллер
        action: 'index' // Действие
    },
    'post /category/create': {
        controller: 'category',
        action: 'create'
    },

    'get /category/delete/:id': {
        controller: 'category',
        action: 'delete'
    },

    'get /category/watch/:id': {
        controller: 'category',
        action: 'watch'
    },

    'post /category/update': {
        controller: 'category',
        action: 'update'
    },


    '/admin'    : {
        controller: 'admin',
        action: 'index'
    },

    '/admin/post' : {
        controller: 'admin',
        action: 'postIndex'
    },
    '/admin/post/edit/:id' : {
        controller: 'admin',
        action: 'postEdit'
    },

    '/admin/category' : {
        controller: 'admin',
        action: 'categoryIndex'
    },
    '/admin/category/edit/:id' : {
        controller: 'admin',
        action: 'categoryEdit'
    }


};
