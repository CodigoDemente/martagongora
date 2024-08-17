<script lang="ts">
	export let showOnPx = 300;

	let show = false;

	function goTop() {
		document.body.scrollIntoView({
			behavior: 'smooth'
		});
	}

	function scrollContainer() {
		return document.documentElement || document.body;
	}

	function handleOnScroll() {
		if (!scrollContainer()) return;

		if (scrollContainer().scrollTop > showOnPx) {
			show = true;
		} else {
			show = false;
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} />

<button class="back-to-top" class:show on:click={goTop} type="button"></button>

<style>
	button.back-to-top {
		margin: 0 !important;
		padding: 0 !important;
		background: #fff;
		height: 0px;
		width: 0px;
		overflow: hidden;
		border-radius: 50px;
		-webkit-border-radius: 50px;
		-moz-border-radius: 50px;
		color: transparent;
		clear: both;
		visibility: hidden;
		position: fixed;
		cursor: pointer;
		display: block;
		border: none;
		right: 50px;
		bottom: 75px;
		font-size: 0px;
		outline: 0 !important;
		z-index: 99;
		-webkit-transition: all 0.3s ease-in-out;
		transition: all 0.3s ease-in-out;
	}

	button.back-to-top:hover,
	button.back-to-top:active,
	button.back-to-top:focus {
		outline: 0 !important;
	}

	button.back-to-top::before,
	button.back-to-top::after {
		content: '';
		display: block;
		border-bottom: solid 10px #8c7171;
		border-left: solid 10px transparent;
		line-height: 0;
		border-right: solid 10px transparent;
		height: 0;
		margin: 18px auto 0;
		width: 0;
		border-radius: 20px;
		visibility: hidden;
	}

	button.back-to-top.show::after,
	button.back-to-top.show::before {
		visibility: visible;
	}

	button.back-to-top::after {
		border-bottom-color: #fff;
		position: relative;
		top: -24px;
	}

	button.back-to-top.show {
		display: block;
		background: #fff;
		font-size: 25px;
		right: 25px;
		bottom: 50px;
		height: 50px;
		width: 50px;
		visibility: visible;
		box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
	}

	button.back-to-top.show:active {
		box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
		-webkit-box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
		-moz-box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.25);
	}
</style>
