<script>
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { quintOut } from 'svelte/easing'
	import accounts from '../json/accounts.json'
	// import Overlay from '../components/Overlay.svelte'
	import { overlayOpen, OverlayComponentId } from '../stores/Stores.js'
	
	let c = 3
	
	// total account balance tween
	const progress = tweened(0, {
		duration: 4000,
		easing: quintOut
	});
	
	// get total balance of all accounts
	const totalBalance = () => {
		let total = 0
		for (let i = 0; i < accounts.length; i++) {
			total += accounts[i].balance
		}
		return total.toFixed(4)
	}
	
	// set balance on mount
	onMount(() => progress.set(parseFloat(totalBalance())))
</script>

<section class="[ homeSummary ]">
	<div class="summary">
		<div class="summary__balance">
			<div class="summary__balance__value">
				<p><span id="totalBalance" on:click={() => progress.set(8419.34)}>{$progress.toFixed(2)}</span> <span class="icp">ICP</span></p>
			</div>
			<div class="summary__balance__label">Total Accounts Balance</div>
		</div>
		<div class="summary__btn-row">
			<button class="summary__btn-row__btn">
				<div on:click={() => {OverlayComponentId.set(3); overlayOpen.set(true)}} class="summary__btn-row__btn__icon">
					<svg viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="nns_flashboard_home" transform="translate(-65.000000, -209.000000)" fill="#FFFFFF" fill-rule="nonzero">
											<g id="hero" transform="translate(-115.000000, -74.000000)">
													<g id="content" transform="translate(162.000000, 168.000000)">
															<g id="receive" transform="translate(0.000000, 97.000000)">
																	<path d="M19.1258509,29.3676678 C18.5055031,29.3676678 18,28.8641253 18,28.2418169 C18,27.6214691 18.5035424,27.115966 19.1258509,27.115966 L27.115966,27.115966 L27.115966,19.1258509 C27.115966,18.5055031 27.6195084,18 28.2418169,18 C28.8621647,18 29.3676678,18.5035424 29.3676678,19.1258509 L29.3676678,27.115966 L37.3577828,27.115966 C37.9781306,27.115966 38.4836337,27.6195084 38.4836337,28.2418169 C38.4836337,28.8621647 37.9800913,29.3676678 37.3577828,29.3676678 L29.3676678,29.3676678 L29.3676678,37.3577828 C29.3676678,37.9781306 28.8641253,38.4836337 28.2418169,38.4836337 C27.6214691,38.4836337 27.115966,37.9800913 27.115966,37.3577828 L27.115966,29.3676678 L19.1258509,29.3676678 Z" id="Shape"></path>
															</g>
													</g>
											</g>
									</g>
							</g>
					</svg>
				</div>
				<span class="summary__btn-row__btn__label">Receive</span>
			</button>
			<button on:click={() => {OverlayComponentId.set(2); overlayOpen.set(true)}} class="summary__btn-row__btn">
				<div class="summary__btn-row__btn__icon">
					<svg viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="nns_flashboard_home" transform="translate(-145.000000, -209.000000)" fill="#FFFFFF" fill-rule="nonzero">
											<g id="hero" transform="translate(-115.000000, -74.000000)">
													<g id="content" transform="translate(162.000000, 168.000000)">
															<g id="btn-row" transform="translate(0.000000, 97.000000)">
																	<g id="send" transform="translate(80.000000, 0.000000)">
																			<path d="M38.9187735,20.3493616 C38.7184372,19.4975954 38.1623923,18.7725788 37.3896833,18.3596393 C36.6183349,17.9466998 35.7052348,17.8867266 34.8861591,18.193375 L20.1007898,23.1269484 C18.8701701,23.5276072 18.0279285,24.6614812 18.0006806,25.9548304 C17.9734327,27.2481795 18.7665864,28.4174653 19.978157,28.8699334 L25.4661076,30.9632394 C25.5860366,31.0109389 25.6950629,31.0831684 25.7863729,31.1758426 C25.8831325,31.2753304 25.9580903,31.3938953 26.0030615,31.5247269 L28.0963675,37.0238418 L28.0963675,37.051098 C28.5706409,38.2040561 29.6963162,38.9535992 30.9433335,38.9455013 L30.97059,38.9455013 C32.276185,38.939984 33.4291431,38.0950297 33.8284412,36.8521293 L38.8286515,22.051758 C39.02081,21.5052656 39.0521572,20.913802 38.9185973,20.3495863 L38.9187735,20.3493616 Z M36.8499941,21.3687667 L31.8428061,36.214144 C31.7201523,36.5943582 31.3644508,36.8533001 30.963792,36.8519452 C30.5685759,36.8533022 30.2142489,36.6120815 30.0670546,36.2454738 L27.9737486,30.746359 C27.946492,30.6768542 27.9137824,30.6100778 27.8824386,30.544662 L31.3344747,27.0830665 L29.8557982,25.60439 L26.3914814,29.0687068 C26.3315152,29.0414502 26.2770055,29.0128295 26.2129503,28.9882994 L20.7138354,26.8949934 C20.3336213,26.7559839 20.0855645,26.3893902 20.0964846,25.9846146 C20.0964846,25.579839 20.359512,25.2241514 20.7452001,25.1042399 L35.5933685,20.1504312 C35.9422529,20.008697 36.341551,20.0850154 36.6127737,20.3453145 C36.8839964,20.6056136 36.97666,21.0008333 36.8499069,21.3537996 L36.8499941,21.3687667 Z" id="Shape"></path>
																	</g>
															</g>
													</g>
											</g>
									</g>
							</g>
					</svg>
				</div>
				<span class="summary__btn-row__btn__label">Send</span>
			</button>
			<a href="/neurons" class="summary__btn-row__btn">
				<div class="summary__btn-row__btn__icon">
					<svg viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="nns_flashboard_home" transform="translate(-225.000000, -208.000000)" fill="#FFFFFF" fill-rule="nonzero">
											<g id="hero" transform="translate(-115.000000, -74.000000)">
													<g id="content" transform="translate(162.000000, 168.000000)">
															<g id="btn-row" transform="translate(0.000000, 97.000000)">
																	<g id="send" transform="translate(160.000000, 0.000000)">
																			<path d="M35.8910762,26.3491399 C35.5592239,26.7034697 35.1167541,26.9462971 34.6302144,26.9462971 L32.1740647,26.9462971 C31.8197349,26.9462971 31.5103601,26.7250622 31.3772652,26.4156874 L31.3547966,26.371613 C31.2217105,26.0397606 31.2882535,25.6413609 31.5535628,25.376056 L33.3234419,23.6061769 C33.6552942,23.2743246 34.097764,23.1412297 34.5627112,23.1637072 C35.1823458,23.2077816 35.8019805,22.9424723 36.1994953,22.3669076 C36.5978951,21.7697504 36.5978951,20.9729509 36.1994953,20.3757937 C35.5357907,19.4027142 34.2083814,19.3136893 33.4114934,20.0880114 C33.0130936,20.4864111 32.8584062,21.0170209 32.9024761,21.5260381 C32.9465506,21.9909853 32.7477843,22.4334551 32.4159364,22.7653074 L30.6685348,24.512709 C30.4248225,24.7564213 30.0489002,24.8445613 29.7170478,24.6898695 L29.6729734,24.6674008 C29.3411211,24.5343148 29.1198862,24.2024536 29.1198862,23.8265313 L29.1198862,21.3929476 C29.1198862,20.9064079 29.3411211,20.4639381 29.7170434,20.1320858 C30.1595132,19.733686 30.424818,19.1140514 30.2926081,18.4287542 C30.159522,17.7209796 29.5848334,17.1678923 28.8986513,17.0347974 C27.7484069,16.8135626 26.7303725,17.6760246 26.7303725,18.8046765 C26.7303725,19.3577637 26.9740849,19.8443034 27.3715997,20.1761558 C27.7259295,20.4639381 27.9246869,20.9280004 27.9246869,21.3929476 L27.9246869,23.8265313 C27.9246869,24.2024536 27.703452,24.5343059 27.3715997,24.6674008 L27.3491311,24.6674008 C27.0172788,24.8004869 26.618879,24.7339439 26.3535741,24.4686346 L24.5836951,22.6987555 C24.2518427,22.3669032 24.1187478,21.9244334 24.1412253,21.4594862 C24.1852997,20.8398516 23.9199904,20.2202169 23.3444257,19.8227021 C22.7472686,19.4243023 21.950469,19.4243023 21.3533118,19.8227021 C20.3802323,20.4864067 20.2912074,21.813816 21.0655295,22.610704 C21.4639293,23.0091038 21.994539,23.1637913 22.5035562,23.1197213 C22.9685034,23.0756469 23.4109732,23.2744131 23.7428255,23.606261 L25.4686346,25.3320701 C25.7339395,25.5973749 25.8004869,25.9957747 25.6674008,26.327627 L25.6674008,26.3500957 C25.5343148,26.681948 25.2024536,26.9031829 24.8265313,26.9031829 L22.3929476,26.9031829 C21.9064079,26.9031829 21.4639381,26.681948 21.1320858,26.3060257 C20.733686,25.8635559 20.1140514,25.598251 19.4287542,25.730461 C18.7209796,25.8635471 18.1678923,26.4382356 18.0347974,27.1244177 C17.8135626,28.2746621 18.6760246,29.2926966 19.8046765,29.2926966 C20.3577637,29.2926966 20.8443034,29.0489842 21.1761558,28.6514694 C21.4639381,28.2971396 21.9280004,28.0983822 22.3929476,28.0983822 L24.8490973,28.0983822 C25.2034271,28.0983822 25.5128019,28.3196171 25.6458968,28.6289919 L25.6683654,28.695535 C25.8014515,29.0273873 25.7349085,29.3817171 25.491205,29.6470219 L23.6988485,31.4393784 C23.3669961,31.7712308 22.9245264,31.9043257 22.4595791,31.8818482 C21.8399445,31.8377738 21.2203098,32.1030831 20.822795,32.6786478 C20.4243952,33.2758049 20.4243952,34.0726045 20.822795,34.6697617 C21.4864996,35.6428412 22.8139089,35.7318661 23.610797,34.957544 C24.0091967,34.5591442 24.1638842,34.0285345 24.1198142,33.5195173 C24.0757398,33.0545701 24.274506,32.6121003 24.6063539,32.280248 L26.3537555,30.5328464 C26.5974679,30.289134 26.9733902,30.2009941 27.3052425,30.3556859 L27.3493169,30.3781545 C27.6811692,30.5112406 27.9024041,30.8431018 27.9024041,31.2190241 L27.9024041,33.6526078 C27.9024041,34.1391475 27.6811692,34.5816173 27.3052469,34.9134696 C26.8627772,35.3118694 26.5974723,35.931504 26.7296823,36.6168012 C26.8627683,37.3245758 27.4374569,37.877663 28.123639,38.0107579 C29.2738834,38.2319928 30.2919178,37.3695308 30.2919178,36.2408789 C30.2919178,35.6877917 30.0482055,35.2012519 29.6506906,34.8693996 C29.2963609,34.5816173 29.0976034,34.117555 29.0976034,33.6526078 L29.0993317,31.1940245 C29.0993317,30.8396947 29.3205666,30.5303199 29.6299415,30.397225 L29.6740159,30.3747564 C30.0058682,30.2416703 30.404268,30.3082133 30.6695728,30.5735226 L32.4394519,32.3434017 C32.7713042,32.675254 32.9043991,33.1177238 32.8594442,33.582671 C32.8153698,34.2023057 33.0806791,34.8219403 33.6562437,35.2194551 C34.2534009,35.6178549 35.0502005,35.6178549 35.6473577,35.2194551 C36.6204372,34.5557505 36.7094621,33.2283412 35.93514,32.4314532 C35.5367402,32.0330534 35.0061305,31.878366 34.4971133,31.922436 C34.0321661,31.9665104 33.5896963,31.7677441 33.257844,31.4358962 L31.5320349,29.7100871 C31.26673,29.4447823 31.2001826,29.0463825 31.3332686,28.7145302 L31.3332686,28.6920616 C31.4663547,28.3602092 31.7982159,28.1389744 32.1741382,28.1389744 L34.6077219,28.1389744 C35.0726691,28.1389744 35.5367314,28.3161348 35.8245137,28.6920616 C36.156366,29.0904613 36.6429058,29.3332887 37.195993,29.3332887 C38.3021674,29.3332887 39.1871069,28.3152543 38.965872,27.1650099 C38.8552546,26.4814384 38.3021674,25.9067365 37.5943928,25.7736416 C36.9082257,25.6404892 36.289476,25.8841927 35.8910762,26.3491399 Z" id="Path"></path>
																	</g>
															</g>
													</g>
											</g>
									</g>
							</g>
					</svg>
				</div>
				<span class="summary__btn-row__btn__label">Neurons</span>
			</a>
			<a href="/voting" class="summary__btn-row__btn">
				<div class="summary__btn-row__btn__icon">
					<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				 	<g fill="#FFFFFF">
						<path d="m94 68h-16v-52c0-6.6289-5.3711-12-12-12h-52c-6.6289 0-12 5.3711-12 12v60c0 5.3047 2.1055 10.391 5.8594 14.141 3.75 3.7539 8.8359 5.8594 14.141 5.8594h56c5.3047 0 10.391-2.1055 14.141-5.8594 3.7539-3.75 5.8594-8.8359 5.8594-14.141v-4c0-1.0625-0.42188-2.0781-1.1719-2.8281s-1.7656-1.1719-2.8281-1.1719zm-84 8v-60c0-2.2109 1.7891-4 4-4h52c1.0625 0 2.0781 0.42188 2.8281 1.1719s1.1719 1.7656 1.1719 2.8281v52h-32c-2.2109 0-4 1.7891-4 4v4c0 6.6289-5.3711 12-12 12s-12-5.3711-12-12zm68 12h-40.102c2.6484-3.4414 4.0898-7.6602 4.1016-12h48c0 6.6289-5.3711 12-12 12z"/>
						<path d="m22 28h36c2.2109 0 4-1.7891 4-4s-1.7891-4-4-4h-36c-2.2109 0-4 1.7891-4 4s1.7891 4 4 4z"/>
						<path d="m22 44h36c2.2109 0 4-1.7891 4-4s-1.7891-4-4-4h-36c-2.2109 0-4 1.7891-4 4s1.7891 4 4 4z"/>
						<path d="m58 60c2.2109 0 4-1.7891 4-4s-1.7891-4-4-4h-36c-2.2109 0-4 1.7891-4 4s1.7891 4 4 4z"/>
				 	</g>
					</svg>
				</div>
				<span class="summary__btn-row__btn__label">Vote</span>
			</a>
		</div>
	</div>
	<div class="glow">
		<div class="glow__circle left"></div>
		<div class="glow__circle center"></div>
		<div class="glow__circle right"></div>
	</div>
