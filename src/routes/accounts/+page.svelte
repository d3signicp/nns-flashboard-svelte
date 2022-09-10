<script>
	import { fade } from 'svelte/transition';
	import QuicklookAccounts from '/src/components/QuicklookAccounts.svelte'	
	import Glow from '/src/components/Glow.svelte'
</script>

<div in:fade class="page-wrapper padded">
	<Glow />
	<QuicklookAccounts
		sectionName="Accounts"
		hideHeader={true}
		showTo="all"
	/>
</div>
