
<svelte:head>
    <script src="/scripts/dark-mode.js"></script>
</svelte:head>

<script>
    import Navigation from "$lib/components/Navigation.svelte";

    export let darkModeApp;
</script>

<div class="app" class:dark-mode={darkModeApp}>
<Navigation bind:darkMode={darkModeApp} />
<slot/>
</div>

<style global lang="sass">
    @use "src/lib/stylesheets/theme.sass"
    @use "src/lib/stylesheets/layout.sass"
</style>