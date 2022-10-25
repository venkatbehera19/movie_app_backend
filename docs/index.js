const basicInfo = require('./basicInfo');
const serverInfo = require('./server');
const componentsInfo = require('./components');
const tagsInfo = require('./tags');
const authInfo = require('./auth');
const cityInfo = require('./city');

module.exports = {
    ...basicInfo,
    ...serverInfo,
    ...componentsInfo,
    ...tagsInfo,
    ...authInfo,
    ...cityInfo
}