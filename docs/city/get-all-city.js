module.exports = {
    get : {
        description: "Get All the city",
        operationId: "getAllCity",
        tags: ["City"],
        parameters: [],
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