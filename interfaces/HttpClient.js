// Interfaces

/**
 *
 * @type {typeof TypeUtils}
 */
const TypeUtils = require("@norjs/utils/Type");

/**
 * Subset of NodeJS HTTP module for client connections.
 *
 * @interface
 */
class HttpClient {

    // noinspection JSUnusedGlobalSymbols
    /**
     *
     * @param target {string}
     * @param params {{}}
     * @returns {Promise}
     */
    getJson (target, params = undefined) {}

    /**
     *
     * @param target {string}
     * @param params {{}}
     * @param input {*}
     * @returns {Promise<any> | !Promise<*>}
     */
    postJson (target, params = undefined, {input = undefined} = {}) {}

}

TypeUtils.defineType(
    "HttpClient",
    TypeUtils.classToObjectPropertyTypes(HttpClient),
    {
        acceptUndefinedProperties: true
    }
);

/**
 *
 * @type {typeof HttpClient}
 */
module.exports = HttpClient;
