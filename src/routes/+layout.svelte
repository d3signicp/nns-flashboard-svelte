<script>
import '../assets/styles/style.scss'
import TopNav from '../components/TopNav.svelte'
import SideNav from '../components/SideNav.svelte'

// let navOpen = false
// const toggleMobileNav = () => { navOpen = !navOpen }
// const toggleMobileNav = () => { navX = '-18rem' }
</script>

<div id="app">
	<TopNav />
	<SideNav />
		
	<slot></slot>
</div>