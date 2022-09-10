import { writable } from 'svelte/store'
import QuicklookAccounts from '../components/QuicklookAccounts.svelte'
import QuicklookNeurons from '../components/QuicklookNeurons.svelte'
import SendForm from '../components/SendForm.svelte'

// handle sidenav
export const navOpen = writable(false)

// handle feedback popup
export const feedbackOpen = writable(false)
export const feedbackMsg = writable('Default Feedback')

// handle overlay popup
export const overlayOpen = writable(false)

// components for overlay insertion
export const OverlayChildComponent = writable([
	{
		id: 1,
		component: QuicklookAccounts,
		hideHeader: false,
		hideInfo: true,
		sectionName: 'Accounts',
		showTo: 'all'
	},
	{
		id: 2,
		component: QuicklookNeurons,
		hideHeader: false,
		hideInfo: true,
		sectionName: 'Neurons',
		showTo: 'all'
	},
	{
		id: 3,
		component: SendForm,
		hideHeader: false,
		hideInfo: true,
		sectionName: 'Neurons',
		showTo: 'all'
	}
])

// export default OverlayChildComponent