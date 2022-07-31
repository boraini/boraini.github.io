<script context="module" lang="ts">
    import path from "node:path/posix";

    import { dummyMetadata } from './articles';

    const pageImport = import.meta.glob("./**/*.(md|png|jpg|svg|webp|gif)", { eager: true });

    function preprocessMetadata(metadata) {
        if (metadata.thumbnail) {
            metadata.thumbnail = pageImport["./" + path.join(metadata.assetPath, metadata.thumbnail)].default;
        }
    }

	export async function load({ fetch }) {
		const index = await fetch('/blog/articles?path=').then((r) => r.json());

		for (let item in index.pages) {
            const metadata = (
                pageImport["./" + index.pages[item].filePath]
			).metadata || dummyMetadata(item);

            metadata.assetPath = index.pages[item].assetPath;

            preprocessMetadata(metadata);

			index.pages[item] = metadata;
		}

        for (let item in index.subdirectories) {
            const metadata = index.subdirectories[item];
            
            preprocessMetadata(metadata);
        }

		return {
			props: { data: { index } }
		};
	}
</script>

<script>
	import IndexPage from './_IndexPage.svelte';
	export let data;
</script>

<IndexPage {data} />
