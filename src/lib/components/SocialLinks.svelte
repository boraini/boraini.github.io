<script>
    export let social;
</script>

<ul class="social-links">
    {#each Object.keys(social) as codename}
    <li><a href={social[codename]} target="_blank"><p class={`icon ${codename}`}>{codename}</p></a></li>
    {/each}
</ul>

<style scoped lang="sass">
    /** How to add a new social media icon sheet:
      *
      * Adding a new sheet for a new set of icons might be easier than modifying the existing sheets.
      *
      * 1) Add the sheet under a permanent URL via the static/icons directory.
      * 2) Create a new .icon rule.
      * 3) For the normal and colored sheets, add two Sass variables.
      * 4) In & and &:hover, set the background-image property,
      * 5) Add proper rules with the icon mixin for each icon in the file with the selector &.codename.
      */
    @use "src/lib/stylesheets/icon-sheet" as *

    $size: 1em
    $social-1-normal: url(/icons/social-1.svg)
    $social-1-colored: url(/icons/social-1-colored.svg)
    $social-1-width: 1
    $social-1-height: 8

    .social-links
        display: flex
        margin: 0
        padding: 0.2em
        justify-content: space-evenly
        flex-wrap: wrap
        list-style-type: none

        li
            flex-grow: 1
            padding: 0 0.2em

            a
                display: block
                padding: 0 0.5em

    @mixin social-icon($w, $h, $x, $y)
        @include icon($w, $h, $x, $y, $size, $size)
        display: block
        margin: auto
        width: $size
        height: $size
        color: transparent
        overflow: hidden

    .icon
        background-image: $social-1-normal

        :global(.dark-mode) &
            filter: #{"invert()"}

        &:hover, a:hover &
            filter: none
            background-image: $social-1-colored
            
        &.linkedin
            @include social-icon($social-1-width, $social-1-height, 0, 0)

        &.instagram
            @include social-icon($social-1-width, $social-1-height, 0, 1)

        &.github
            :global(.dark-mode) &
                filter: #{"invert()"}
            @include social-icon($social-1-width, $social-1-height, 0, 2)

        &.twitter
            @include social-icon($social-1-width, $social-1-height, 0, 3)

        &.deviantart
            @include social-icon($social-1-width, $social-1-height, 0, 4)

        &.tumblr
            @include social-icon($social-1-width, $social-1-height, 0, 5)

        &.abmdevandgames
            @include social-icon($social-1-width, $social-1-height, 0, 6)

        &.scratch
            :global(.dark-mode) &
                filter: none
            @include social-icon($social-1-width, $social-1-height, 0, 7)


</style>