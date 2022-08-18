<script context="module">
	export async function load({ fetch }) {
		return {
			props: {
                newArticle: await fetch("/blog/articles?trait=newest").then(r => r.json())
            }
		};
	}
</script>

<script>
	import CarouselPageCard from '$lib/components/blog/CarouselPageCard.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Boraini from './blog/authors/boraini.md';

    export let newsScroll = true;

    export let newArticle;

    function onMouseInNews(e) {
        newsScroll = false;
    }

    function onMouseOutNews(e) {
        newsScroll = true;
    }
</script>

<svelte:head>
    <title>boraini.com - Mert Bora İnevi's Personal Website</title>
    <meta name="description" content="Welcome to my website!">
</svelte:head>

<main>
	<section id="news">
        <h1>News</h1>
		<div class="news-container" on:mouseenter={onMouseInNews} on:mouseleave={onMouseOutNews}>
			<div class="news">
				<Carousel numberOfPages={2} autoScroll={newsScroll}>
					<a href="/blog/authors/boraini/" class="profile-container">
						<section class="profile">
							<Boraini />
						</section>
					</a>
					<CarouselPageCard index={newArticle}/>
				</Carousel>
			</div>
		</div>
	</section>
</main>

<style scoped lang="sass">
    main
        margin: 2em auto
        padding: 1em
        max-width: 80rem
        background-color: var(--page-background-spectacle)

        .news-container
            position: relative
            height: min(75vw, 25rem)
            background-color: var(--page-background-field)
            overflow: hidden

            &::before, &::after
                display: block
                position: absolute
                top: 0
                width: 3px
                height: 100%
                content: ""
                box-shadow: 0px 0px 5px black

            &::before
                right: 100%

            &::after
                left: 100%

            .news
                margin: auto
                max-width: 100%
                height: 100%
                aspect-ratio: 4/3

            .profile-container
                border: 1px solid var(--page-foreground)
                overflow: hidden
                text-decoration: none

                .profile
                    box-sizing: border-box
                    height: 100%

                :global(.post-margin)
                    padding: 0

                :global(.post-margin), :global(.post)
                    margin: 0
                    box-sizing: border-box
                    width: 100%
                    height: 100%

</style>
