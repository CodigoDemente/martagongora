<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { getTranslationFiles } from '$lib/services/translationStore';
	import Loader from '../lib/components/Loader.svelte';
	import ScrollToTop from '../lib/components/ScrollToTop.svelte';
	import type { Language } from '../types/language';
	import type { MenuEntry } from '../types/menu';
	import './styles.css';

	export let data: {
		title: string;
		currentLanguage: string;
		languages: Language[];
		translations: any;
		images: any;
	};

	let isLoading: boolean = false;
	let currentLanguage = data.currentLanguage || 'es';
	let languages: Language[] = data.languages || [];
	let translationStore = data.translations || null;
	let error: boolean = false;
	let menu: MenuEntry[];

	const menuKeyToUrl = {
		gallery: 'galeria',
		about: 'sobre-mi',
		contact: 'contacto'
	};

	async function reloadTranslationFile(lang: string): Promise<any> {
		const data = await getTranslationFiles(lang);
		return (translationStore = data);
	}

	$: if (currentLanguage) {
		reloadTranslationFile(currentLanguage);
	}

	menu = Object.entries(menuKeyToUrl).map(([key, value]) => ({
		title: translationStore[key].title,
		url: `/${value}`
	}));
</script>

<div class="app">
	{#if isLoading}
		<Loader />
	{:else if error}
		<p>There was an error</p>
	{:else}
		<Header {menu} bind:currentLanguage {languages} />

		<main>
			<slot />
		</main>

		<ScrollToTop />

		<Footer footerContent={translationStore.footer} />
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
