<script>
	import { onMount } from 'svelte';

	export let corners = [
		[-5, -5],
		[-4, 8],
		[5, -3]
	];

	export let compassField;
    export let message = "Try dragging the red dots.";

	var viewBox = { x: -12, y: -12, width: 24, height: 24 };
	function getBRect() {
        if (!compassField) compassField = window.COMPASS_FIELD;
		bRect = compassField.getBoundingClientRect();
	}
	var bRect;

	function setPointerLocation(cx, cy) {
		var x = ((cx - bRect.left) / bRect.width) * viewBox.width + viewBox.x;
		if (x > 10) x = 10;
		else if (x < -10) x = -10;
		var y = (-(cy - bRect.top) / bRect.height) * viewBox.height - viewBox.y;
		if (y > 10) y = 10;
		else if (y < -10) y = -10;

		let distance = Infinity;
		let corner;

		for (let c of corners) {
			const distNew = Math.hypot(c[0] - x, c[1] - y);
			if (distNew < distance) {
				distance = distNew;
				corner = c;
			}
		}

		corner[0] = x;
		corner[1] = y;

		//force Svelte to do the necessary update
		corners = corners;

        const atob = [corners[1][0] - corners[0][0], corners[1][1] - corners[0][1]];
        const atoc = [corners[2][0] - corners[0][0], corners[2][1] - corners[0][1]];

        message = `Triangle is facing ${(atoc[0] * atob[1]) - (atoc[1] * atob[0]) > 0 ? "front" : "back"}.`;
	}
	var pointerId = undefined;

	function pd(e) {
		e.preventDefault();
		if (!pointerId) {
			pointerId = e.pointerId;
			console.log(pointerId);
			setPointerLocation(e.clientX, e.clientY);
		}
	}
	function pm(e) {
		e.preventDefault();
		if (e.pointerId == pointerId) setPointerLocation(e.clientX, e.clientY);
	}
	function pu(e) {
		e.preventDefault();
		if (e.pointerId == pointerId) pointerId = undefined;
	}

	onMount(() => {
        window.COMPASS_FIELD = compassField;

		addEventListener('resize', getBRect, { passive: true });
		addEventListener('scroll', getBRect, { passive: true });

		getBRect();
	});
</script>

<div class="applet">
	<svg
		bind:this={compassField}
		class="compass-menu"
		xmlns="w3.org/2000/svg"
		viewBox="-12 -12 24 24"
		on:pointerdown={pd}
		on:pointerup={pu}
		on:pointermove={pm}
		on:scroll={(e) => e.preventDefault()}
	>
    <defs>
        <marker id="arrow1" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="50" markerHeight="25"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" style="fill: red;"/>
    </marker>
    <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="50" markerHeight="25"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" style="fill: var(--page-foreground);"/>
    </marker>
    <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="50" markerHeight="25"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" style="fill: aqua;"/>
    </marker>
    </defs>
    <g id="trianglelayer" style="transform: scaleY(-1);">
        <line x1={corners[0][0]} y1={corners[0][1]} x2={corners[1][0]} y2={corners[1][1]} style="--stroke-color: red; stroke: var(--stroke-color); marker-end: url(#arrow1); stroke-width: 0.1"/>
        <line x1={corners[1][0]} y1={corners[1][1]} x2={corners[2][0]} y2={corners[2][1]} style="--stroke-color: var(--page-foreground); stroke: var(--stroke-color); marker-end: url(#arrow2); stroke-width: 0.1"/>
        <line x1={corners[2][0]} y1={corners[2][1]} x2={corners[0][0]} y2={corners[0][1]} style="--stroke-color: aqua; stroke: var(--stroke-color); marker-start: url(#arrow3); stroke-width: 0.1"/>
    </g>
    <text x="-10" y="10" font-size="1.6" style="fill: var(--page-foreground)">{message}</text>
		<g id="pointerlayer" style="transform: scaleY(-1);">
			<circle
				id="pointer-1"
				cx={corners[0][0]}
				cy={corners[0][1]}
				r="0.8"
				fill="#f00"
				stroke="#000"
				stroke-width="0.1"
			/>
			<circle
				id="pointer-2"
				cx={corners[1][0]}
				cy={corners[1][1]}
				r="0.8"
				fill="#f00"
				stroke="#000"
				stroke-width="0.1"
			/>
			<circle
				id="pointer-3"
				cx={corners[2][0]}
				cy={corners[2][1]}
				r="0.8"
				fill="#f00"
				stroke="#000"
				stroke-width="0.1"
			/>
		</g>
	</svg>
</div>

<style scoped lang="sass">
    .compass-menu
        display: block
        margin: auto
        max-width: 30em
        height: auto
        border: 1px solid var(--page-foreground)
</style>
