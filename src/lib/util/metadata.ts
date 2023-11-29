import type { SvelteComponent } from "svelte";

// I wrote this from the top of my head. Feel free to fix it.
export type Metadata = {
    title: string,
    author?: string,
    authors?: string[],
    excerpt?: string,
    date?: string,
    assetPath?: string,
    filePath?: string,
    tags?: string[],
    thumbnail?: string,
};

export type WithMetadata = {
    default?: SvelteComponent,
    metadata: Metadata,
};

export function dummyDirectoryMetadata(name : string): Metadata {
    return {
        title: name,
        excerpt: "",
        authors: [],
        tags: []
    };
}