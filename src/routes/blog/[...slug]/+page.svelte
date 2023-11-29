<script lang="ts">
    import IndexPage from '../IndexPage.svelte';

    export let data;
</script>

<svelte:head>
    {#if data.component}
    
    {#if data.pageType === "article"}
        <meta name="title" property="og:title" content={data.metadata.title}>
        <meta name="description" property="og:description" content={data.metadata.excerpt}>

        <meta property="og:type" content="article">
        <meta property="article:author" content={data.metadata.author.page}>
        {#if data.metadata.thumbnail}
        <meta property="og:image" content={data.metadata.thumbnail}>
        <meta property="og:image:alt" content={data.metadata.title}>
        {/if}
    {/if}

    {#if data.pageType === "author"}
        <meta name="title" property="og:title" content={`${data.metadata.name}'s Profile`}>
        <meta name="description" property="og:description" content={`About ${data.metadata.name}`}>

        <meta property="og:type" content="profile">
        <meta property="profile:username" content={data.metadata.name}>
    {/if}

    {/if}
</svelte:head>

{#if data.component}
<svelte:component this={data.component} data={data.metadata}/>
{:else}
<IndexPage data={data}/>
{/if}