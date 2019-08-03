
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorManagerInstallActionObject
 *
 * @property  {string} [name] - The service name to install
 * @property {boolean} [production] - If enabled, only production services will be used
 * @property {boolean} [development] - If enabled, only development services will be used
 * @property {boolean} [autoStart] - If enabled, only match to services which would be started at start up
 * @property {boolean} [debug] - If enabled, will try to capture stdout from the install command. Defaults to false.
 *
 */
TypeUtils.defineType("NorManagerInstallActionObject", {
    "name"        : "string",
    "production"  : "boolean",
    "development" : "boolean",
    "autoStart"   : "boolean",
    "debug"       : "boolean"
});
