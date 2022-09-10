<script>
	import { fade, slide } from 'svelte/transition';
	// import { flip } from 'svelte/animate';
	import { page } from '$app/stores'
	import accounts from '/src/json/accounts.json'
	import Glow from '/src/components/Glow.svelte'
	import dateFormat from 'dateformat'
	import CopyToClipboard from '/src/components/CopyToClipboard.svelte'
	import Feedback from '/src/components/Feedback.svelte'
	import Overlay from '/src/components/Overlay.svelte'
	import { feedbackMsg, feedbackOpen, overlayOpen, OverlayChildComponent } from '/src/stores/Stores.js'
	
	// overlay variables
	let c = 2
	let padded = false
	
	// handle copying text to clipboard
	const handleSuccessfullyCopied = () => {
			feedbackMsg.set('Address Copied!')
	}
	const handleFailedCopy = () => {
			feedbackMsg.set('Copy failed')
	}

	// get account ID
	const acctId = $page.params.id - 1
	
	// set ref for showing/hiding txn item
	let openTxn
	let shortDecs
	// let refTxns = []
	// let i
	// while(i < accounts.length+1){
	// 	refTxns.push(accounts[i].id);
	// 	i++
	// 	console.log('Ref:' + refTxns[i])
	// }
	// let show = 0
	// set min and max decimals
	let globalDecs = [4, 10]
	// wrap decimals
	const wrapDecimals = (value, sec) => {
		return value.split('.')[sec]
	}
	// shorten decimals
	const shortenDecs = (amount, decimals) => {
		return amount.substr(0, decimals)
	}
	// format txn date
	const getDate = (date) => {
		return dateFormat(date, 'paddedShortDate')
	}
	// show txn details
	const showDetails = (i) => {
		openTxn !== i ? openTxn = i : openTxn = null
		shortDecs !== i ? shortDecs = i : shortDecs = null
	}
</script>

