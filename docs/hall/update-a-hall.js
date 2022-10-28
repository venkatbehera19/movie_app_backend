module.exports = {
    put : {
        description: "upadte a hall",
        operationId: "updateAHall",
        tags: ["Cinema Hall"],
        parameters: [
            {
                in: "header",
                name: "x-auth-token",
                description: "auth token",
                required: true,
            },
            {
                in: "path",
                name : "id",
                description : "Enter the parameter",
                required : true,
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
            200 : {
                description: "Getting all the city"
            },
            500 : {
                description : "Internal Server Error"
            },
            401: {
                description: 'Unauthorized'
            }
        }
    }
}