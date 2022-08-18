<script>
	export let nickname;
    export let name;
</script>

<svelte:head>
	<title>boraini.com - {name}'s Profile</title>
	<meta name="description" content={`About ${name}`}>
</svelte:head>

<div class="post-margin">
	<main class="post">
		<h1 class="post-title">{name}</h1>
        <h2 class="post-description">{nickname}</h2>
		<slot />
	</main>
</div>

<style lang="sass">
    @use "src/lib/stylesheets/blog"
</style>
