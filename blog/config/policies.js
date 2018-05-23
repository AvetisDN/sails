/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

    /***************************************************************************
     *                                                                          *
     * Default policy for all controllers and actions, unless overridden.       *
     * (`true` allows public access)                                            *
     *                                                                          *
     ***************************************************************************/
    '*': true,

    AdminController: {
        '*': 'admin'
    },

    UserController: {
        create: 'admin'
    },

    PostController: {
        // То что могут видеть все
        index: true,
        page: true,
        watch: true,

        // То что может только админ
        create: 'admin',
        update: 'admin',
        delete: 'admin',
    }

};
