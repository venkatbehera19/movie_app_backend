module.exports = {
    delete : {
        description: "delete a movie",
        operationId: "deleteAMovie",
        tags: ["Movie"],
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
            }
        ],
        responses: {
            200 : {
                description: "deleted Successfully"
            },
            500 : {
                description : "Internal Server Error"
            },
            401 : {
                description : "Unauthorized user"
            }
        }
    }
}