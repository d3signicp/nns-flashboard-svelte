<script>
	import { onMount } from "svelte";

	export let codeValue;
	export let squareSize = "100px";

	$: scriptLoaded, setNewQRcode(codeValue);

	let scriptLoaded = false;
	let qrcode;

	onMount(() => {
		let script = document.createElement("script");
		script.src =
			"https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
		document.head.append(script);

		script.onload = function () {
			qrcode = new QRCode("qrcode", {
				text: codeValue,
				width: squareSize,
				height: squareSize,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.H,
			});
		};
	});

	function setNewQRcode(codeVal) {
		if (qrcode && codeVal) {
			qrcode.clear();
			qrcode.makeCode(codeValue);
		}
	}
</script>

<div id="qrcode" />

<style lang="sass">
	#qrcode
		display: flex
		flex-direction: column
		border-radius: 1.5rem
		width: 100%
		max-width: 300px
		margin: auto
		background: white
		filter: invert(.93)
</style>