<script>
	import accounts from '../json/accounts.json'
	import CopyToClipboard from '../components/CopyToClipboard.svelte'
	import { feedbackMsg } from '../stores/Stores.js'

	// handle copying text to clipboard
	const handleSuccessfullyCopied = () => {
			feedbackMsg.set('Address Copied!')
	}
	const handleFailedCopy = () => {
			feedbackMsg.set('Copy failed')
	}

	export let sectionName
	export let hideHeader
	export let hideInfo
	export let showTo
	
	// get total balance of all accounts
	const totalBalance = () => {
		let total = 0
		for (let i = 0; i < accounts.length; i++) {
			total += accounts[i].balance
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
			{#each accounts as account (account.id)}
				{#if showTo > 0 && account.id < (showTo + 1) }
					<div class="quickLook__section__main__item">
						<div class="quickLook__section__main__item__top">
							<a href="/{sectionName.toLowerCase()}/{account.id}" class="quickLook__section__main__item__top__label">
								<div class="quickLook__section__main__item__top__label__dot {account.color}"></div>
								<h3 class="quickLook__section__main__item__top__label__name">{account.name}
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
							<div class="quickLook__section__main__item__top__value">{account.balance.toFixed(4)} <span class="icp">ICP</span></div>
						</div>
						{#if !hideInfo}
							<div class="quickLook__section__main__item__bottom" data-message="Copied">
								<CopyToClipboard text={account.address} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
									<div on:click={copy} class="quickLook__section__main__item__bottom__account copyThis">{account.address}</div>
									<div on:click={copy} class="quickLook__section__main__item__bottom__copyIcon center-all-single">
										<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
											<path d="m23.395 21.238h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.504c0 4.1523-3.3984 7.5508-7.5508 7.5508h-37.031c-4.1523 0-7.5508-3.3945-7.5508-7.5508v-59.504c0-4.1523 3.3984-7.5508 7.5508-7.5508zm16.18-17.078h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.5c0 4.1523-3.3984 7.5508-7.5508 7.5508h-4.8945v-49.973c0-6.207-5.0781-11.281-11.281-11.281h-28.402v-5.793c0-4.1523 3.3984-7.5508 7.5508-7.5508z" fill-rule="evenodd"/>
										</svg>
									</div>
								</CopyToClipboard>

							</div>
						{/if}
					</div>

				{:else if showTo === 'all'}
					<div class="quickLook__section__main__item">
						<div class="quickLook__section__main__item__top">
							<a href="/{sectionName.toLowerCase()}/{account.id}" class="quickLook__section__main__item__top__label">
								<div class="quickLook__section__main__item__top__label__dot {account.color}"></div>
								<h3 class="quickLook__section__main__item__top__label__name">{account.name}
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
							<div class="quickLook__section__main__item__top__value">{account.balance.toFixed(4)} <span class="icp">ICP</span></div>
						</div>
						{#if !hideInfo}
							<div class="quickLook__section__main__item__bottom" data-message="Copied">
								<CopyToClipboard text={account.address} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
									<div on:click={copy} class="quickLook__section__main__item__bottom__account copyThis">{account.address}</div>
								</CopyToClipboard>
								<div class="quickLook__section__main__item__bottom__copyIcon center-all-single">
									<svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
										<path d="m23.395 21.238h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.504c0 4.1523-3.3984 7.5508-7.5508 7.5508h-37.031c-4.1523 0-7.5508-3.3945-7.5508-7.5508v-59.504c0-4.1523 3.3984-7.5508 7.5508-7.5508zm16.18-17.078h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.5c0 4.1523-3.3984 7.5508-7.5508 7.5508h-4.8945v-49.973c0-6.207-5.0781-11.281-11.281-11.281h-28.402v-5.793c0-4.1523 3.3984-7.5508 7.5508-7.5508z" fill-rule="evenodd"/>
									</svg>
								</div>
							</div>
						{/if}
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
	
					&__copyIcon
						svg
							fill: $medGrey
							height: 1rem
</style>