import path from "node:path/posix";

const indexingIgnore = [
    "authors",
];

/** Returns whether the given slug should not be indexed by aggregators.
 * 
 * @param parentPath the parent path to be indexed which shouldn't start with anything in indexingIgnore
 * @param slug the item name which shouldn't start with _
 * @returns true iff the path should not be indexed
 */
export function shouldNotIndex(parentPath: string, slug?: string): boolean {
    if (slug?.startsWith("_")) return true;

    const joined = slug ? path.join(parentPath, slug) : parentPath;

    return indexingIgnore.some(p => joined.startsWith(p));
}