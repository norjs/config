const TypeUtils = require("@norjs/utils/Type");

require('./NorConfigurationServiceObject.js');

/**
 * @typedef {Object} NorConfigurationObject
 * @property {string} name - The root service name
 * @property {Object.<string, NorConfigurationServiceObject>} [services] - Sub services
 * @property {Object.<string, NorConfigurationRouteObject>} [routes] - Routes
 * @property {Object.<string, NorConfigurationAuthObject>} [auth] - Authentication settings
 */
TypeUtils.defineType("NorConfigurationObject", {
    "name": "string",
    "services": "Object.<string, NorConfigurationServiceObject>",
    "routes": "Object.<string, Object>",
    "auth": "Object.<string, Object>"
});
