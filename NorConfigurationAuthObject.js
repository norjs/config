
const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationAuthObject
 * @property {string} path - Path to the authenticator file which can be require()'d
 * @property {string|Object} config - Configuration for authenticator; if a string, excepts a path to a JSON file.
 *
 */
TypeUtils.defineType("NorConfigurationAuthObject", {
    "path": "string",
    "config": "string|Object"
});
