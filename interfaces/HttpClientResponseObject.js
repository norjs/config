import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS HTTP module for client connections.
 *
 * @interface
 */
export class HttpClientResponseObject {

    /**
     * @returns {number}
     */
    get statusCode () {}

    /**
     *
     * @param eventName {string}
     * @param callback {function}
     */
    on (eventName, callback) {}

}

TypeUtils.defineType(
    "HttpClientResponseObject",
    TypeUtils.classToObjectPropertyTypes(HttpClientResponseObject),
    {
        acceptUndefinedProperties: true
    }
);

// noinspection JSUnusedGlobalSymbols
export default HttpClientResponseObject;
