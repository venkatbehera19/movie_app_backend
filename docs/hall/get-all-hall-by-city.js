module.exports = {
    get : {
        description: "Get all hall by City ID",
        operationId: "getAllHallByCity",
        tags: ["Cinema Hall"],
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
            },
            401: {
                description: 'Unauthorized'
            }
        }
    }
}