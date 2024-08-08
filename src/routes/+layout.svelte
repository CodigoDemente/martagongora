<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import type { MenuEntry } from '../types/menu';
	import type { Language } from '../types/language';
	import { fetchTranslationFiles, fetchTranslationLanguages } from '$lib/api/translations';
	import { checkCache, setCache } from '$lib/services/localStorage';
	import './styles.css';

	let isLoading:boolean = true;
    let error:boolean = false;
	let currentLanguage:string = 'es';
	let languages:Language[] = [];
	

	let menu : MenuEntry[] = [
		{ title: 'Diary', url: '/' },
		{ title: 'Gallery', url: '/gallery' },
		{ title: 'About', url: '/about' },
		{ title: 'Contact', url: '/contact' }
	];

	let footerContent = {
		links: [
			{ title: 'Questions', url: '/questions' },
			{ title: 'Contact', url: '/contact' }
		],
		text: 'Marta Gongora Fotografía ©  Todos los derechos reservados/All rights reserved.'
	};

	export async function getTranslationFiles(lang: string): Promise<any> {
    	const cachedData = checkCache(lang);
    	if (cachedData) {
    	    return cachedData;
    	}

    	const data = await fetchTranslationFiles(lang);
    	setCache(lang, data);
		
    	return data;
	}	

		
    onMount(async () => {
        try {
			const data = await fetchTranslationLanguages();
            languages = data; 
			currentLanguage = data.find((lang:Language) => lang.isDefault)?.code || 'es';
        } catch (err) {
            error = true;
        } finally {
            isLoading = false;
        }
    });

	$: if (currentLanguage) {
		getTranslationFiles(currentLanguage)
	}

</script>

<div class="app">
	{#if isLoading}
		<p>Loading...</p>
	{:else if error}
		<p>There was an error</p>
	{:else}
		<Header {menu} bind:currentLanguage {languages}/>

		<main>
			<slot />
		</main>

		<Footer {footerContent}/>
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
		max-width: 90rem;
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
