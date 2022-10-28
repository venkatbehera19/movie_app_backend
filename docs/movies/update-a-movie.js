module.exports = {
    put : {
        description: "Update a movie",
        operationId: "updateAMovie",
        tags: ["Movie"],
        parameters: [
            {
                in: "path",
                name : "id",
                description : "Enter the parameter",
                required : true,
            },
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
                        "$ref": "#/components/schemas/Movies"
                    }
                }
            }
        },
        responses: {
            200 : {
                description: "Getting all the city"
            },
            500 : {
                description : "Internal Server Error"
            },
            401 : {
                description : "Unauthrozied user"
            }
        }
    }
}