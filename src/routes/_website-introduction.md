<script>
    import SocialLinks from "$lib/components/SocialLinks.svelte";
    import ButtonLink from "$lib/components/ButtonLink.svelte";
    import boraini from "./blog/authors/boraini.md";

    export let ownerInfo;
</script>

# Welcome to my website!

I am Mert Bora İnevi, and this is your number-one source to learn about me and my projects. I also have a nice blog which will hopefully come to be useful and entertaining for you. You can also follow me on other social media via the links below.
<ButtonLink href="/blog/authors/boraini">Author Profile</ButtonLink>

<span class="social-links"><SocialLinks social={ownerInfo.social} /></span>

<style lang="sass">
    .social-links
      margin: 1rem 0
      font-size: 3rem
</style>