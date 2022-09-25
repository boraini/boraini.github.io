<script lang="ts">
    import PageCard from "$lib/components/blog/PageCard.svelte";

    export let data : { index : { subdirectories : object, pages : object } };
</script>

<svelte:head>
    <title>boraini.com - {data.index.metadata.title}</title>
    <meta name="description" content={`Pages and Subblogs in ${data.index.metadata.title}`}>
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
<a href={entry[0]}><PageCard data={entry[1]} /></a>
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