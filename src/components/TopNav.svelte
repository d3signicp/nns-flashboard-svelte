<script>
import { navOpen } from '../stores/Stores.js'
</script>

<header class="top-nav sticky">
	<nav>
		<button on:click={() => navOpen.set(!$navOpen)} aria-label="Menu">
			<span><span></span></span>
		</button>
		<div class="site-name">Network Nervous System</div>
		<div class="site-logo">
			<img src="/dfinity.svg" alt="Dfinity Foundation logo">
		</div>
	</nav>
</header>

<style lang="sass">
@use "../assets/styles/_var.sass" as *

header.top-nav
	background-color: rgba($black,0.25)
	top: 0
	z-index: 100
	backdrop-filter: blur(0.25rem)

	nav
		display: grid
		grid-template-columns: auto 1fr auto
		align-items: center
		justify-items: center
		
		.site-name
			font-weight: 500
		
		button
			color: $white
			padding: 1.25rem

			span
				width: 2rem
				height: 1.125rem
				position: relative
				display: block

				span
					position: absolute
					display: block
					width: 100%
					height: 2px
					background: #fff
					border-radius: 2px
					top: 50%
					transform: translateY(-50%)

					&:before,
					&:after
						content: ''
						width: 75%
						height: 2px
						border-radius: 2px
						background: #fff
						position: absolute
						transition: all 0.25s ease-out 0.5s

					&:before
						right: 0
						top: -0.5rem

					&:after
						left: 0
						bottom: -0.5rem
		
		.site-logo
			padding: 1.25rem

			img
				width: 2rem

// .mobile-nav-enter-active,
// .mobile-nav-leave-active
// 	transition: all 0.5s cubic-bezier(0.23, 0.88, 0.61, 1)
// 
// .mobile-nav-enter-from,
// .mobile-nav-leave-to
// 	transform: translateX(-18rem)
// 
// .mobile-nav-enter-to
// 	transform: translateX(0rem)

</style>