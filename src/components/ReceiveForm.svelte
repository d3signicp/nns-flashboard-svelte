<script>
	import accounts from '../json/accounts.json'
	import Tabs from '/src/components/Tabs.svelte'
	import { createEventDispatcher } from 'svelte'
	import { feedbackMsg, feedbackOpen, overlayOpen } from '../stores/Stores.js'
	import { fade, slide } from 'svelte/transition';
	import QrCode from '/src/components/QrCode.svelte'
	import CopyToClipboard from '/src/components/CopyToClipboard.svelte'

	// handle copying text to clipboard
	const handleSuccessfullyCopied = () => {
			feedbackMsg.set('Address Copied!')
	}
	const handleFailedCopy = () => {
			feedbackMsg.set('Copy failed')
	}
	
	// tabs
	let clickable = true
	let activeItem = 'Choose Account'
	let items = [
		{
			id: 1,
			name: 'Choose Account',
		},
		{
			id: 2,
			name: 'Recieve',
		},
		{
			id: 4,
			name: 'Last Step',
		},
	]
	// get index of active step and increase by 2 if anything other than first step
	// (used as divisor for progress bar width)
	let cols = items.length - 1
	const min = 0;
	const max = cols + 2;
	
	// Clamp number between two values with the following line:
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max)
	
	$: activeStepIndex = items.map(function(o) { return o.name; }).indexOf(activeItem)
	let activeStepId
	$: 
		if (activeStepIndex === 0) activeStepId = activeStepIndex + 1
		else if (activeStepIndex > 0 && activeStepIndex !== cols) activeStepId = activeStepIndex + 1
	// $: activeStepId = activeStepIndex === 0 ? 1 : clamp(activeStepId, min, cols + 2)
	$: clampy = clamp(activeStepId, min, cols + 1)

	// change tab based on tab name
	const tabChange = (e) => {
		activeItem = e.detail
	}
	
	// set account sending from
	let sendFrom = 0
	let arrIndex
	const chooseAccount = (acct) => {
		activeItem = items[1].name
		sendFrom = acct - 1
	}
	
	// set recipient account
	let selected
	let extAddress = ''
	let toAccount
	let sendToIndex = 0
	$: recipient = selected ? selected : extAddress
	$: shortRecicpient = recipient.substring(0,8) + '**********' + recipient.substring(recipient.length - 8)
	// $:
	// if( accounts.indexOf(selected) ) toAccount = true
	// else address = selected
	// test address input against regex
	let validAddress
	let validExtAddress
	const addressPattern = /^[a-f0-9]{64}$/
	$:
		if( addressPattern.test(selected) ) validAddress = true
		else validAddress = false
	$:
		if( addressPattern.test(extAddress) ) validExtAddress = true
		else validExtAddress = false
	// test if send amount is empty OR greater than sender account balance
	let sendAmount = ''
	let balanceExceeded
	$:
		if( sendAmount > accounts[sendFrom].balance || sendAmount === '' ) balanceExceeded = true		
		else balanceExceeded = false
		
	$:
		if( accounts.map(function(o) { return o.address; }).indexOf(recipient) >= 0 ){
			sendToIndex = accounts.map(function(o) { return o.address; }).indexOf(recipient)
		} else {
			sendToIndex = ''
		}
		
	let fee = 0.0001
	const completeTxn = (rec, val) => {
		activeItem = items[2].name
		sendAmount = val

	}
	
	// finish progress bar
	const txnSent = (rec) => {
		activeItem = items[3].name
		cols = items.length
		document
		// sendFrom = acct - 1
	}

</script>

<!-- <p>{sendFrom}</p> -->

