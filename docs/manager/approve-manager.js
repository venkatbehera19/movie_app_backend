module.exports = {
    post: {
        description: "approve Manager API",
        tags: ["Manager"],
        operationId: "approveManager",
        parameters: [
            {
                in: "header",
                name: "x-auth-token",
                description: "auth token",
                required: true,
            },
            {
                in: "path",
                name: "id",
                description: "User Object",
                required: true,
            }
        ],
        responses: {
            200: {
                description: 'User approved Sucessfully'
            },
            500: {
                description: 'Internal Server Error'
            }
        }
    }
}