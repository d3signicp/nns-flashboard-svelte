<script>
import '../assets/styles/style.scss'
import { onMount } from 'svelte'
import { tweened } from 'svelte/motion'
import TopNav from '../components/TopNav.svelte'
import SideNav from '../components/SideNav.svelte'
import { overlayOpen } from '../stores/Stores.js'

let y
import { browser } from '$app/env'
$: if (browser) document.body.classList.toggle('no-scroll', $overlayOpen);

onMount(() => {
	y = 0
});
</script>

<!-- <div bind:this={element}></div> -->
<svelte:window bind:scrollY={y}/>

<div id="app">
	<TopNav />

	<slot></slot>

	<SideNav />
</div>