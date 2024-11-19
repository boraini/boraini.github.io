<script>
    export let href = "";
    export let target = "";
</script>

<a class="button-link" href={href} target={target}><slot/></a>

<style scoped lang="sass">
    .button-link
        display: inline-block
        border-radius: 0.25em
        margin-inline-end: 0.5em
        padding: 0.25em 0.5em
        font-size: 1.25em
        background-color: var(--page-background-highlight)
        color: var(--page-foreground-highlight)
        vertical-align: top
        text-decoration: none
    
    .button-link:hover
        background-color: var(--page-background-highlight-lighter)
</style>