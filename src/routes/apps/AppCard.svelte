<script lang="ts">
    import { stringToColor, withForeground } from "$lib/util/string-to-color";
    export let title: string;
    export let description: string;
    export let href: string;
    export let image: string;
    export let alt = title;
    export let tags: string[] = [];
</script>

<a class="container" style="--image: url({image})" href={href}>
    <h1>{title}</h1>
    <div>
        <p>
        {description}
        </p>
        <p>
            Tags: 
        {#each tags as tag}
            {@const [bkg, frg] = withForeground(stringToColor(tag))}
            <span class="tag" style="color: {frg}; background-color: {bkg};">{tag}</span>
        {/each}
        </p>
    </div>
    <img alt={alt} src={image} />
</a>

<style scoped lang="sass">
    .container
        position: relative
        display: grid
        grid-template-areas: "title image" "description image"
        grid-template-columns: 1fr 15em
        padding: 0.5em
        margin-top: 1.5em
        background-color: var(--page-background-spectacle)
        text-decoration: none
        z-index: 1
        box-shadow: 0 1em 1em transparentize(black, 0.5)

        @media only screen and (max-width: 40em)
            &
                grid-template-areas: "title" "description"
                grid-template-columns: 1fr
                background-image: var(--image)
                background-size: cover
                background-position: center
            
            &::before
                position: absolute
                z-index: -1
                left: 0
                right: 0
                top: 0
                bottom: 0
                background-color: var(--page-background-spectacle)
                opacity: 80%
                content: ""
            
            & img
                display: none

        img
            margin: auto
            grid-area: image
            max-width: 15em
            max-height: 10em
            object-fit: fill
            object-position: center

        h1
            grid-area: title
            color: var(--page-foreground)
            font-size: 1.5em

        div
            grid-area: description
            color: var(--page-foreground-secondary)
            font-weight: bold

        .tag
            margin-inline-end: 0.5em
            padding: 0.5em
            border-radius: 1em
</style>