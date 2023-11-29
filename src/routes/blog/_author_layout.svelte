<script>
	import SocialLinks from "$lib/components/SocialLinks.svelte";

	export let nickname;
    export let name;
	export let social;
</script>

<svelte:head>
	<title>boraini.com - {name}'s Profile</title>
</svelte:head>

<div class="post-margin">
	<article class="post">
		<h1 class="post-title">{name}</h1>
        <h2 class="post-description">{nickname}</h2>
		<span class="social-links"><SocialLinks social={social} /></span>
		<slot />
	</article>
</div>

<style scoped lang="scss">
    @use "src/lib/stylesheets/blog";

    .social-links {
      font-size: 2rem;
    }
</style>
