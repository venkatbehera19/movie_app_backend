const mongoose = require('mongoose');
module.exports = {
    get : {
        description: "Get a city",
        operationId: "getACity",
        tags: ["City"],
        parameters: [
            {
                in: "path",
                name : "id",
                description : "Enter the parameter",
                required : true,
            }
        ],
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