
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorManagerStatusActionObject
 *
 * @property {string} [name] - The service name to request a status for
 * @property {boolean} [production] - If enabled, only production services will be listed
 * @property {boolean} [development] - If enabled, only development services will be listed
 *
 */
TypeUtils.defineType("NorManagerStatusActionObject", {
    "name"        : "string",
    "production"  : "boolean",
    "development" : "boolean"
});

