<div class="carousel" style="--shown-page: {shownPage}; --number-of-pages: {numberOfPages}">
    <div class="carousel-items">
        <slot />
    </div>
</div>

<script>
    import { onMount, afterUpdate } from "svelte";

    export let numberOfPages = 1;
    export let shownPage = 0;
    export let autoScroll = true;
    export let scrollInterval = 3000;

    let scrolling = numberOfPages > 1 && autoScroll;

    let scrollLoop;

    function scrollRight() {
        shownPage = (shownPage + 1) % numberOfPages;
    }

    function scrollLeft() {
        shownPage = (shownPage - 1 + numberOfPages) % numberOfPages;
    }

    onMount(() => {
        if (scrolling) scrollLoop = setInterval(scrollRight, scrollInterval);
    });

    afterUpdate(() => {
        if (!autoScroll && scrolling) {
            clearInterval(scrollLoop);
        }

        if (numberOfPages > 1 && autoScroll && !scrolling) {
            scrollLoop = setInterval(scrollRight, scrollInterval);
        }

        scrolling = autoScroll;
    });
</script>

<style scoped lang="sass">
    .carousel
        width: 100%
        height: 100%

        .carousel-items
            position: relative
            display: grid
            padding: 0
            grid-template-columns: repeat(var(--number-of-pages), 1fr)
            grid-template-rows: 100%
            column-gap: 0
            width: calc(100% * var(--number-of-pages))
            height: 100%
            left: calc(-100% * var(--shown-page))
            transition: left 0.5s
</style>