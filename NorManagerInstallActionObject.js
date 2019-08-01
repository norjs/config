
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorManagerInstallActionObject
 *
 * @property  {string} [name] - The service name to install
 * @property {boolean} [production] - If enabled, only production services will be used
 * @property {boolean} [development] - If enabled, only development services will be used
 *
 */
TypeUtils.defineType("NorManagerInstallActionObject", {
    "name"        : "string",
    "production"  : "boolean",
    "development" : "boolean"
});

