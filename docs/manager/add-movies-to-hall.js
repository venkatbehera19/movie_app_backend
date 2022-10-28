module.exports = {
    post: {
        description: "add a movies to the specified hall",
        tags: ["Manager"],
        operationId: "addMoviesToHall",
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
                        "$ref": "#/components/schemas/MoviesToHall"
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