
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationRouteObject
 * @property {string} [service] - The service name (This is not used at the moment.)
 * @property {string} [socket] - The socket file name to route the request to
 * @property {string} [target] - The target address to route the request to; is socket is undefined
 * @property {string} [auth] - Which authentication configuration to use
 * @property {boolean} [development] - Not implemented yet
 * @property {boolean} [production] - Not implemented yet
 */
TypeUtils.defineType("NorConfigurationRouteObject", {
    "service": "string|undefined",
    "socket": "string|undefined",
    "target": "string|number|undefined",
    "auth": "string|undefined",
    "development": "boolean|undefined",
    "production": "boolean|undefined"
});
