
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationRouteObject
 * @property {string} [service] - The service name
 * @property {string} [socket] - The socket file name
 * @property {string} [auth] - Which authentication configuration to use
 */
TypeUtils.defineType("NorConfigurationRouteObject", {
    "service": "string",
    "socket": "string",
    "auth": "string"
});
