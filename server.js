const express = require('express');
const app = express();
const cors = require('cors');
const configureDB = require('./config/DB.js');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs');

require('dotenv').config();
const PORT = process.env.PORT || 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
configureDB()
app.use(express.json({ extended: false }));
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/v1/api/city', require('./routes/cityRoutes'));
app.use('/v1/api/user', require('./routes/userRoutes'));
app.use('/v1/api/hall', require('./routes/cinemaHallRoutes'));
app.use('/v1/api/movie', require('./routes/moviesRoutes'));
app.use('/v1/api/onboard', require('./routes/onboardRoutes'));
app.use('/v1/api/movies-to-hall', require('./routes/moviesWithHallRoutes'));
app.use('/v1/api/movie-timing', require('./routes/movieTimingsRoutes'))

app.get("/", (req, res, next) => {
    res.send("Movies App is Up");
})

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
})