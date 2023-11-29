import path from "node:path/posix";
import { dummyDirectoryMetadata, type Metadata } from '$lib/util/metadata';
import { pageImport, urlImport } from "../page-import";

export const hydrate = false;

/** Replace the thumbnail with the Vite URL and the authors with author info objects.
 * 
 * @param metadata2 the metadata object to copy items from
 * @param fetch the fetch function provided by Vite
 * @returns the new metadata object
 */
export async function preprocessMetadata(metadata2: Metadata, fetch: any) {
    const metadata = {...metadata2};

    if (metadata.thumbnail) {
        metadata.thumbnail = urlImport[path.join(metadata.assetPath!, metadata.thumbnail as string)];
    }
    
    if (metadata.authors && typeof metadata.authors[0] == "string") {
        metadata.authors = await Promise.all(metadata.authors.map(name => fetch(`/blog/authorInfo/${name}`).then(r => r.json())));
    }

    return metadata;
}

/** Make a directory index with directory metadata, map of pages, and map of subdirectories.
 * 
 * @param params an object which should have a slug field
 * @param fetch the fetch function provided by Vite
 * @returns a promise for the directory object
 */
export async function loadDirectory({ params, fetch }: { params: { slug: string }, fetch: any }) {
    const index = await fetch('/blog/articles/index/' + params.slug + "/").then(r => r.json());

    for (let item in index.pages) {
        const metadata = (
            pageImport[index.pages[item].filePath]
        ).metadata || dummyDirectoryMetadata(item);

        // it is now set by mdsvex.config.js setAssetPath
        //metadata.assetPath = index.pages[item].assetPath;

        index.pages[item] = await preprocessMetadata(metadata, fetch);
    }

    for (let item in index.subdirectories) {
        let metadata = index.subdirectories[item];

        index.subdirectories[item] = await preprocessMetadata(metadata, fetch);
    }

    if (index.metadata.thumbnail) {
        let metadata = index.metadata;

        metadata.assetPath = index.metadata.assetPath;

        index.metadata = await preprocessMetadata(metadata, fetch);
    }

    return { index }
}