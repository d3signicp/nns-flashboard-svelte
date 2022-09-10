<script>
	import { onDestroy } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import { overlayOpen } from '../stores/Stores.js'

	export let padded = false
	export let alignTop = false
	
	let overlay;
	
	const unsubscribe = overlayOpen.subscribe(value => {
		overlay = value;
	});
	
	onDestroy(() => {
		$overlayOpen = false;
		unsubscribe
	})
</script>

<div class="overlay" transition:fade on:click|self class:align-top={alignTop}>
	<div transition:scale class="content" class:padded={padded}>
		<slot></slot>
	</div>
</div>

<style lang="scss">
	.overlay {
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		position: fixed;
		display: grid;
		justify-content: center;
		align-items: center;
		background: rgba(0,0,0,0.8);
		z-index: 10000;
		
		&.align-top {
			align-items: flex-start;
			padding-top: 6rem;
		}
	}
	.content {
		background: #121212;
		color: #fff;
		padding: 0;
		border-radius: 1rem;
		max-width: 85vw;
		width: 500px;
		border: 1px solid #333;
		box-shadow: 0 0 2.5rem rgba(0,0,0,1);
		
		&.padded {
			padding: 2rem;
		}
	}
</style>