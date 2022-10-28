module.exports = {
    post: {
        tags: ["Authentication"],
        description: "Signing In a User",
        operationId: "signin",
        parameters: [],
        requestBody:{
            content : {
                "application/json": {
                    schema : {
                        type : "object",
                        "$ref": "#/components/schemas/SignInUser"
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