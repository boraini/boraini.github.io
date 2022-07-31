<script lang="ts">
    import PageCard from "./_PageCard.svelte";

    export let data : { index : { subdirectories : object, pages : object } };
</script>

<h1>Subblogs</h1>
{#each Object.entries(data.index.subdirectories) as entry}
<a href={entry[0]}><PageCard data={entry[1]} /></a>
{/each}

<h1>Pages</h1>
{#each Object.entries(data.index.pages) as entry}
<a href={entry[0]}><PageCard data={entry[1]} /></a>
{/each}