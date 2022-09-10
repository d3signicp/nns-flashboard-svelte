<script>
	import { onDestroy } from 'svelte';
	import { fade, scale, slide, draw } from 'svelte/transition'
	import { expoOut } from 'svelte/easing'
	import { feedbackMsg } from '../stores/Stores.js'
	
	let feedback;
	
	const unsubscribe = feedbackMsg.subscribe(value => {
		feedback = value;
	});
	
	onDestroy(() => {
		$feedbackMsg = false;
		unsubscribe
	})
</script>

<div>
<div transition:slide={{duration: 500, easing: expoOut}} class="feedbackModal">
	<span>{$feedbackMsg}</span>
	<svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	 <g>
		<path d="m49.996 4c-25.398 0-45.996 20.598-45.996 46 0 25.406 20.598 46 45.996 46 25.406 0 46.004-20.594 46.004-46 0-25.402-20.598-46-46.004-46zm0 82c-19.879 0-35.996-16.117-35.996-36s16.117-36 35.996-36c19.887 0 36.004 16.117 36.004 36s-16.117 36-36.004 36z"/>
		<path d="m43.168 38.859c0 3.6836-2.9844 6.668-6.668 6.668s-6.668-2.9844-6.668-6.668c0-3.6797 2.9844-6.668 6.668-6.668s6.668 2.9883 6.668 6.668"/>
		<path d="m70.84 57.883c-2.1211-1.2969-4.8906-0.62891-6.1875 1.4883-2.7109 4.4297-8.4609 7.293-14.652 7.293s-11.941-2.8633-14.652-7.293c-1.2969-2.1172-4.0664-2.7852-6.1875-1.4883-2.1211 1.2969-2.7852 4.0664-1.4883 6.1875 4.375 7.1523 12.93 11.594 22.328 11.594s17.953-4.4414 22.328-11.598c1.3008-2.1172 0.63281-4.8867-1.4883-6.1836z"/>
		<path d="m56.836 42.848h9.6797c2.1992 0 3.9844-1.7852 3.9844-3.9844s-1.7852-3.9844-3.9844-3.9844h-9.6797c-2.1992 0-3.9844 1.7852-3.9844 3.9844s1.7852 3.9844 3.9844 3.9844z"/>
	 </g>
	</svg>
</div>
</div>

<style lang="sass">
@use "../assets/styles/_var.sass" as *

.feedbackModal
	position: fixed
	bottom: 2rem
	left: 50%
	transform: translateX(-50%) translateY(0rem)
	z-index: 99999
	backface-visibility: hidden
	background: darken($dfGreen,5%)
	padding: 1rem 2rem
	border-radius: 0.5rem
	border: 1px solid rgba($white,0.05)
	box-shadow: 0 0 1.5rem rgba($black,1)
	display: grid
	grid-template-columns: repeat(2,auto)
	align-items: center
	grid-gap: 0.5rem
	user-select: none

	svg
		fill: $white
		width: 1.125rem
		height: auto
		opacity: 0.6
</style>