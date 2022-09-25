<script context="module" lang="ts">
	import { pre } from "$lib/components/blog/mdsvex-custom-elements";
    export { pre };
</script>

<script>
    import AuthorCard from '$lib/components/blog/AuthorCard.svelte';

	export let title;
	export let excerpt;
	export let author;
	export let thumbnail;
	export let tags;
	export let date;
</script>

<svelte:head>
	<title>boraini.com - {title}</title>
	<meta name="description" content={excerpt}>
	<link rel="stylesheet" href="/stylesheets/prism-duotone-dark.css" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css" />
</svelte:head>

<div class="post-margin">
	<article class="post">
		<h1 class="post-title">{title}</h1>
		{#if excerpt}
		<h2 class="post-description">{excerpt}</h2>
		{/if}
		<p>
		{#if date}
		on {date}
		{/if}
		{#if author}
		by <a href={author.page}><AuthorCard author={author} /></a>
		{/if}
		</p>
		<slot />
	</article>
</div>

<style lang="sass">
    @use "src/lib/stylesheets/blog"
</style>
