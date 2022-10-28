const basicInfo = require('./basicInfo');
const serverInfo = require('./server');
const componentsInfo = require('./components');
const tagsInfo = require('./tags');

const authInfo = require('./auth');
const cityInfo = require('./city');
const managerInfo = require('./manager');
const moviesInfo = require('./movies');
const hallInfo = require('./hall');
const timmingsInfo = require('./movie-timings');
const securityInfo = require('./security');

const requests = {
    paths: {
        ...authInfo.paths,
        ...cityInfo.paths,
        ...managerInfo.paths,
        ...moviesInfo.paths,
        ...timmingsInfo.paths,
        ...hallInfo.paths,
    }
}

module.exports = {
    ...basicInfo,
    ...serverInfo,
    ...securityInfo,
    ...componentsInfo,
    ...tagsInfo,
    ...requests
}