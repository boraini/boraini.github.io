import path from "node:path/posix";
import fs from "node:fs/promises";

import indexingIgnore from "./indexing-ignore";

const config = {
    searchRoot: "./src/routes/blog",
    urlRoot: "/blog/"
}

export function dummyMetadata(name : string) {
    return {
        title: name,
        excerpt: "",
        authors: [],
        tags: []
    };
}

async function indexDirectory(indexingPath : string) {
    const subdirectories = {};
    const pages = {};

    const dir = await fs.readdir(path.join(config.searchRoot, indexingPath), { withFileTypes: true });

    for (let dirent of dir) {
        if (dirent.name.startsWith("_")) continue;

        if (indexingIgnore.indexOf(path.join(indexingPath, dirent.name)) != -1) continue;

        const itemPath = path.join(config.searchRoot, indexingPath, dirent.name);
        const itemUrl = path.join(config.urlRoot, indexingPath, dirent.name);

        let metadata = dummyMetadata(dirent.name);

        if (!dirent.isFile()) {
            try {
                metadata = JSON.parse((await fs.readFile(path.join(itemPath, "./metadata.json"))).toString());
            } catch (e) {
                console.error(e);
            }

            metadata.assetPath = indexingPath;

            subdirectories[itemUrl] = metadata;
        } else if (dirent.name.endsWith(".md")) {
            pages[itemUrl.substring(0, itemUrl.length - 3)] = {
                assetPath: indexingPath,
                filePath: path.join(indexingPath, dirent.name)
            };
        }
    }

    return { subdirectories, pages };
}

export async function GET({ url } : { url : URL }) {
    if (!url.searchParams.has("path")) {
        return { status: 400 };
    };

    const searchPath = url.searchParams.get("path");

    return {
        body: JSON.stringify(await indexDirectory(searchPath))
    };
}