const signUp = require('./signup');
const signIn = require('./signin');

module.exports = {
    paths : {
        '/user/signup' : {
            ...signUp
        },
        '/user/signin' : {
            ...signIn
        }
    }
}