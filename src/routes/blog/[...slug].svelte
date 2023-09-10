<script context="module" lang="ts">
    export const hydrate = false;

	import path from "node:path/posix";

    import { dummyMetadata } from './articles';

    const pageImport = import.meta.glob("./**/*.(md|png|jpg|svg|webp|gif)", { eager: true });

	async function preprocessMetadata(metadata2, fetch) {
        const metadata = {...metadata2};

        if (metadata.thumbnail) {
            metadata.thumbnail = pageImport["./" + path.join(metadata.assetPath, metadata.thumbnail)].default;
        }
        
        if (metadata.authors && typeof metadata.authors[0] == "string") {
            metadata.authors = await Promise.all(metadata.authors.map(name => fetch(`/blog/authorInfo?nickname=${name}`).then(r => r.json())));
        }

        return metadata;
    }

	export async function load({ params, fetch }) {
		const index = await fetch('/blog/articles?path=' + params.slug).then((r) => r.json());

		for (let item in index.pages) {
            const metadata = (
                pageImport["./" + index.pages[item].filePath]
			).metadata || dummyMetadata(item);

            metadata.assetPath = index.pages[item].assetPath;

            index.pages[item] = await preprocessMetadata(metadata, fetch);
		}

        for (let item in index.subdirectories) {
            let metadata = index.subdirectories[item];
            
            index.subdirectories[item] = await preprocessMetadata(metadata, fetch);
        }

		return {
			props: { data: { index } }
		}
	}
</script>

<script lang="ts">
	import IndexPage from './_IndexPage.svelte';
	export let data : { index : { subdirectories : object, pages : object, metadata: object } };
</script>

<IndexPage {data} />