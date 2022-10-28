module.exports = {
    securityDefinitions: {
        "Authorization": {
            "type": "apiKey",
            "name": "authorization",
            "in": "header",
            "description": "Authentication token"
        }
    }
}