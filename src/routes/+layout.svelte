<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import './styles.css';
	import Loader from '../lib/components/Loader.svelte';
	import ScrollToTop from '../lib/components/ScrollToTop.svelte';

	let isLoading: boolean = false;
	let error: boolean = false;
</script>

<div class="app">
	{#if isLoading}
		<Loader />
	{:else if error}
		<p>There was an error</p>
	{:else}
		<Header />

		<main>
			<slot />
		</main>

		<ScrollToTop />

		<Footer />
	{/if}
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0 1rem;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 600px) {
		main {
			max-width: 34rem;
			padding: 0;
		}
	}

	@media (min-width: 905px) {
		main {
			max-width: 52.5rem;
			padding: 0;
		}
	}

	@media (min-width: 1024px) {
		main {
			max-width: 62rem;
			padding: 0;
		}
	}

	@media (min-width: 1240px) {
		main {
			max-width: 72rem;
			padding: 0;
		}
	}

	@media (min-width: 1480px) {
		main {
			max-width: 90rem;
			padding: 0;
		}
	}
</style>
