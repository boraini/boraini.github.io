<script>
    export let title = "Untitled";
    export let link = null;
    export let image = null;
</script>

<section class="container dark-mode-bars">
    <div>
        <h1 class="title">{ title }</h1>
        {#if link}
        <a class="link" href={link}>
            <svg width="20" height="20" class="chain" viewBox="0 0 16 16">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
            </svg>
            <span>{link}</span>
        </a>
        {/if}
        <p class="content"><slot /></p>
    </div>
    {#if image}
    <div><img src={image} alt={title} /></div>
    {/if}
</section>

<style scoped lang="sass">
    .container
        display: grid
        margin: 1.5em auto
        padding: 1em
        border: 1px solid var(--page-foreground)
        background-color: var(--page-background-spectacle)
        color: var(--page-foreground)

        grid-template-areas: "title-and-link img" "content img"
        grid-template-columns: 1fr 20em

        @media only screen and (max-width: 40em)
            &
                grid-template: "title-and-link" "img" "content"
                grid-template-columns: auto
    
    .title
        color: var(--page-foreground)

    .link
        //color: var(--page-foreground)
        text-decoration: none

    .chain
        width: 1.5em
        height: 1.5em
        fill: var(--page-foreground-secondary)
        vertical-align: middle

    .link:hover .chain
        fill: var(--page-background-highlight-lighter)

    img
        width: 100%
        height: auto
            
</style>