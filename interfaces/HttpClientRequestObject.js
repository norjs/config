import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS HTTP module for client connections.
 *
 * @interface
 */
export class HttpClientRequestObject {

    /**
     *
     * @param eventName {string}
     * @param callback {function}
     */
    on (eventName, callback) {}

    /**
     *
     * @param chunk {string}
     * @param encoding {string}
     */
    write (chunk, encoding) {}

    end () {}

}

TypeUtils.defineType(
    "HttpClientRequestObject",
    TypeUtils.classToObjectPropertyTypes(HttpClientRequestObject),
    {
        acceptUndefinedProperties: true
    }
);

// noinspection JSUnusedGlobalSymbols
export default HttpClientRequestObject;
