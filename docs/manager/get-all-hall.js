module.exports = {
    get : {
        description: "Get all hall by manager Id",
        operationId: "getAllHall",
        tags: ["Manager"],
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
                description: "Getting all the city succesfully"
            },
            500 : {
                description : "Internal Server Error"
            }
        }
    }
}