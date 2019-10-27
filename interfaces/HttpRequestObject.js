import TypeUtils from "@norjs/utils/Type";

/**
 * @interface
 */
export class HttpRequestObject {

    /**
     * @returns {string}
     */
    get method () {}

    /**
     * @returns {string}
     */
    get url () {}

    /**
     *
     * @param eventName {string|Symbol}
     * @param listener {Function}
     * @returns {HttpRequestObject}
     */
    on (eventName, listener) {}

}

TypeUtils.defineType(
    "HttpRequestObject",
    TypeUtils.classToObjectPropertyTypes(HttpRequestObject),
    {
        acceptUndefinedProperties: true
    }
);

export default HttpRequestObject;
