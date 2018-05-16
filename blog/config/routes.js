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

};
