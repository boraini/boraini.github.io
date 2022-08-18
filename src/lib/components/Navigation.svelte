<nav class="navbar">
	<a class="flex-grow" href="/">
		<img class="logo dark" src="/images/logo-full-dark.svg" alt="logo" />
		<img class="logo light" src="/images/logo-full-light.svg" alt="logo" />
	</a>
	<label for="dark-mode-toggle">toggle between light and dark mode</label>
	<input id="dark-mode-toggle" class="dark-mode-toggle" type="checkbox" />
	<label for="links-button">show or hide links pop-up</label>
	<input id="links-button" class="links-button" type="checkbox" />
	<ul class="links">
		<li><a href="/">HOME</a></li>
		<li><a href="/cv/">CV</a></li>
		<li><a href="/blog/">BLOG</a></li>
		<li><a href="./..">PARENT</a></li>
	</ul>
</nav>

<style scoped lang="scss">
	@use 'src/lib/stylesheets/theme';

	.navbar {
		--navigation-background: var(--page-background-spectacle);
		--navigation-foreground: var(--page-foreground);
		position: sticky;
		z-index: 2;
		display: flex;
		top: 0;
		margin: 0;
		padding: 0;
		background-color: var(--navigation-background);
		color: var(--navigation-foreground);
		font-size: 2rem;
		align-items: center;
	}

	.navbar label {
		display: none;
	}

	.navbar > * {
		display: block;
		height: 100%;
		padding: 0.2em;
		font-size: inherit;
	}

	.navbar .flex-grow {
		flex-grow: 1;
		margin: 0;
		height: 1.5em;
	}

	.navbar .logo {
		margin: 0;
		padding: 0;
		width: auto;
		height: 100%;

		&.dark {
			display: none;
		}

		&.light {
			display: unset;
		}

		:global(.dark-mode) &.dark {
			display: unset;
		}

		:global(.dark-mode) &.light {
			display: none;
		}
	}

	.navbar .links {
		display: flex;
		margin: 0;
		flex-grow: 0;
		background-color: var(--navigation-background);
		align-items: center;
	}

	.navbar .links li {
		display: block;
		padding: 0 0.5em;
		text-align: center;
	}

	.navbar .links li::before {
		display: none;
	}

	.navbar .links li a {
		text-decoration: none;
		color: inherit;
		max-width: 10em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	%nav-button {
		appearance: none;
		margin: 0 0.25em;
		height: 1.25em;
		aspect-ratio: 1;
	}

	.navbar .links-button {
		@extend %nav-button;
		display: none;
		background-image: url(/icons/hamburger.svg);
		background-size: 100% 100%;
	}

	:global(.dark-mode) {
		.links-button {
			filter: #{'invert()'};
		}
	}

	.dark-mode-toggle {
		@extend %nav-button;
		background-image: url(/icons/dark-light-mode.svg);
		background-size: 100% 200%;
		background-position: 0 0;

		border-radius: 50%;

		transition: background-position 0.3s;
	}

	.dark-mode-toggle:checked {
		background-position: 0 100%;
	}

	@media (max-width: 50rem) {
		.navbar .links-button {
			display: block;
		}

		.navbar .links {
			display: none;
			position: absolute;
			box-sizing: border-box;
			width: 100%;
			height: 0;
			left: 0;
			top: 100%;
			flex-direction: column;
			align-content: center;
			transition: height 3s;
		}

		.navbar .links li {
			padding: 0.5em 0;
		}

		.navbar .links li a {
			max-width: none;
			white-space: unset;
		}

		.navbar .links-button:checked + .links {
			display: flex;
			height: unset;
			max-height: calc(100vh - 100%);
			overflow-y: scroll;
		}
	}
</style>
