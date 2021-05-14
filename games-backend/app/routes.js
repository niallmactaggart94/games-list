/**
 *
 * @module App Routes
 * @description Module that defines the initial routes that the application
 * will handle and adds that all other routes send a 404 error
 */

const gamesList = require('./controllers/gamesList/');
module.exports = routes;

/**
 *
 * @param app {object} Express application object to be configured with routes
 */
function routes(app) {
    /**
     * @name route /gamesList
     * @description Route for all traffic coming in on url: http://host:port/gamesList
     * Will be routed to the Games List controller
     */
    app.use('/gamesList', gamesList);


    /**
     * @name route /*
     * @description All undefined asset or api requests should return a 404.
     * All other routes should redirect to the index.html
     */
    app.route('/*').get((req, res) => {
        res.sendStatus(404);
    });
}
