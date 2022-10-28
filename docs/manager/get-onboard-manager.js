module.exports = {
    get : {
        description: "Get all onBoard manager",
        operationId: "getAllOnBoardmanager",
        tags: ["Manager"],
        parameters: [
            {
                in: "header",
                name: "x-auth-token",
                description: "auth token",
                required: true,
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