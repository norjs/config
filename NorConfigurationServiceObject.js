
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationServiceObject
 * @property {string} [name] - The service name
 * @property {boolean} [production] - If true, this service is for production mode
 * @property {boolean} [development] - If true, this service is for development mode
 * @property {Object<string, string>} [env] - Optional ENV options
 * @property {string} [path] - Path to the service root directory (where package.json exists), or a package name
 */
TypeUtils.defineType("NorConfigurationServiceObject", {
    "name": "string",
    "path": "string",
    "production": "boolean",
    "development": "boolean",
    "env": "Object.<string, string>",
});

