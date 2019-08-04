
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorManagerStopActionObject
 *
 * @property {string} [name] - The service name to stop
 * @property {boolean} [production] - If enabled, only production services will be stopped
 * @property {boolean} [development] - If enabled, only development services will be stopped
 */
TypeUtils.defineType("NorManagerStopActionObject", {
    "name"        : "string",
    "production"  : "boolean",
    "development" : "boolean"
});

