module.exports = {
    post: {
        description: "creating a movie",
        tags: ["Movie"],
        operationId: "createMovie",
        parameters: [
            {
                in: "header",
                name: "x-auth-token",
                description: "auth token",
                required: true,
            }
        ],
        requestBody:{
            content : {
                "application/json": {
                    schema : {
                        type : "object",
                        "$ref": "#/components/schemas/Movies"
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