</section>

<style lang="sass">
@use "../assets/styles/_var.sass" as *

.homeSummary
	display: grid
	align-items: flex-start
	grid-gap: 1.25rem
	grid-template-rows: repeat(2, auto)
	align-content: flex-start
	position: relative
	width: 100%
	// min-height: 19rem
	padding: 1.5rem 0 /* accounting for top-curve */
	overflow: hidden
	
	> *
		grid-column: 1 / 3
	
	.summary
		text-align: center
		display: grid
		grid-template-rows: auto auto
		grid-gap: 2rem
		z-index: 1
	
		&__balance
			display: grid
	
			&__value
				p
					font-size: 3rem
	
				span.icp
					font-size: 75%
					font-family: $sans
					font-weight: 500
	
			&__label
				font-family: $sans
				font-weight: 700
				font-size: 0.625rem
				opacity: 0.65
				text-transform: uppercase
	
		&__btn-row
			display: grid
			grid-template-columns: repeat(4, auto)
			justify-content: center
			grid-gap: 1.5rem
	
			&__btn
				color: #fff
				display: grid
				grid-gap: 0.25rem
	
				&__label
					font-family: $sans
					font-weight: 700
					text-transform: uppercase
					font-size: 0.625rem
					letter-spacing: 0.05rem
					opacity: 0.85
	
				&__icon
					border: 1px solid rgba(#fff,0.1)
					box-shadow: 0 0 0.5rem rgba(#fff,0.125)
					border-radius: 0.5rem
					padding: 1.25rem
					display: flex
					align-items: center
	
					svg
						fill: #fff
						width: 1.375rem
	
				$borderOpacity: 0.4
				$bgOpacity: 0.125
	
				&:hover,
				&:focus
					.summary__btn-row__btn__icon
						transition: all 0.2s ease-out
	
				&:nth-child(1)
					.summary__btn-row__btn__icon
						border-color: rgba($dfBlueLight,$borderOpacity)
	
					&:hover,
					&:focus
						.summary__btn-row__btn__icon
							background: rgba($dfBlueLight,$bgOpacity)
	
				&:nth-child(2)
					.summary__btn-row__btn__icon
						border-color: rgba($dfMagenta,$borderOpacity)
	
					&:hover,
					&:focus
						.summary__btn-row__btn__icon
							background: rgba($dfMagenta,$bgOpacity)
	
				&:nth-child(3)
					.summary__btn-row__btn__icon
						border-color: rgba($dfOrange,$borderOpacity)
	
					&:hover,
					&:focus
						.summary__btn-row__btn__icon
							background: rgba($dfOrange,$bgOpacity)
	
				&:nth-child(4)
					.summary__btn-row__btn__icon
						border-color: rgba($dfGold,$borderOpacity)
	
					&:hover,
					&:focus
						.summary__btn-row__btn__icon
							background: rgba($dfGold,$bgOpacity)
	
// Glowing circles
.glow
	position: absolute
	top: 16rem
	left: 50%
	transform: translateX(-50%) translate3d(0, 0, 0)
	opacity: 1
	z-index: 0
	width: 100vw

	&__circle
		width: 55vw
		height: 55vw
		position: absolute
		top: 50%
		border-radius: 50%
		transform: translateY(-50%) translate3d(0, 0, 0)
		filter: blur(4rem) brightness(0.4)
	
		@media screen and (min-width: 569px)
			width: 225px
			height: 225px
	
	
		&.left
			background: $dfBlueLight
			left: -10%
	
			@media screen and (min-width: 569px)
				left: calc(50% - 250px)
	
	
		&.center
			background: $dfMagenta
			left: 50%
			transform: translate(-50%,-50%)
			z-index: 2
	
		&.right
			background: $dfGold
			right: -10%
	
			@media screen and (min-width: 569px)
				right: calc(50% - 250px)

</style>