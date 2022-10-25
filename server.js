const express = require('express');
const app = express();
const cors = require('cors');
const configureDB = require('./config/DB.js');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerDocs = require('./docs');

require('dotenv').config();
const PORT = process.env.PORT || 8000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
configureDB()

app.use(express.json({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs-2', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/city', require('./routes/cityRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/hall', require('./routes/cinemaHallRoutes'));
app.use('/api/movie', require('./routes/moviesRoutes'));
app.use('/api/onboard', require('./routes/onboardRoutes'));
app.use('/api/movies-to-hall', require('./routes/moviesWithHallRoutes'));
app.use('/api/movie-timing', require('./routes/movieTimingsRoutes'))

app.get("/", (req, res, next) => {
    res.send("Movies App is Up");
})

app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
})