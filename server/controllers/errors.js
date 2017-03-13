// Script used to define server error and various errors on api.

module.exports = {
    badRequest: (message) => {
        response = {
            'status': 400, 
            'error': 'bad request',
            'message': message,
        }

        return response;
    },

    unauthorized: (message) => {

        if (message === ''){
            let message = 'Please authenticate with your token.';
        }

        response = {
            'status': 401, 
            'error': 'unauthorized',
            'message': message,
        }

        return response;
    }
}
