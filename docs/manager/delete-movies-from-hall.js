module.exports = {
    delete : {
        description: "delete movie from hall",
        operationId: "deleteMovieFromHall",
        tags: ["Manager"],
        parameters: [
            {
                in: "path",
                name : "id",
                description : "Enter the parameter",
                required : true
            },
            {
                in: "header",
                name: "x-auth-token",
                description: "auth token",
                required: true,
            },
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