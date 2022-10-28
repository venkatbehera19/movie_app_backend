module.exports = {
    post: {
        description: "creating a hall",
        tags: ["Cinema Hall"],
        operationId: "createHall",
        parameters: [
            {
                in: "header",
                name: "x-auth-token",
                description: "auth token",
                required: true,
            },
        ],
        requestBody:{
            content : {
                "application/json": {
                    schema : {
                        type : "object",
                        "$ref": "#/components/schemas/Hall"
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
            },
            401: {
                description: 'Unauthorized'
            }
        }
    }
}