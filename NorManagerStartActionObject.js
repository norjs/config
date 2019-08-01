
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorManagerStartActionObject
 *
 * @property {string} [name] - The service name to start
 * @property {boolean} [production] - If enabled, only production services will be started
 * @property {boolean} [development] - If enabled, only development services will be started
 *
 */
TypeUtils.defineType("NorManagerStartActionObject", {
    "name"        : "string",
    "production"  : "boolean",
    "development" : "boolean"
});

