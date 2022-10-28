module.exports = {
    delete : {
        description: "delete a hall",
        operationId: "deleteAHall",
        tags: ["Movie Timmings And Seats"],
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
            }
        ],
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