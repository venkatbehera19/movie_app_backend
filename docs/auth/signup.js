module.exports = {
    post : {
        tags : ["Authentication"],
        description : "Creating a new User",
        operationId : "signup",
        parameters : [{
            in : "body",
            name : "body",
            description : "User Object",
            required : true,
            schema : {
                type : "object",
                $ref : "#/components/schemas/CreateUser"
            }
        }],
        responses : {
            200 : {
                description : 'User Created Sucessfully'
            },
            500 : {
                description : 'Internal Server Error'
            }
        }
    }
}