module.exports = {
    post: {
        tags: ["Authentication"],
        description: "Signing In a User",
        operationId: "signin",
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