<p class="author-card">{author.name}</p>

<script>
    export let author;
</script>

<style scoped lang="sass">
    .author-card
        $padding: 0.5em
        display: inline-block
        margin: 0.75em
        padding: $padding
        background-color: var(--page-background-field)
        color: var(--page-foreground)
        border-radius: 0.5 * (2 * $padding + 1em)
        text-decoration: none
</style>