<!-- <p>Clamped: {clampy}</p> -->
<Tabs {activeItem} {items} {clickable} {activeStepId} {activeStepIndex} {clampy} on:tabChange={tabChange}/>
	{#if activeItem === items[0].name}
		<div in:fade class="[ form ]">
			<section class="form__section choose-account">
				<div class="form__section__header">
					<h2 class="form__section__header__title offScreen">Accounts</h2>
				</div>
				<div class="form__section__main">
					{#each accounts as account (account.id)}
						<div class="form__section__main__item">
							<div class="form__section__main__item__top">
								<button class="form__section__main__item__top__label" on:click={() => chooseAccount(account.id)}>
									<div class="form__section__main__item__top__label__dot {account.color}"></div>
									<h3 class="form__section__main__item__top__label__name">{account.name}
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
								</button>
								<div class="form__section__main__item__top__value">{account.balance.toFixed(4)} <span class="icp">ICP</span></div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		</div>
	{:else if activeItem === items[1].name}
		<div in:fade class="[ form ]">
			<section class="form__section std-padding send-to">
				<div class="send-to__top">
					<h3 class="send-to__top__heading half">Account</h3>
					<h3 class="send-to__top__heading half">Balance</h3>
					<div class="send-to__top__label">
						<div class="send-to__top__label__dot {accounts[sendFrom].color}"></div>
						<h3 class="send-to__top__label__name">{accounts[sendFrom].name}</h3>
					</div>
					<div class="send-to__top__value" on:click={() => sendAmount = accounts[sendFrom].balance}>{accounts[sendFrom].balance.toFixed(4)} <span class="icp">ICP</span></div>
				</div>
				<div class="send-to__address">
					<CopyToClipboard text={accounts[sendFrom].address} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
						<span on:click={copy} class="copyThis">{accounts[sendFrom].address}</span>
						<svg on:click={copy} version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<path d="m23.395 21.238h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.504c0 4.1523-3.3984 7.5508-7.5508 7.5508h-37.031c-4.1523 0-7.5508-3.3945-7.5508-7.5508v-59.504c0-4.1523 3.3984-7.5508 7.5508-7.5508zm16.18-17.078h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.5c0 4.1523-3.3984 7.5508-7.5508 7.5508h-4.8945v-49.973c0-6.207-5.0781-11.281-11.281-11.281h-28.402v-5.793c0-4.1523 3.3984-7.5508 7.5508-7.5508z" fill-rule="evenodd"/>
						</svg>
					</CopyToClipboard>
				</div>
				<QrCode codeValue={accounts[sendFrom].address} squareSize=300/>
				<button class="send-to__btn" on:click={() => overlayOpen.set(false)}>Done</button>
			</section>
		</div>
	{/if}

<style lang="sass">
@use "../assets/styles/_var.sass" as *

.form
	&__section
		display: grid
	
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
	
			&__total
				color: #fff
				font-size: 1.125rem
				font-weight: 500
	
		&__main
			&__item
				display: grid
				grid-gap: 0.5rem
				padding: 0 1.25rem
	
				&:not(:last-child)
					border-bottom: 1px solid rgba(#fff,0.1)
	
				&__top
					display: grid
					grid-template-columns: 1fr auto
					justify-content: space-between
					align-items: center
					grid-gap: 0.5rem
	
					&__label
						display: grid
						grid-template-columns: auto auto
						justify-content: flex-start
						align-items: center
						grid-gap: 0.5rem
						padding: 1.5rem 0
	
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
							color: $white
	
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
		
	.send-to
		display: grid
		grid-gap: 2rem
		
		&__input-group
			display: grid
			align-items: center
			grid-gap: 0.5rem
			
			&__label
				text-transform: uppercase
				color: $medGrey
				font-weight: 500
				font-size: 0.875rem
				
			&__accounts-list
				background: rgba($white, 8%)
				border: none
				border-radius: 0.5rem
				padding: 0.5rem 1rem
				color: $white
				font-size: 1.125rem
				border: 1px solid transparent
				outline: none
				transition: border 0.2s ease-out, box-shadow 0.2 ease-out
				appearance: none 
				-webkit-appearance: none
				-moz-appearance: none
				position: relative
				background-image: linear-gradient(45deg, transparent 50%, gray 50%),  linear-gradient(135deg, gray 50%, transparent 50%)
				background-position: calc(100% - 1.4rem) calc(1.25rem + 0px), calc(100% - 1rem) calc(1.25rem + 0px)
				background-size: .4rem .4rem, .4rem .4rem
				background-repeat: no-repeat
				
				&:focus
					border: 1px solid $dfBlueLight
					box-shadow: 0 0 0.75rem rgba($dfBlueLight, 0.5)
					background-image: linear-gradient(45deg, gray 50%, transparent 50%),  linear-gradient(135deg, transparent 50%, gray 50%)
					background-position: calc(100% - 1rem) 1.125rem, calc(100% - 1.4rem) 1.125rem
					background-size: .4rem .4rem, .4rem .4rem
	
			&__field
				background: rgba($white, 8%)
				border: none
				border-radius: 0.5rem
				padding: 0.5rem 1rem
				color: $white
				font-size: 1.125rem
				transition: all 0.2s ease-out
				outline: none
				border: 1px solid transparent
				width: 100%
				
				&.balance-exceeded,
				&.invalid
					border: 1px solid red
					
					&:focus
						border: 1px solid red
						box-shadow: 0 0 0.75rem rgba(red, 0.5)
	
				&:focus
					border: 1px solid $dfBlueLight
					box-shadow: 0 0 0.75rem rgba($dfBlueLight, 0.5)
					
				&::selection
					color: $white
					background: rgba($dfBlueLight, 0.5)
				
		&__btn
			background: $dfMagenta
			border-radius: 0.5rem
			padding: 0.5rem 1rem
			color: $white
			transition: all 0.2s ease-out
				
		&__top
			display: grid
			grid-template-columns: 1fr auto
			justify-content: space-between
			align-items: center
			grid-gap: 0.5rem
			
			> *:nth-child(2n+2)
				justify-self: flex-end
			
			&__heading
				grid-column: 1 / 3
				text-transform: uppercase
				color: $medGrey
				font-weight: 500
				font-size: 0.875rem
				
				&.half
					grid-column: unset
			
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
				
				&.receiver
					color: lighten($dfGreen,10%)
					
				&.sender
					color: lighten($dfBlueLight,15%)	
		
		&__address
			color: $medGrey
			transform: translateZ(0) scale(1, 1)
			backface-visibility: hidden
			word-break: break-all
			
			span
				color: $white
				
				&.copyThis
					color: $medGrey
			
			svg
				fill: $medGrey
				height: 1rem
				width: auto
				display: inline-block
				margin-left: 0.25rem
</style>