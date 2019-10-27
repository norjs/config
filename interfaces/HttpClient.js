import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS HTTP module for client connections.
 *
 * @interface
 */
export class HttpClient {

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

export default HttpClient;
