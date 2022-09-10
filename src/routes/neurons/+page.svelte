<script>
	import { fade } from 'svelte/transition';
	import QuicklookNeurons from '/src/components/QuicklookNeurons.svelte'	
	import Glow from '/src/components/Glow.svelte'
</script>

<div in:fade class="page-wrapper padded">
	<Glow />
	<QuicklookNeurons
		sectionName="Neurons"
		hideHeader={true}
		showTo="all"
	/>
</div>
