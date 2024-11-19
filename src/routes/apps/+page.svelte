<script>
	import AppCard from "./AppCard.svelte";
</script>

<main class="container">
    <h1>All Apps</h1>
    <h2>Clicking these will immediately launch the corresponding app.</h2>
    <AppCard
        title="Frog Girl Adventures"
        description="Jump between lilypads and items that require opposable thumbs to interact with, in order to solve a bunch of puzzles."
        href="https://boraini.com/frog-girl-adventures/"
        image="https://raw.githubusercontent.com/boraini/frog-girl-adventures/refs/heads/master/assets/textures/gui/fga-logo.svg"
        tags={[ "3D", "Game", "Puzzle", "Animals", "Three.js" ]}
    />
    <AppCard
        title="ChemDraw"
        description="Simulation of mixing chemicals in water."
        href="https://boraini.com/ChemDraw/"
        image="https://boraini.com/ChemDraw/logo.png"
        tags={[ "Simulation", "Educational", "School Project" ]}
    />
</main>

<style scoped lang="sass">
    .container
        margin: 1.5em auto
        padding: 1em
        max-width: 1000px
</style>
