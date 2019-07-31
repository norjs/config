const TypeUtils = require("@norjs/utils/Type");

/**
 * @typedef {Object} NorConfigurationServiceObject
 * @property {string} name - The service name
 * @property {string} path - Path to UNIX socket file hosting a local HTTP service
 * @property {string} [auth] - The authenticator name to use. If not specified, no authenticator will be used.
 * @property {HttpClient} client - The HTTP client
 */
TypeUtils.defineType("NorConfigurationServiceObject", {
    "name": "string",
    "path": "string"
});

