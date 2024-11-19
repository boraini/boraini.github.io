<script>
	import TabNavigation from "$lib/components/TabNavigation.svelte";

    export let data;
</script>

<TabNavigation tabs={data.tabs} activeTab={data.activeTab} />

<slot/>
