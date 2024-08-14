<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { onMount } from 'svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import { fetchInstagramMedia } from '$lib/api/media';

	let pictures: any[] = [];
	let isLoading = true;
	let error = false;
	let morePictures = true;
	let nextId: string | undefined = undefined;

	let defaultModal = false;
	let pictureId = '';

	async function getImagesFromInstagram(id?: string) {
		isLoading = true;
		try {
			const { data, next } = await fetchInstagramMedia(id);
			const mappedData = data.map((picture) => {
				return {
					src: picture.media_url,
					alt: picture.media_type,
					id: picture.media_url
				};
			});
			morePictures = !!next;
			pictures = [...pictures, ...mappedData];
			nextId = next;
		} catch (err) {
			error = true;
		} finally {
			isLoading = false;
		}
	}

	onMount(async () => {
		getImagesFromInstagram();
	});

	const openModal = (id: string) => {
		pictureId = id;
		defaultModal = true;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page with gallery images" />
</svelte:head>

<section>
	{#each pictures as { src, alt, id }, i}
		<img on:click={() => openModal(id)} {src} {alt} />
	{/each}

	{#if !isLoading && !error && morePictures}
		<div
			use:inview={{ threshold: 0.5 }}
			on:inview_change={() => getImagesFromInstagram(nextId)}
		></div>
	{/if}

	{#if isLoading}
		<p>Loading...</p>
	{/if}

	<Gallery gallery={pictures} bind:defaultModal bind:pictureId />
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	img {
		width: 105px;
		height: 105px;
		object-fit: fill;
		cursor: pointer;
	}

	@media (min-width: 600px) {
		img {
			width: 160px;
			height: 160px;
		}
	}

	@media (min-width: 905px) {
		img {
			width: 195px;
			height: 195px;
		}
	}

	@media (min-width: 1240px) {
		img {
			width: 205px;
			height: 205px;
		}
	}
</style>
