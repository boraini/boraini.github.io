import path from "node:path/posix";
import fs from "node:fs/promises";

import indexingIgnore from "./indexing-ignore";

const pageImport = import.meta.glob("./**/*.md", { eager: true });

const config = {
    searchRoot: "./src/routes/blog",
    urlRoot: "/blog/"
}

const comparers = {
    newest(a, b) {
        return getArticleDate(a) - getArticleDate(b) > 0;
    }
}

function getArticleDate(article) {
    const date = Date.parse(article.metadata.date);
    if (isNaN(date)) {
        //throw "illegal date for article " + article.metadata.title;
        console.warn("illegal date for article " + article.metadata.title);
        return 0;
    }
    return date;
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
    let thisMetadata = {
        title: indexingPath,
        authors: []
    };

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
        } else if (dirent.name == "metadata.json") {
            thisMetadata = JSON.parse((await fs.readFile(itemPath)).toString());
        } else if (dirent.name.endsWith(".md")) {
            pages[itemUrl.substring(0, itemUrl.length - 3)] = {
                assetPath: indexingPath,
                filePath: path.join(indexingPath, dirent.name)
            };
        }
    }

    return { subdirectories, pages, metadata: thisMetadata };
}

function aggregateByTrait(trait) {
    const comparer = comparers[trait];

        if (!comparer) return { status: 400 };

        const result2 = Object.entries(pageImport).reduce(
        (current, handled) => comparer(handled[1], current[1]) ? handled : current, [null, {
            metadata: {
                title: "COMPARE DUMMY",
                date: "1970-1-1",
            }
        }]
        );

        const result = {...result2[1].metadata};

        return {
            [result2[0].replace(/\.md$/, "")]: result
        };
}

export async function GET({ url } : { url : URL }) {
    if (url.searchParams.has("trait")) {
        return {
            body: JSON.stringify(aggregateByTrait(url.searchParams.get("trait")))
        };
    }

    if (!url.searchParams.has("path")) {
        return { status: 400 };
    };

    const searchPath = url.searchParams.get("path");

    return {
        body: JSON.stringify(await indexDirectory(searchPath))
    };
}