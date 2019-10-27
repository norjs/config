import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS HTTP server instance in use by us.
 *
 * @interface
 */
export class HttpServerObject {

    /**
     * Starts to listen on a UNIX socket file.
     *
     * @param [path] { string } Hostname
     * @param arg { string | number | function } Path to UNIX Socket file, or a number, or a callback function
     * @param [callback] {function} The callback added to the 'listening' event.
     */
    listen (host, arg, callback) {}

    /**
     * Close the server
     */
    close () {}

}

TypeUtils.defineType(
    "HttpServerObject",
    TypeUtils.classToObjectPropertyTypes(HttpServerObject),
    {
        acceptUndefinedProperties: true
    }
);

// noinspection JSUnusedGlobalSymbols
export default HttpServerObject;
