<script>
	let element;

	function copy() {
		const range = document.createRange();
		range.selectNode(element.querySelector('code'));
		window.getSelection().removeAllRanges(); // clear current selection
		window.getSelection().addRange(range); // to select text
		document.execCommand('copy');
		window.getSelection().removeAllRanges(); // to deselect
	}
</script>

<pre bind:this={element} class="code-container">
    <slot />
    <button on:click={copy}>Copy</button>
</pre>
