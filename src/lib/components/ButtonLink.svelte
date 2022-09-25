<script>
    export let href = "";
    export let target = "";
</script>

<a class="button-link" href={href} target={target}><slot/></a>

<style scoped lang="sass">
    .button-link
        display: inline-block
        border-radius: 0.25em
        padding: 0.25em
        font-size: 1.25em
        background-color: var(--page-background-highlight)
        color: var(--page-foreground-highlight)
        vertical-align: top
    
    .button-link:hover
        background-color: var(--page-background-highlight-lighter)
</style>