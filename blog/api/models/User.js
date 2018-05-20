/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var passwordHash = require('password-hash');

module.exports = {

    attributes: {

        username: {type: 'string', required: true, unique: true},
        password: {type: 'string', required: true, minLength: 6},

        admin: {
            type: 'boolean',
            defaultsTo: false
        }

    },
    /*customToJSON: function() {
        return _.omit(this, ['password']);
    },*/

    beforeCreate: function (values, next) {
        // Создаем зашифрованную запись пароля в БД
        values.password = passwordHash.generate(values.password);
        next();
    }

};