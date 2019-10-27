import TypeUtils from "@norjs/utils/Type";

/**
 * Subset of NodeJS File System stats object in use by us.
 *
 * @interface
 */
export class FileSystemStatsObject {

    /**
     * @returns {boolean}
     */
    isSocket () {}

}

TypeUtils.defineType(
    "FileSystemStatsObject",
    TypeUtils.classToObjectPropertyTypes(FileSystemStatsObject),
    {
        acceptUndefinedProperties: true
    }
);

// noinspection JSUnusedGlobalSymbols
export default FileSystemStatsObject;
