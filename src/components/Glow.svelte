<div class="glow">
	<div class="glow__circle left"></div>
	<div class="glow__circle center"></div>
	<div class="glow__circle right"></div>
</div>

<style lang="sass">
.glow
		position: fixed
		top: 16rem
		left: 50%
		transform: translate(-50%,-50%) translate3d(0, 0, 0) scale(1)
		opacity: 0.5
		z-index: -1
		width: 100vw
		
		@media screen and (min-width: 569px)
			top: 20rem

		&__circle
			width: 55vw
			height: 45vw
			position: absolute
			top: 50%
			border-radius: 50%
			transform: translateY(-50%) translate3d(0, 0, 0)
			filter: blur(4rem) brightness(0.4)

			@media screen and (min-width: 569px)
				width: 50vw
				height: 20vh
				filter: blur(6rem) brightness(0.4)

			&.left
				background: var(--dfBlueLight)
				left: 0%

			&.center
				background: var(--dfMagenta)
				left: 50%
				transform: translate(-50%,-50%)
				z-index: 2

			&.right
				background: var(--dfGold)
				right: 0%

</style>