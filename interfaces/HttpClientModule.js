// Interfaces
require('./HttpClientRequestObject.js');
require('./HttpClientResponseObject.js');

/**
 *
 * @type {typeof TypeUtils}
 */
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} HttpClientOptionsObject
 *
 * @prototype {Object|boolean} agent -
 * @prototype         {string} auth - Eg. `user:password`
 * @prototype       {Function} createConnection
 * @prototype         {number} defaultPort -
 * @prototype         {number} family - Eg. `4` or `6`
 * @prototype         {Object} headers -
 * @prototype         {string} host -
 * @prototype         {string} hostname - Alias for `host`, try not to use if possible.
 * @prototype         {string} localAddress -
 * @prototype         {string} method -
 * @prototype         {string} path - Eg. `/index.html?page=3`
 * @prototype         {number} port -
 * @prototype         {string} protocol - Eg. `http:`
 * @prototype        {boolean} setHost -
 * @prototype         {string} socketPath -
 * @prototype         {number} timeout - Milliseconds
 */
TypeUtils.defineType(
    "HttpClientOptionsObject",
    {
        "agent": "object|boolean|undefined",
        "auth": "string|undefined",
        "createConnection": "Function|undefined",
        "defaultPort": "number|undefined",
        "family": "number|undefined",
        "headers": "object|undefined",
        "host": "string|undefined",
        "hostname": "string|undefined",
        "localAddress": "string|undefined",
        "method": "string|undefined",
        "path": "string|undefined",
        "port": "number|undefined",
        "protocol": "string|undefined",
        "setHost": "boolean|undefined",
        "socketPath": "string|undefined",
        "timeout": "number|undefined"
    },
    {
        acceptUndefinedProperties: true
    }
);

/**
 * Subset of NodeJS HTTP module for client connections.
 *
 * @interface
 */
class HttpClientModule {

    /**
     *
     * @param options {HttpClientOptionsObject}
     * @param callback {function(HttpClientResponseObject)}
     * @returns {HttpClientRequestObject}
     */
    request (options, callback) {}

}

TypeUtils.defineType(
    "HttpClientModule",
    TypeUtils.classToObjectPropertyTypes(HttpClientModule),
    {
        acceptUndefinedProperties: true
    }
);

/**
 *
 * @type {typeof HttpClientModule}
 */
module.exports = HttpClientModule;
