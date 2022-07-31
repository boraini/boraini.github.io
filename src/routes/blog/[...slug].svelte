<script context="module" lang="ts">
	import path from "node:path/posix";

    import { dummyMetadata } from './articles';

    const pageImport = import.meta.glob("./**/*.(md|png|jpg|svg|webp|gif)", { eager: true });

	function preprocessMetadata(metadata2) {
        const metadata = {...metadata2};

        if (metadata.thumbnail) {
            console.log("./" + path.join(metadata.assetPath, metadata.thumbnail));
            metadata.thumbnail = pageImport["./" + path.join(metadata.assetPath, metadata.thumbnail)].default;
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

            index.pages[item] = preprocessMetadata(metadata);
		}

        for (let item in index.subdirectories) {
            let metadata = index.subdirectories[item];
            
            index.subdirectories[item] = preprocessMetadata(metadata);
        }

		return {
			props: { data: { index } }
		}
	}
</script>

<script lang="ts">
	import IndexPage from './_IndexPage.svelte';
	export let data : { index : { subdirectories : object, pages : object } };
</script>

<IndexPage {data} />