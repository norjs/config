import TypeUtils from "@norjs/utils/Type";

/**
 * @typedef {Object} NorManagerStatusActionObject
 *
 * @property {string} [name] - The service name to request a status for
 * @property {boolean} [production] - If enabled, only production services will be listed
 * @property {boolean} [development] - If enabled, only development services will be listed
 * @property {boolean} [autoStart] - If enabled, only match to services which would be started at start up
 *
 */
TypeUtils.defineType("NorManagerStatusActionObject", {
    "name"        : "string",
    "production"  : "boolean",
    "development" : "boolean",
    "autoStart"   : "boolean"
});

