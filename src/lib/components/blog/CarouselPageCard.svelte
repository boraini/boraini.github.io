<script>
    export let index = {
        "#": {
            title: "Dummy New Post",
            excerpt: "this is a dummy post.",
            author: "Olivia",
            thumbnail: "computer-graphics/triangle.png"
        }
    };
</script>

<a href={`/blog/${Object.keys(index)[0]}`} class="page-card">
<section class="page-card-inner">
    <img class="thumbnail" src={`/blog/${Object.keys(index)[0]}/../${Object.values(index)[0].thumbnail}`} alt="Thumbnail"/>
    <div class="content shade" />
    <div class="content">
    <h2>New Post</h2>
    <h1>{Object.values(index)[0].title}</h1>
    <p>{Object.values(index)[0].excerpt}</p>
    </div>
</section>
</a>

<style scoped lang="sass">
    @use "./page-card-common"

    .page-card
        border: 1px solid var(--page-foreground)
        background-color: var(--page-background-spectacle)
        flex-grow: 1
        position: relative
        overflow: hidden

        .page-card-inner
            width: 100%
            height: 100%

        .thumbnail
            position: absolute
            width: 100%
            height: auto
            transform: translateY(-50%)
            top: 50%

        .content
            position: absolute
            width: 100%
            height: 100%

            &.shade
                background-color: var(--page-background-spectacle)
                opacity: 0.6

        
</style>