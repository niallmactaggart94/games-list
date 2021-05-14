const data = require('../../../games.json');
const _ = require('lodash');
/**
 * @param req
 * @param res
 * @description Function that will return a response if a list and divider has been passed in as request headers
 * @returns {*} Response to show either an array broken up into N, or an error if the required headers have not been provided
 */
const getData = (req, res) => {
    _.forEach(data, (game, index) => game.id = index + 1);
    res.send(data);
};


module.exports = {
    getData
};
