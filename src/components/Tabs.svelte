<script>
	import { tweened } from 'svelte/motion'
	import { createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

	export let items
	export let activeItem
	// export let activeStepIndex
	export let activeStepId
	export let clickable
	export let clampy
	export const cols = items.length - 1
	// number of steps
	
	// initial step
	// let stepNum = 1
	
	// 
	let progress = activeStepId === 1 ? 1 : activeStepId + 2
	$: progressPercentage = (100 / (cols / clampy)) || 0
	const tweenedP = tweened(0)
	$: tweenedP.set(progressPercentage)

</script>

<div class="tabs" style="--columns:{cols}; --stepCount:{progress}">
	<div class="progress-wrapper">
		<div class="progress" data-step={progress}>
			<div class="bar" style="width: {$tweenedP}%;"></div>
		</div>
		<div class="dots">
			{#each items as item (item.id)}
				<div class="dot" class:active={item.name === activeItem}></div>
			{/each}
		</div>

	</div>
	<!-- <p>Clamped: {clampy}</p>
	<p>activeStepId: {activeStepId}</p>
	<p>activeStepIndex: {activeStepIndex}</p>
	<p>Cols: {cols}</p>
	<p>Progress: {progress}</p>
	<p>Progress Width: {progressPercentage.toFixed(3)}%</p> -->
	<ul>
		{#each items as item (item.id)}
			<li 
				class:active={item.name === activeItem}
				class:last-step={item.id === items.length + 1}
				data-step={item.id}
				on:click={() => {
					clickable && activeItem !== 'Last Step' ? dispatch('tabChange', item.name) : false
				}}
			>
				<div>{item.name}</div>
			</li>
		{/each}
	</ul>
</div>

<style lang="sass">
@use "../assets/styles/_var.sass" as *

.tabs
	padding: 1rem 1rem 0 1rem
	
	ul
		display: grid
		grid-template-columns: repeat(var(--columns),1fr)
		grid-gap: 0rem
		justify-content: space-around
		list-style: none
		padding: 0
		margin: 0
		
		li
			padding: 0.75rem 0
			font-size: 0.875rem
			border-radius: 1rem
			text-align: center

			&:last-child
				display: none
			
			&.active
				color: $dfGreen
				
				~ *
					pointer-events: none
					opacity: 0.65

.progress-wrapper
	height: 0.25rem
	position: relative
	
	&:before
		content: ''
		position: absolute
		width: 100%
		height: 100%
		border-radius: 0.125rem
		background: rgba($lightGrey,0.25)
	
	.progress
		background: transparent
		height: 100%
		width: 100%
		border-radius: 0.125rem
		position: relative
		left: 0
		overflow: hidden
		
		.bar
			background: $dfGreen
			height: 100%
			border-radius: 0.125rem
			position: absolute
			left: calc(-100% / var(--columns) / 2)
		
	.dots
		position: absolute
		display: grid
		grid-template-columns: repeat(var(--columns),1fr)
		justify-items: center
		width: 100%
		left: 0
		height: 1rem
		transform: translateY(-0.625rem)
		left: 0
		
		.dot
			width: 1rem
			height: 1rem
			background: var(--dfGreen)
			border: 1px solid var(--dfGreen)
			border-radius: 50%
			transition: all 0.3s ease-out
			
			&:last-child
				display: none
			
			&.active
				background: var(--bodyBackground)
				border: 1px solid var(--dfGreen)
				
				~ *
					background: var(--bodyBackground)
					border: 1px solid rgba($lightGrey,0.25)
</style>