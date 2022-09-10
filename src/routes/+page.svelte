<script>
	import { fade } from 'svelte/transition'
	import HomeSummary from '../components/HomeSummary.svelte'	
	import QuicklookAccounts from '../components/QuicklookAccounts.svelte'	
	import QuicklookNeurons from '../components/QuicklookNeurons.svelte'
	import { feedbackOpen, overlayOpen, OverlayChildComponent, OverlayComponentId } from '../stores/Stores.js'
	import Feedback from '../components/Feedback.svelte'
	import Overlay from '../components/Overlay.svelte'
	let padded = false
</script>

<div in:fade class="page-wrapper">
	<HomeSummary />
	<section class="[ homePreviews ]">
		<div class="top-curve-wrapper">
			<div class="top-curve"></div>
			<div class="top-curve-border"></div>
		</div>
		<div class="content">
			<QuicklookAccounts
				sectionName="Accounts"
				hideHeader={false}
				hideInfo={false}
				showTo={2}
			/>
			<QuicklookNeurons
				sectionName="Neurons"
				hideHeader={false}
				hideInfo={false}
				showTo={2}
			/>
		</div>
	</section>
	{#if $overlayOpen}
		<Overlay alignTop={true} {padded} on:click={() => overlayOpen.set(false)}>
			<svelte:component 
				this={$OverlayChildComponent[$OverlayComponentId].component} 
				sectionName={$OverlayChildComponent[$OverlayComponentId].sectionName}
				hideHeader={$OverlayChildComponent[$OverlayComponentId].hideHeader}
				hideInfo={$OverlayChildComponent[$OverlayComponentId].hideInfo}
				showTo={$OverlayChildComponent[$OverlayComponentId].showTo}
			/>
		</Overlay>
	{/if}
	{#if $feedbackOpen}
		<Feedback />
	{/if} 	
</div>

<style lang="sass">
@use "../assets/styles/_var.sass" as *

.homePreviews
	position: relative
	min-height: 75vh
	background: $darkGrey

	.content
		padding: 2rem 1rem
		display: grid
		grid-gap: 3.5rem

// curve atop homePreviews
.top-curve-wrapper
	width: 100vw
	overflow: hidden
	position: absolute
	height: calc(1.5rem + 1px)
	top: calc(-1.5rem + 1px)

	.top-curve
		position: absolute
		top: 1px
		width: 150%
		height: 8rem
		left: 50%
		transform: translateX(-50%)
		background: $darkGrey
		border-radius: 50% 50% 0 0
		z-index: 2

	.top-curve-border
		position: absolute
		top: 0
		width: 150%
		height: 8rem
		left: 50%
		transform: translateX(-50%)
		background: #fff
		opacity: 0.1
		border-radius: 50% 50% 0 0
		z-index: 1
</style>