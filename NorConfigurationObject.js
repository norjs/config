const TypeUtils = require("@norjs/utils/Type");

require('./NorConfigurationServiceObject.js');
require('./NorConfigurationPortalObject.js');
require('./NorConfigurationAuthObject.js');
require('./NorConfigurationRouteObject.js');

/**
 * @typedef {Object.<string,NorConfigurationServiceObject>} NorConfigurationServiceMap
 */
TypeUtils.defineType("NorConfigurationServiceMap", "Object.<string,NorConfigurationServiceObject>");

/**
 * @typedef {Object.<string,NorConfigurationPortalObject>} NorConfigurationPortalMap
 */
TypeUtils.defineType("NorConfigurationPortalMap", "Object.<string,NorConfigurationPortalObject>");

/**
 * @typedef {Object.<string,NorConfigurationRouteObject>} NorConfigurationRouteMap
 */
TypeUtils.defineType("NorConfigurationRouteMap", "Object.<string,NorConfigurationRouteObject>");

/**
 * @typedef {Object.<string,NorConfigurationAuthObject>} NorConfigurationAuthMap
 */
TypeUtils.defineType("NorConfigurationAuthMap", "Object.<string,NorConfigurationAuthObject>");

/**
 * @typedef {Object} NorConfigurationObject
 * @property                     {string}  name - The root service name
 * @property {NorConfigurationServiceMap} [services] - Sub services
 * @property   {NorConfigurationRouteMap} [routes] - Routes
 * @property    {NorConfigurationAuthMap} [auth] - Authentication settings
 */
TypeUtils.defineType("NorConfigurationObject", {
    "name": "string",
    "services": "NorConfigurationServiceMap|undefined",
    "portals": "NorConfigurationPortalMap|undefined",
    "routes": "NorConfigurationRouteMap|undefined",
    "auth": "NorConfigurationAuthMap|undefined"
});
