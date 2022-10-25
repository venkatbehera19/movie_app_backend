module.exports = {
    components: {
        schemas: {
            CreateUser: {
                type: "object",
                properties: {
                    "name": { "type": "string" },
                    "email": { "type": "string" },
                    "password": { "type": "string" },
                    "city": { "type": "string" },
                    "role": { "type": "string" },
                    "phone": { "type": "number" }
                }
            },
            SignInUser : {
                type : "object",
                properties : {
                    email : { "type":"string"},
                    password : { "type":"string"}
                }
            },
        }
    }
}