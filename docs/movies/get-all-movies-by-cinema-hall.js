module.exports = {
    get : {
        description: "Get all movies by cinema hall",
        operationId: "getAllMoviesByCinemaHall",
        tags: ["Movie"],
        parameters: [
            {
                in: "path",
                name : "id",
                description : "Enter the parameter",
                required : true,
            }
        ],
        responses: {
            200 : {
                description: "Getting all the city"
            },
            500 : {
                description : "Internal Server Error"
            }
        }
    }
}