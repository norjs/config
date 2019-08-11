
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationPortalObject
 * @property {string} [name] - The portal name
 * @property {string} [connect] - The remote portal address to connect
 * @property {string} [listen] - The local address to listen
 * @property {string} [auth] - The authentication to use
 */
TypeUtils.defineType("NorConfigurationPortalObject", {
    "name": "string",
    "connect": "string",
    "listen": "string",
    "auth": "string"
});
