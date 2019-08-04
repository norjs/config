
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationRouteObject
 * @property {string} [service] - The service name (This is not used at the moment.)
 * @property {string} [socket] - The socket file name to route the request to
 * @property {string} [target] - The target address to route the request to; is socket is undefined
 * @property {string} [auth] - Which authentication configuration to use
 */
TypeUtils.defineType("NorConfigurationRouteObject", {
    "service": "string",
    "socket": "string",
    "target": "string",
    "auth": "string"
});
