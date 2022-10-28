const mongoose = require('mongoose');
module.exports = {
    get : {
        description: "Get all Movie",
        operationId: "getAllMovie",
        tags: ["Movie"],
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