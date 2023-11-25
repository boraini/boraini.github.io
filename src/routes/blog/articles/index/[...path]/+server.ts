import path from "node:path/posix";
import fs from "node:fs/promises";
import { json } from '@sveltejs/kit';

import { shouldNotIndex } from "../../should-not-index";
import { dummyDirectoryMetadata, type Metadata, type WithMetadata } from "$lib/util/metadata";

export const trailingSlash = "always";

const config = {
    searchRoot: "./src/articles",
    urlRoot: "/blog/"
}

/** Make a directory index with directory metadata, map of pages, and map of subdirectories.
 * 
 * For each article and subdirectory metadata, the asset path is set, which can later be used to key the pageImport map.
 * The key will be (assetPath / local path from the article).
 * 
 * @param indexingPath the path under src/articles/ to index
 * @returns a promise for the directory object
 */
async function indexDirectory(indexingPath : string) {
    if (indexingPath === "/") {
        indexingPath = "";
    }
    
    const subdirectories: Record<string, WithMetadata> = {};
    const pages: Record<string, Metadata> = {};
    let thisMetadata: Metadata = {
        title: indexingPath,
        authors: []
    };

    const dir = await fs.readdir(path.join(config.searchRoot, indexingPath), { withFileTypes: true });

    for (let dirent of dir) {
        if (shouldNotIndex(indexingPath, dirent.name)) continue;

        const itemPath = path.join(config.searchRoot, indexingPath, dirent.name);
        const itemUrl = path.join(config.urlRoot, indexingPath, dirent.name);

        let metadata = dummyDirectoryMetadata(dirent.name);
        
        if (!dirent.isFile()) {
            try {
                metadata = JSON.parse((await fs.readFile(path.join(itemPath, "./metadata.json"))).toString());
            } catch (e) {
                console.error(e);
            }

            metadata.assetPath = indexingPath;

            subdirectories[itemUrl] = metadata;
        } else if (dirent.name == "metadata.json") {
            thisMetadata = JSON.parse((await fs.readFile(itemPath)).toString());
        } else if (dirent.name.endsWith(".md")) {
            pages[itemUrl.substring(0, itemUrl.length - 3)] = {
                assetPath: indexingPath,
                filePath: path.join(indexingPath, dirent.name)
            };
        }

        thisMetadata.assetPath = "";
    }

    return { subdirectories, pages, metadata: thisMetadata };
}

export async function GET({ params }) {
    const searchPath = params.path;

    return json(await indexDirectory(searchPath));
}