<script>
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores'
	import neurons from '/src/json/neurons.json'

	// get account ID
	const neuronId = $page.params.id - 1
</script>

<div in:fade class="page-wrapper padded">
	<h1>Neuron Details {neuronId + 1}</h1>
	<h2>Neuron Balance {neurons[neuronId].balance}</h2>
</div>
