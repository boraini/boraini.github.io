<script>
	import AuthorCard from '$lib/components/blog/AuthorCard.svelte';

	export let data;
</script>

<div class="page-card">
	<img class="thumbnail" src={data.thumbnail} alt={data.title} />
	<div class="min-height-section">
		<h1 class="title">{data.title}</h1>
		<p class="description">{data.excerpt}</p>
	</div>
	{#if data.authors}
		<ul class="authors">
			{#each data.authors as author}
				<li><AuthorCard {author} /></li>
			{/each}
		</ul>
	{/if}
	{#if data.author}
		<p>
			<AuthorCard author={data.author} />
		</p>
	{/if}
</div>

<style scoped lang="sass">
    $font-size: 1rem

    @use "./page-card-common.sass" with ($font-size: $font-size)

    .page-card
        display: flex
        flex-direction: column
        max-width: 25em
        min-height: 33em
        margin: 1em 1em
        padding: 0
        background-color: var(--page-background-spectacle)
        box-shadow: 0 1em 1em transparentize(black, 0.5)
        		
        .min-height-section
            flex-grow: 1
        
        .thumbnail
            width: 100%
            height: 18.75em
            object-fit: contain

</style>
