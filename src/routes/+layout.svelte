<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { MenuEntry } from '../types/menu';
	import type { Language } from '../types/language';
	import { fetchTranslationFiles, fetchTranslationLanguages } from '$lib/api/translations';
	import { checkCache, setCache } from '$lib/services/localStorage';
	import translationStore, { type TranslationKeys, type TranslationSection } from '$lib/services/translationStore';
	import imageStore, { mappedImages } from '$lib/services/imageStore';
	import './styles.css';
	import Loader from '../lib/components/Loader.svelte';
	import { fetchBlogImages } from '$lib/api/media';

	let isLoading: boolean = true;
	let error: boolean = false;
	let currentLanguage: string = 'es';
	let languages: Language[] = [];
	let menu: MenuEntry[];

	const oneDayCache = 24 * 60 * 60 * 1000; // One day in milliseconds
	const fiftyMinCache = 50 * 60 * 1000; // 3,000,000 milliseconds

	const menuKeyToUrl = {
		gallery: 'galeria',
		about: 'sobre-mi',
		contact: 'contacto'
	};


	async function getTranslationFiles(lang: string): Promise<any> {
		const cachedData = checkCache(lang, oneDayCache);
		if (cachedData) {
			return $translationStore = cachedData;
		}

		const data = await fetchTranslationFiles(lang);
		setCache(lang, data);

		return $translationStore = data;
	}

	async function getImagesFiles(): Promise<any> {
		const cachedData = checkCache('images', fiftyMinCache);
		if (cachedData) {
			return $imageStore = cachedData;
		}
		const data = await fetchBlogImages();
		const mappedData = mappedImages(data);
		setCache('images', mappedData);

		return $imageStore = mappedData
	}

	onMount(async () => {
		try {
			const data = await fetchTranslationLanguages();
			await getImagesFiles();
			languages = data;
			currentLanguage = data.find((lang: Language) => lang.isDefault)?.code || 'es';
		} catch (err) {
			error = true;
		} finally {
			isLoading = false;
		}
	});

	$: if (currentLanguage) {
		getTranslationFiles(currentLanguage);
	}

	$: if ($translationStore) {
		menu = Object.entries(menuKeyToUrl).map(([key, value]) => ({
			title: $translationStore[key as TranslationKeys].title,
			url: `/${value}`
		}));
	}
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

		<Footer footerContent={$translationStore.footer} />
	{/if}
</div>

<style>
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
		max-width: 80rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 600px) {
		main {
			padding: 0 3rem;
		}
	}

	@media (min-width: 905px) {
		main {
			padding: 0 5rem;
		}
	}

	@media (min-width: 1240px) {
		main {
			padding: 0 6rem;
		}
	}
</style>
