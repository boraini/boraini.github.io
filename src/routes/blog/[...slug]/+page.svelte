<script lang="ts">
    import IndexPage from '../IndexPage.svelte';

    export let data;
</script>

{#if data.component}
<svelte:component this={data.component} data={data.metadata}/>
{:else}
<IndexPage data={data}/>
{/if}