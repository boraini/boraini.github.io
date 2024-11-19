<script lang="ts">
    interface TabInfo {
        label: string,
        href: string,
    };

    export let tabs: TabInfo[] = [{label: "Sample Tab", href: "#"}];
    
    export let activeTab = 0;
    let prevActiveTab = activeTab;
    let [marginLeft, marginRight] = getLeftAndRightPos(tabs.length, activeTab, activeTab);

    $: {
        [marginLeft, marginRight] = getLeftAndRightPos(tabs.length, activeTab, prevActiveTab);
        if (activeTab != prevActiveTab)
            setTimeout(() => {
              [marginLeft, marginRight] = getLeftAndRightPos(tabs.length, activeTab, activeTab)
              prevActiveTab = activeTab;
            }, 100);
    }

    function setActiveTab(e: any) {
        activeTab = e.target.dataset.index;
    }

    function getLeftAndRightPos(len: number, t1: number, t2: number) {
        const minIndex = Math.min(t1, t2);
        const maxIndex = Math.max(t1, t2);
        return [
            100 * minIndex / tabs.length + "%",
            100 * (len - maxIndex - 1) / tabs.length + "%",
        ];
    }
</script>

<div class="background">
<div class="container">
    <div class="glider-container">
        <div class="glider" style="margin-left: {marginLeft}; margin-right: {marginRight}">&nbsp;</div>
    </div>

    <div class="tabs">
        {#each tabs as tabInfo, tabIndex}
            <a class="tab {tabIndex == activeTab ? "tab-active" : ""}" href={tabInfo.href} data-index={tabIndex} on:click={setActiveTab}>{tabInfo.label}</a>
        {/each}
    </div>
</div>
</div>

<style scoped lang="sass">
    @mixin button
        border-radius: 1em
        font-size: 1.25em
        vertical-align: top
        text-decoration: none
        background: none
        color: var(--page-foreground)
    
    .background
        border: 1px solid var(--page-foreground)
        margin: 1.5em auto
        border-radius: 2em
        max-width: 1000px
        padding: 0.5em
        background-color: var(--page-background-spectacle)
        z-index: 1
    
    .container
        position: relative
        padding: 0
        background-color: var(--page-background-spectacle)
        z-index: 1

    .glider-container
        position: absolute
        left: 0
        right: 0
        top: 0
        bottom: 0
        padding: 0
        z-index: -1
    
    .tabs
        display: flex
        z-index: 2

    .tab
        @include button
        padding: 0.25em
        flex-basis: 0
        flex-grow: 1
        text-align: center
    
    .tab-active
        color: var(--page-foreground-highlight)
    
    .glider
        @include button
        background-color: var(--page-background-highlight)
        color: var(--page-foreground-highlight)
        height: 1.7em
        width: auto
        $transition-speed: 0.3s
        transition: margin-left $transition-speed, margin-right $transition-speed, color $transition-speed
</style>
