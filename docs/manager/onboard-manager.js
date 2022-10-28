module.exports = {
    post: {
        description: "onBoard Manager API",
        tags: ["Manager"],
        operationId: "onboardManager",
        parameters: [],
        requestBody:{
            content : {
                "application/json": {
                    schema : {
                        type : "object",
                        "$ref": "#/components/schemas/Onboard"
                    }
                }
            }
        },
        responses: {
            200: {
                description: 'User Created Sucessfully'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
}