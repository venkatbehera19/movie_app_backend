module.exports = {
    post : {
        tags : ["Authentication"],
        description : "Creating a new User",
        operationId : "signup",
        parameters : [],
        requestBody:{
            content : {
                "application/json": {
                    schema : {
                        type : "object",
                        "$ref": "#/components/schemas/CreateUser"
                    }
                }
            }
        },
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