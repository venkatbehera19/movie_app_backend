module.exports = {
    post: {
        description: "creating a city",
        operationId: "createCity",
        parameters: [
            {
                in: "body",
                name: "body",
                description: "User Object",
                required: true,
                schema: {
                    "type": "object",
                    "$ref": "#/components/schemas/SignInUser"
                }
            }
        ],
        responses: {
            200: {
                description: 'User Created Sucessfully'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
}