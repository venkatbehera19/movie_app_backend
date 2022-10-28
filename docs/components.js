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
            City :{
                type : "object",
                properties : {
                    name : { "type" : "string", "description": "Update the name", } 
                }
            },
            MoviesToHall:{
                type : "object",
                properties : {
                    hall_id: { type : "string" },
                    movies_id: { type : "string" }
                }
            },
            Onboard : {
                type : "object",
                properties : {
                    "name": { "type": "string" },
                    "email": { "type": "string" },
                    "password": { "type": "string" },
                    "address": { "type": "string" },
                    "phone": { "type": "number" },
                    "hallDetails" : {
                        type : "object",
                        properties : {
                            name : { type : "string" } ,
                            city : { type : "string" } ,
                            noOfSeat : { type : "number" } ,
                            address : { type : "string" } ,
                        }
                    }
                }
            },
            Movies : {
                type: "object",
                properties : {
                    name: { "type": "string" },
                    language: { "type": "string" },
                    description: { "type": "string" },
                    trailerUrl: { "type": "string" },
                    posterUrl: { "type": "string" },
                    releaseDate: { "type": "string" },
                    genres: { 
                        "type" : "array" ,
                         items : {
                        type : 'string'
                    }}
                }
            },
            Hall : {
                type : "object",
                properties : {
                    name : { type : 'string'},
                    address : { type : 'string'},
                    city : { type : 'string'},
                    manager : { type : 'string'},
                }
            },
            MovieTimming : {
                type : 'object',
                properties : {
                    hall_id : { type : 'string'},
                    movie_id : { type : 'string'},
                    time : { type : 'string'},
                }
            }
        }
    }
}