	<script>
		import neurons from '../json/neurons.json'
		export let sectionName;
		export let hideHeader;
		export let showTo;
		
		// get total balance of all accounts
		const totalBalance = () => {
			let total = 0
			for (let i = 0; i < neurons.length; i++) {
				total += neurons[i].balance
			}
			return total.toFixed(4)
		}
	</script>
	
	<div class="[ quickLook ]">
	<section class="quickLook__section">
		<div class="quickLook__section__header">
			<h2 class="quickLook__section__header__title">
				{#if hideHeader === false}
					<a href="/{sectionName.toLowerCase()}" class="quickLook__section__header__title__link">{sectionName}
						<svg viewBox="0 0 16 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g id="nns_flashboard_home" transform="translate(-120.000000, -344.000000)" fill="#888888" fill-rule="nonzero">
												<g id="accounts-section" transform="translate(16.000000, 336.000000)">
														<g id="section-heading" transform="translate(11.500000, 0.000000)">
																<path d="M108.196618,13.3907315 L103.070783,8.26489643 C102.717587,7.91170119 102.146452,7.91170119 101.810331,8.26489643 C101.457136,8.61809168 101.457136,9.18922734 101.810331,9.52534767 L105.423625,13.1386412 L93.3908533,13.1386412 C92.9037477,13.1386412 92.5,13.5417167 92.5,14.0294946 C92.5,14.5166001 92.9030755,14.9203479 93.3908533,14.9203479 L105.407155,14.9203479 L101.810331,18.5336414 C101.457136,18.8868367 101.457136,19.4579724 101.810331,19.7940927 C101.978392,19.9621529 102.213407,20.0632578 102.449095,20.0632578 C102.68411,20.0632578 102.902723,19.9792278 103.087858,19.7940927 L108.230835,14.6511155 C108.398895,14.4830553 108.5,14.24804 108.5,14.0123524 C108.465864,13.7943952 108.364764,13.5587244 108.196702,13.3906643 L108.196618,13.3907315 Z" id="Path"></path>
														</g>
												</g>
										</g>
								</g>
						</svg>
					</a>
				{:else}
					<span class="quickLook__section__header__title__noLink">{sectionName}</span>
				{/if}
			</h2>
			<span class="quickLook__section__header__total"><span class="value">{totalBalance()}</span> <span class="icp">ICP</span></span>
		</div>

		<div class="quickLook__section__main">
			{#each neurons as neuron (neuron.id)}
				{#if showTo > 0 && neuron.id < (showTo + 1) }
					<div class="quickLook__section__main__item">
						<div class="quickLook__section__main__item__top">
							<a href="/{sectionName.toLowerCase()}/{neuron.id}" class="quickLook__section__main__item__top__label">
								<div class="quickLook__section__main__item__top__label__dot {neuron.color}"></div>
								<h3 class="quickLook__section__main__item__top__label__name">{neuron.name}
									<svg viewBox="0 0 16 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
											<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
													<g id="nns_flashboard_home" transform="translate(-120.000000, -344.000000)" fill="#888888" fill-rule="nonzero">
															<g id="accounts-section" transform="translate(16.000000, 336.000000)">
																	<g id="section-heading" transform="translate(11.500000, 0.000000)">
																			<path d="M108.196618,13.3907315 L103.070783,8.26489643 C102.717587,7.91170119 102.146452,7.91170119 101.810331,8.26489643 C101.457136,8.61809168 101.457136,9.18922734 101.810331,9.52534767 L105.423625,13.1386412 L93.3908533,13.1386412 C92.9037477,13.1386412 92.5,13.5417167 92.5,14.0294946 C92.5,14.5166001 92.9030755,14.9203479 93.3908533,14.9203479 L105.407155,14.9203479 L101.810331,18.5336414 C101.457136,18.8868367 101.457136,19.4579724 101.810331,19.7940927 C101.978392,19.9621529 102.213407,20.0632578 102.449095,20.0632578 C102.68411,20.0632578 102.902723,19.9792278 103.087858,19.7940927 L108.230835,14.6511155 C108.398895,14.4830553 108.5,14.24804 108.5,14.0123524 C108.465864,13.7943952 108.364764,13.5587244 108.196702,13.3906643 L108.196618,13.3907315 Z" id="Path"></path>
																	</g>
															</g>
													</g>
											</g>
									</svg>
								</h3>
							</a>
							<div class="quickLook__section__main__item__top__value">{neuron.balance.toFixed(4)} <span class="icp">ICP</span></div>
						</div>
						<div class="quickLook__section__main__item__bottom">
							<div class="quickLook__section__main__item__bottom__status">
								<div class="quickLook__section__main__item__bottom__status">
									{#if neuron.status.dissolving}
										<svg v-if="!item.status.dissolving" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
										 <g fill-rule="evenodd">
											<path d="m33.332 25c0-9.2031 7.4648-16.668 16.668-16.668s16.668 7.4648 16.668 16.668v16.668h-8.3359v-16.668c0-4.6016-3.7305-8.332-8.332-8.332s-8.332 3.7305-8.332 8.332v16.668h-8.3359z"/>
											<path d="m33.332 37.5c-9.2031 0-16.664 7.4609-16.664 16.668v20.832c0 9.2031 7.4609 16.668 16.664 16.668h33.336c9.2031 0 16.664-7.4648 16.664-16.668v-20.832c0-9.207-7.4609-16.668-16.664-16.668z"/>
										 </g>
										</svg>
									{:else}
										<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
										 <g>
											<path d="m90 30v-15c0-2.7617-2.2383-5-5-5s-5 2.2383-5 5v1.5391c-11.023-9.8828-26.207-13.711-40.598-10.23-14.391 3.4844-26.148 13.824-31.438 27.652-5.2852 13.832-3.4297 29.379 4.9688 41.574 8.3984 12.191 22.262 19.473 37.066 19.465 2.7617 0 5-2.2383 5-5s-2.2383-5-5-5c-11.656 0-22.547-5.8086-29.047-15.484-6.5039-9.6758-7.7578-21.953-3.3516-32.746s13.898-18.684 25.312-21.043c11.418-2.3633 23.258 1.1133 31.586 9.2734h-4.5c-2.7617 0-5 2.2383-5 5s2.2383 5 5 5h15c1.3242 0 2.5977-0.52734 3.5352-1.4648s1.4648-2.2109 1.4648-3.5352z"/>
											<path d="m95 50c0 6.668-10 6.668-10 0s10-6.668 10 0"/>
											<path d="m83.023 78.422c0 6.6641-10 6.6641-10 0 0-6.668 10-6.668 10 0"/>
											<path d="m91.977 65c0 6.668-10 6.668-10 0s10-6.668 10 0"/>
											<path d="m70 87.012c0 6.6641-10 6.6641-10 0 0-6.668 10-6.668 10 0"/>
											<path d="m50 25c-2.7617 0-5 2.2383-5 5v20c0 1.3242 0.52734 2.5977 1.4648 3.5352l10 10c1.9609 1.8945 5.082 1.8672 7.0078-0.0625 1.9297-1.9258 1.957-5.0469 0.0625-7.0078l-8.5352-8.5352v-17.93c0-1.3242-0.52734-2.5977-1.4648-3.5352s-2.2109-1.4648-3.5352-1.4648z"/>
										 </g>
										</svg>
									{/if}


									<span>
										{neuron.status.duration}
										{#if neuron.status.dissolving}
											<span v-if="!item.status.dissolving"> dissolve delay</span>
										{:else}
											<span v-else> remaining</span>
										{/if}
									</span>
								</div>
							</div>
						</div>
					</div>

				{:else if showTo === 'all'}
					<div class="quickLook__section__main__item">
					<div class="quickLook__section__main__item__top">
						<a href="/{sectionName.toLowerCase()}/{neuron.id}" class="quickLook__section__main__item__top__label">
							<div class="quickLook__section__main__item__top__label__dot {neuron.color}"></div>
							<h3 class="quickLook__section__main__item__top__label__name">{neuron.name}
								<svg viewBox="0 0 16 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
												<g id="nns_flashboard_home" transform="translate(-120.000000, -344.000000)" fill="#888888" fill-rule="nonzero">
														<g id="accounts-section" transform="translate(16.000000, 336.000000)">
																<g id="section-heading" transform="translate(11.500000, 0.000000)">
																		<path d="M108.196618,13.3907315 L103.070783,8.26489643 C102.717587,7.91170119 102.146452,7.91170119 101.810331,8.26489643 C101.457136,8.61809168 101.457136,9.18922734 101.810331,9.52534767 L105.423625,13.1386412 L93.3908533,13.1386412 C92.9037477,13.1386412 92.5,13.5417167 92.5,14.0294946 C92.5,14.5166001 92.9030755,14.9203479 93.3908533,14.9203479 L105.407155,14.9203479 L101.810331,18.5336414 C101.457136,18.8868367 101.457136,19.4579724 101.810331,19.7940927 C101.978392,19.9621529 102.213407,20.0632578 102.449095,20.0632578 C102.68411,20.0632578 102.902723,19.9792278 103.087858,19.7940927 L108.230835,14.6511155 C108.398895,14.4830553 108.5,14.24804 108.5,14.0123524 C108.465864,13.7943952 108.364764,13.5587244 108.196702,13.3906643 L108.196618,13.3907315 Z" id="Path"></path>
																</g>
														</g>
												</g>
										</g>
								</svg>
							</h3>
						</a>
						<div class="quickLook__section__main__item__top__value">{neuron.balance.toFixed(4)} <span class="icp">ICP</span></div>
					</div>
					<div class="quickLook__section__main__item__bottom">
						<div class="quickLook__section__main__item__bottom__status">
							<div class="quickLook__section__main__item__bottom__status">
								{#if neuron.status.dissolving}
									<svg v-if="!item.status.dissolving" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
									 <g fill-rule="evenodd">
										<path d="m33.332 25c0-9.2031 7.4648-16.668 16.668-16.668s16.668 7.4648 16.668 16.668v16.668h-8.3359v-16.668c0-4.6016-3.7305-8.332-8.332-8.332s-8.332 3.7305-8.332 8.332v16.668h-8.3359z"/>
										<path d="m33.332 37.5c-9.2031 0-16.664 7.4609-16.664 16.668v20.832c0 9.2031 7.4609 16.668 16.664 16.668h33.336c9.2031 0 16.664-7.4648 16.664-16.668v-20.832c0-9.207-7.4609-16.668-16.664-16.668z"/>
									 </g>
									</svg>
								{:else}
									<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
									 <g>
										<path d="m90 30v-15c0-2.7617-2.2383-5-5-5s-5 2.2383-5 5v1.5391c-11.023-9.8828-26.207-13.711-40.598-10.23-14.391 3.4844-26.148 13.824-31.438 27.652-5.2852 13.832-3.4297 29.379 4.9688 41.574 8.3984 12.191 22.262 19.473 37.066 19.465 2.7617 0 5-2.2383 5-5s-2.2383-5-5-5c-11.656 0-22.547-5.8086-29.047-15.484-6.5039-9.6758-7.7578-21.953-3.3516-32.746s13.898-18.684 25.312-21.043c11.418-2.3633 23.258 1.1133 31.586 9.2734h-4.5c-2.7617 0-5 2.2383-5 5s2.2383 5 5 5h15c1.3242 0 2.5977-0.52734 3.5352-1.4648s1.4648-2.2109 1.4648-3.5352z"/>
										<path d="m95 50c0 6.668-10 6.668-10 0s10-6.668 10 0"/>
										<path d="m83.023 78.422c0 6.6641-10 6.6641-10 0 0-6.668 10-6.668 10 0"/>
										<path d="m91.977 65c0 6.668-10 6.668-10 0s10-6.668 10 0"/>
										<path d="m70 87.012c0 6.6641-10 6.6641-10 0 0-6.668 10-6.668 10 0"/>
										<path d="m50 25c-2.7617 0-5 2.2383-5 5v20c0 1.3242 0.52734 2.5977 1.4648 3.5352l10 10c1.9609 1.8945 5.082 1.8672 7.0078-0.0625 1.9297-1.9258 1.957-5.0469 0.0625-7.0078l-8.5352-8.5352v-17.93c0-1.3242-0.52734-2.5977-1.4648-3.5352s-2.2109-1.4648-3.5352-1.4648z"/>
									 </g>
									</svg>
								{/if}
				
				
								<span>
									{neuron.status.duration}
									{#if neuron.status.dissolving}
										<span v-if="!item.status.dissolving"> dissolve delay</span>
									{:else}
										<span v-else> remaining</span>
									{/if}
								</span>
							</div>
						</div>
					</div>
				</div>
				{/if}
			{/each}
			
		</div>
	</section>
</div>

<style lang="sass">
@use "../assets/styles/_var.sass" as *

.quickLook
	&__section
		display: grid
		grid-gap: 1rem
	
		&__header
			display: grid
			grid-template-columns: auto auto
			justify-content: space-between
			align-items: flex-end
			padding: 0 0.75rem
	
			&__title
				font-size: 1.25rem
				font-weight: 500
	
				&__noLink
					font-size: 2rem
	
				&__link
					svg
						width: 1rem
						margin-left: 0.25rem
	
			&__total
				color: #fff
				font-size: 1.125rem
				font-weight: 500
	
				span.icp
					font-size: 75%
					font-family: $sans
					font-weight: 500
	
		&__main
			border-radius: 1rem
			border: 1px solid rgba(#fff,0.05)
			box-shadow: 0 0 0.75rem rgba(#000,0.35)
	
			&__item
				display: grid
				grid-gap: 0.5rem
				padding: 1.5rem 0.75rem
	
				&:not(:last-child)
					border-bottom: 1px solid rgba(#fff,0.1)
	
				&__top
					display: grid
					grid-template-columns: 1fr auto
					justify-content: space-between
					grid-gap: 0.5rem
	
					&__label
						display: grid
						grid-template-columns: auto auto
						justify-content: flex-start
						align-items: center
						grid-gap: 0.5rem
	
						&__dot
							width: 0.625rem
							height: 0.625rem
							border-radius: 50%
	
						&__name
							display: grid
							grid-template-columns: auto auto
							align-items: center
							grid-gap: 0.5rem
							font-size: 1.125rem
							font-weight: 500
	
							svg
								display: none
								width: 0.875rem
	
					&__value
						font-size: 1.125rem
	
						span.icp
							font-size: 75%
							font-family: $sans
							font-weight: 500
	
				&__bottom
					display: grid
					grid-template-columns: auto 1rem
					justify-content: flex-start
					align-items: center
					grid-gap: 0.5rem
	
					&__account
						text-overflow: ellipsis
						overflow: hidden
						color: $medGrey
						font-size: 0.875rem
	
					&__status
						color: $medGrey
						font-size: 0.875rem
						display: grid
						align-items: center
						grid-template-columns: auto auto
						grid-gap: 0.25rem
	
						svg
							fill: $medGrey
							height: 1rem
</style>