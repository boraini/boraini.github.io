<script lang="ts">
    import PageCard from "$lib/components/blog/PageCard.svelte";

    export let data : { index : { subdirectories : object, pages : object, metadata : object } };
</script>

<svelte:head>
    <title>boraini.com - {data.index.metadata.title}</title>

    <meta name="title" property="og:title" content={`boraini.com - ${data.index.metadata.title}`}/>
    <meta name="description" property="og:description" content={`Pages and Subblogs in ${data.index.metadata.title}`}>
    {#if data.index.metadata.thumbnail}
    <!-- TODO: Add og:image:type, og:image:width, and og:image:height (impossible) -->
    <meta name="image" property="og:image" content={data.index.metadata.thumbnail}/>
    {/if}
</svelte:head>

<main class="index">
{#if Object.keys(data.index.subdirectories).length != 0}
<h1>Subblogs</h1>
<section class="index-section">
{#each Object.entries(data.index.subdirectories) as entry}
<a href={entry[0]}><PageCard data={entry[1]} /></a>
{/each}
</section>
{/if}

{#if Object.keys(data.index.pages).length != 0}
<h1>Pages</h1>
<section class="index-section">
{#each Object.entries(data.index.pages) as entry}
<a href={entry[0]} data-sveltekit-reload><PageCard data={entry[1]} /></a>
{/each}
</section>
{/if}
</main>

<style scoped lang="sass">
    .index
        display: block
        margin: 0
        padding: 1em

        .index-section
            display: flex
            flex-wrap: wrap
            justify-content: center 

            & > a
                text-decoration: none

</style>