<div in:fade class="page-wrapper padded">
	<Glow />
	<div class="account-details">
		<header>
			<div class="account-name">
				<h2><div class="dot {accounts[acctId].color}"></div>{ accounts[acctId].name }</h2>
				<div class="account-balance">{ accounts[acctId].balance } <span class="icp">ICP</span></div>
			</div>
			<CopyToClipboard text={accounts[acctId].address} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				<div class="account-address" on:click={copy}>
					<span class="copyThis">{ accounts[acctId].address }</span>
					<svg version="1.1" width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						<path d="m23.395 21.238h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.504c0 4.1523-3.3984 7.5508-7.5508 7.5508h-37.031c-4.1523 0-7.5508-3.3945-7.5508-7.5508v-59.504c0-4.1523 3.3984-7.5508 7.5508-7.5508zm16.18-17.078h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.5c0 4.1523-3.3984 7.5508-7.5508 7.5508h-4.8945v-49.973c0-6.207-5.0781-11.281-11.281-11.281h-28.402v-5.793c0-4.1523 3.3984-7.5508 7.5508-7.5508z" fill-rule="evenodd"/>
					</svg>
				</div>
			</CopyToClipboard>
		</header>
	
		<section class="actions">
			<button class="send" on:click={() => overlayOpen.set(true)}>
				<span>Send ICP</span>
				<!-- <generalModal :modalOn="storeModal.modalOn" ref="modal1">
					Testing Modal
				</generalModal> -->
			</button>
			<button class="transfer" data-onclick="storeModal.toggleModal">
				Transfer to Account
				<!-- <generalModal :modalOn="storeModal.modalOn" ref="modal2">
					Testing Modal 123
				</generalModal> -->
			</button>
		</section>
	
		<ul class="reset-list">
			{#each accounts[acctId].txns as txn, i (txn.id)}
				<li class:open={openTxn === i}>
					<div class="top" on:click={() => showDetails(i)}>
						<div class="txn-type">
							{#if txn.txnType == 'Received'}
								<svg class="received" width="32" height="32" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						 		<path d="M50,12.5c-3.5,0-6.2,2.8-6.2,6.2s2.8,6.2,6.2,6.2c1.7,0,3.2-0.7,4.4-1.8s1.8-2.8,1.8-4.4c0-1.6-0.7-3.2-1.8-4.4S51.7,12.5,50,12.5z M50,31.3c-3.5,0-6.2,2.8-6.2,6.2v28.8L29.5,52c-1.2-1.2-2.8-1.9-4.5-1.9c-5.6,0-8.4,6.8-4.3,10.7l24.9,24.9c2.4,2.4,6.4,2.4,8.8,0l24.9-24.9c6.3-5.9-2.9-15.1-8.8-8.8L56.2,66.2V37.6C56.2,34.1,53.5,31.3,50,31.3L50,31.3z" fill-rule="evenodd"/>
								</svg>
							{:else if txn.txnType == 'Sent'}
								<svg class="sent" width="32" height="32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve">
									<path fill-rule="evenodd" clip-rul="evenodd" d="M12.6,50.1c0,3.5,2.8,6.2,6.2,6.2s6.2-2.8,6.2-6.2c0-1.7-0.7-3.2-1.8-4.4s-2.8-1.8-4.4-1.8c-1.6,0-3.2,0.7-4.4,1.8S12.6,48.4,12.6,50.1z M31.4,50.1c0,3.5,2.8,6.2,6.2,6.2h28.8L52.1,70.6c-1.2,1.2-1.9,2.8-1.9,4.5c0,5.6,6.8,8.4,10.7,4.3l24.9-24.9c2.4-2.4,2.4-6.4,0-8.8L60.9,20.8c-5.9-6.3-15.1,2.9-8.8,8.8l14.2,14.3H37.7C34.2,43.9,31.4,46.6,31.4,50.1L31.4,50.1z"/>
								</svg>
							{/if}

							<span class="txn-amount">
								<span>
									<span class="int">
									{#if txn.txnType == 'Received'}
										<span>-</span>{ wrapDecimals(txn.amount, 0) }.
									{:else}
										<span>+</span>{ wrapDecimals(txn.amount, 0) }.
									{/if}
									</span>
									{#if shortDecs !== i }
										<div in:fade>
											<span in:slide class="dec short">{ shortenDecs(wrapDecimals(txn.amount, 1), globalDecs[0]) }
												<span class="icp-icon">
													<svg version="1.1" id="katman_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511 511" style="enable-background:new 0 0 511 511;" xml:space="preserve">
														<path style="fill:rgba(255,255,255,0.1);" d="M255.5,511C396.6,511,511,396.6,511,255.5S396.6,0,255.5,0S0,114.4,0,255.5C0,396.6,114.4,511,255.5,511z"/>
														<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="320.2117" y1="2014.28" x2="438.6515" y2="2133.9614" gradientTransform="matrix(1 0 0 1 -20.9449 -1831.6378)">
															<stop  offset="0.21" style="stop-color:#F15A24"/>
															<stop  offset="0.6841" style="stop-color:#FBB03B"/>
														</linearGradient>
														<path style="fill:url(#SVGID_1_);" d="M344.3,169.1c-19.3,0-40.3,10.5-62.6,31.1c-10.5,9.7-19.7,20.3-26.5,28.6c0,0,10.8,12.4,22.6,25.7c6.5-8.1,15.6-19,26.3-28.9c19.7-18.4,32.6-22.2,40.1-22.2c27.7,0,50.3,23.3,50.3,52c0,28.4-22.5,51.7-50.3,52c-1.3,0-2.9-0.2-4.8-0.6c8.1,3.7,16.9,6.4,25,6.4c50.8,0,60.9-35.1,61.4-37.6c1.4-6.4,2.3-13.2,2.3-20.1C428.1,207.9,390.5,169.1,344.3,169.1z"/>
														<linearGradient id="SVGID_00000123415286252230076630000007395768615748947860_" gradientUnits="userSpaceOnUse" x1="232.6589" y1="2160.0146" x2="114.2188" y2="2040.3334" gradientTransform="matrix(1 0 0 1 -20.9449 -1831.6378)">
															<stop  offset="0.21" style="stop-color:#ED1E79"/>
															<stop  offset="0.8929" style="stop-color:#522785"/>
														</linearGradient>
														<path style="fill:url(#SVGID_00000123415286252230076630000007395768615748947860_);" d="M166.7,341.9c19.3,0,40.3-10.5,62.6-31.1c10.5-9.7,19.7-20.3,26.5-28.6c0,0-10.8-12.4-22.6-25.7c-6.5,8.1-15.6,19-26.3,28.9c-19.7,18.3-32.7,22.2-40.1,22.2c-27.7,0-50.3-23.3-50.3-52c0-28.4,22.5-51.7,50.3-52c1.3,0,2.9,0.2,4.8,0.6c-8.1-3.7-16.9-6.4-25-6.4c-50.8-0.1-60.9,35-61.4,37.6c-1.4,6.4-2.3,13.2-2.3,20.1C82.8,303,120.3,341.9,166.7,341.9z"/>
														<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#29ABE2;" d="M205.4,226.5c-5.6-5.4-32.7-27.4-58.7-28.2c-46.4-1.2-60,32.5-61.2,36.8c9-37.7,42.1-65.8,81.4-66c32.1,0,64.5,31.4,88.5,59.8l0.1-0.1c0,0,10.8,12.4,22.6,25.7c0,0,13.5,15.9,27.7,29.8c5.6,5.4,32.6,27.1,58.6,27.9c47.7,1.3,60.9-34.2,61.5-36.9c-8.8,38-42,66.2-81.5,66.4c-32.1,0-64.5-31.4-88.6-59.8c0,0.1-0.1,0.1-0.1,0.2c0,0-10.8-12.4-22.6-25.7C233.2,256.4,219.7,240.4,205.4,226.5z M85.4,235.5c0-0.1,0-0.2,0.1-0.3C85.4,235.3,85.4,235.4,85.4,235.5z"/>
													</svg>
												</span>
											</span>
										</div>
									{:else}
										<div in:fade>
											<span in:slide class="dec long">{ shortenDecs(wrapDecimals(txn.amount, 1), globalDecs[1]) }
												<span class="icp-icon">
													<svg version="1.1" id="katman_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511 511" style="enable-background:new 0 0 511 511;" xml:space="preserve">
														<path style="fill:rgba(255,255,255,0.1);" d="M255.5,511C396.6,511,511,396.6,511,255.5S396.6,0,255.5,0S0,114.4,0,255.5C0,396.6,114.4,511,255.5,511z"/>
														<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="320.2117" y1="2014.28" x2="438.6515" y2="2133.9614" gradientTransform="matrix(1 0 0 1 -20.9449 -1831.6378)">
															<stop  offset="0.21" style="stop-color:#F15A24"/>
															<stop  offset="0.6841" style="stop-color:#FBB03B"/>
														</linearGradient>
														<path style="fill:url(#SVGID_1_);" d="M344.3,169.1c-19.3,0-40.3,10.5-62.6,31.1c-10.5,9.7-19.7,20.3-26.5,28.6c0,0,10.8,12.4,22.6,25.7c6.5-8.1,15.6-19,26.3-28.9c19.7-18.4,32.6-22.2,40.1-22.2c27.7,0,50.3,23.3,50.3,52c0,28.4-22.5,51.7-50.3,52c-1.3,0-2.9-0.2-4.8-0.6c8.1,3.7,16.9,6.4,25,6.4c50.8,0,60.9-35.1,61.4-37.6c1.4-6.4,2.3-13.2,2.3-20.1C428.1,207.9,390.5,169.1,344.3,169.1z"/>
														<linearGradient id="SVGID_00000123415286252230076630000007395768615748947860_" gradientUnits="userSpaceOnUse" x1="232.6589" y1="2160.0146" x2="114.2188" y2="2040.3334" gradientTransform="matrix(1 0 0 1 -20.9449 -1831.6378)">
															<stop  offset="0.21" style="stop-color:#ED1E79"/>
															<stop  offset="0.8929" style="stop-color:#522785"/>
														</linearGradient>
														<path style="fill:url(#SVGID_00000123415286252230076630000007395768615748947860_);" d="M166.7,341.9c19.3,0,40.3-10.5,62.6-31.1c10.5-9.7,19.7-20.3,26.5-28.6c0,0-10.8-12.4-22.6-25.7c-6.5,8.1-15.6,19-26.3,28.9c-19.7,18.3-32.7,22.2-40.1,22.2c-27.7,0-50.3-23.3-50.3-52c0-28.4,22.5-51.7,50.3-52c1.3,0,2.9,0.2,4.8,0.6c-8.1-3.7-16.9-6.4-25-6.4c-50.8-0.1-60.9,35-61.4,37.6c-1.4,6.4-2.3,13.2-2.3,20.1C82.8,303,120.3,341.9,166.7,341.9z"/>
														<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#29ABE2;" d="M205.4,226.5c-5.6-5.4-32.7-27.4-58.7-28.2c-46.4-1.2-60,32.5-61.2,36.8c9-37.7,42.1-65.8,81.4-66c32.1,0,64.5,31.4,88.5,59.8l0.1-0.1c0,0,10.8,12.4,22.6,25.7c0,0,13.5,15.9,27.7,29.8c5.6,5.4,32.6,27.1,58.6,27.9c47.7,1.3,60.9-34.2,61.5-36.9c-8.8,38-42,66.2-81.5,66.4c-32.1,0-64.5-31.4-88.6-59.8c0,0.1-0.1,0.1-0.1,0.2c0,0-10.8-12.4-22.6-25.7C233.2,256.4,219.7,240.4,205.4,226.5z M85.4,235.5c0-0.1,0-0.2,0.1-0.3C85.4,235.3,85.4,235.4,85.4,235.5z"/>
													</svg>
												</span>
											</span>
										</div>
									{/if}
								</span>
							</span>
						</div>
						<div class="date-time">
							<div class="txn-date">
								{ getDate(txn.date) }
							</div>
							<div class="txn-time">
								{ txn.time }
							</div>
						</div>
						<div class="expand-details" class:open={openTxn === i}>
							<svg width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
						 	<path d="m45.582 69c2.4414 2.4375 6.3945 2.4375 8.8359 0l30.207-30.207c2.293-2.4648 2.2266-6.3008-0.15234-8.6797-2.3828-2.3828-6.2188-2.4492-8.6797-0.15625l-25.793 25.781-25.793-25.781c-2.4609-2.293-6.2969-2.2266-8.6797 0.15625-2.3789 2.3789-2.4453 6.2148-0.15234 8.6797z"/>
							</svg>
						</div>
					</div>
					{#if openTxn === i}
						<div transition:slide>
							<div transition:fade class="txn-toFrom" data-onclick="storeFeedback.toggleFeedbackModal" data-message="Copied">
								<CopyToClipboard text={txn.to} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
									{#if txn.to}
										<span>To: <span on:click={copy} class="copyThis">{ txn.to }</span></span>
									{:else}
										<span>From: <span on:click={copy} class="copyThis">{ txn.from }</span></span>
									{/if}
									<svg on:click={copy} version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
										<path d="m23.395 21.238h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.504c0 4.1523-3.3984 7.5508-7.5508 7.5508h-37.031c-4.1523 0-7.5508-3.3945-7.5508-7.5508v-59.504c0-4.1523 3.3984-7.5508 7.5508-7.5508zm16.18-17.078h37.031c4.1523 0 7.5508 3.3984 7.5508 7.5508v59.5c0 4.1523-3.3984 7.5508-7.5508 7.5508h-4.8945v-49.973c0-6.207-5.0781-11.281-11.281-11.281h-28.402v-5.793c0-4.1523 3.3984-7.5508 7.5508-7.5508z" fill-rule="evenodd"/>
									</svg>
								</CopyToClipboard>
							</div>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	{#if $overlayOpen}
		<Overlay alignTop={true} {padded} on:click={() => overlayOpen.set(false)}>
			<svelte:component 
				this={$OverlayChildComponent[c].component} 
				sectionName={$OverlayChildComponent[c].sectionName}
				hideHeader={$OverlayChildComponent[c].hideHeader}
				hideInfo={$OverlayChildComponent[c].hideInfo}
				showTo={$OverlayChildComponent[c].showTo}
			/>
		</Overlay>
	{/if}
	{#if $feedbackOpen}
		<Feedback />
	{/if} 	
</div>

<style lang="sass">
@use "../../../assets/styles/_var.sass" as *

.account-details
	display: grid
	grid-gap: 2rem
	
	header
		display: grid
		grid-gap: 1rem
		align-items: center
	
		.account-name
			display: flex
			justify-content: space-between
			align-items: center
	
			h2
				font-size: 1.75rem
				display: grid
				grid-template-columns: repeat(2,auto)
				grid-gap: 0.5rem
				align-items: center
	
				.dot
					width: 0.625rem
					height: 0.625rem
					border-radius: 50%
	
			.account-balance
				font-size: 1.5rem
				font-weight: 500
	
		.account-address
			font-size: 1.25rem
			color: $medGrey
			word-break: break-all
	
			svg
				fill: $medGrey
				height: 1rem
				width: auto
				margin-left: 0.25rem
	
	section.actions
		display: grid
		grid-template-columns: repeat(2,auto)
		grid-gap: 1rem
	
		button
			color: $white
			font-weight: 500
			border-radius: 3rem
			padding: 0.75rem
	
			svg
				width: 1rem
				height: auto
				margin-left: 0.5rem
	
			&.send
				background: darken($dfBlueLight,5%)
				display: flex
				align-items: center
				justify-content: center
	
			&.transfer
				background: $dfMagenta
	
	ul
		border-radius: 1rem
		border: 1px solid rgba(#fff,0.025)
		box-shadow: 0 0 0.75rem rgba(#000,0.2)
	
		li
			word-wrap: break-word
			display: grid
			// grid-gap: 0.5rem
	
			&:not(:last-child)
				border-bottom: 1px solid rgba(#fff,0.1)
	
			.top
				display: grid
				grid-template-columns: auto 1fr auto
				grid-gap: 0.5rem 1.25rem
				justify-content: space-between
				align-items: center
				padding: 1.5rem 1.25rem 1.5rem 0.75rem
	
			.txn-type
				display: grid
				grid-template-columns: repeat(2,auto)
				grid-gap: 0.5rem
				justify-content: flex-start
				align-items: center
				font-size: 1.25rem
	
				svg
					width: 1.5rem
					height: auto
	
					&.received
						fill: $dfGreen
					&.sent
						fill: $dfBlueLight
	
			.txn-amount
				display: grid
				grid-template-columns: repeat(2,auto)
				grid-gap: 0.5rem
				align-items: center
	
				> span
					display: flex
	
				.dec
					position: relative
					display: flex
	
					&.hide
						display: none
	
				.icp-icon
					display: flex
					align-items: center
					font-size: 75%
					font-weight: 500
					margin-left: 0.5rem
	
				svg
					width: 1.25rem
					height: auto
					// fill: $white
					align-self: center
					transform: translateZ(0) scale(1,1)
	
			.date-time
				color: $lightGrey
				font-weight: 400
				font-size: 0.875rem
				text-align: right
	
				.txn-date
					// color: $white
				.txn-time
					opacity: 0.7
	
			.expand-details
				display: grid
				align-items: center
	
				svg
					width: 1rem
					height: auto
					fill: $white
					// backface-visibility: hidden
					transform: rotateX(0deg) translateZ(0) scale(1,1)
					transition: transform 0.25s ease-out
	
				&.open
					svg
						transform: rotateX(180deg) translateZ(0) scale(1,1)
	
			.txn-toFrom
				color: $medGrey
				transform: translateZ(0) scale(1, 1)
				backface-visibility: hidden
				word-break: break-all
				padding: 0rem 1.25rem 1.5rem 0.75rem
				
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
