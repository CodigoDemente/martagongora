<script lang="ts">
	import { fetchInstagramMedia } from '$lib/api/media';
	import Gallery from '$lib/components/Gallery.svelte';
	import Grid from '$lib/components/Grid.svelte';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';
	import type { Image } from '../../types/image';
	import Loader from '$lib/components/Loader.svelte';

	let pictures: Image[] = [];
	let isLoading = true;
	let error = false;
	let moreImages = true;
	let nextId: string | undefined = undefined;

	let defaultModal = false;
	let pictureId = '';

	async function getImagesFromInstagram(id?: string) {
		isLoading = true;
		try {
			const { data, next } = await fetchInstagramMedia(id);
			moreImages = !!next;
  			const mappedData = data.map((picture) => {
                return {
                    src: picture.media_url,
                    alt: picture.media_type,
                    id: picture.media_url
                };
            });
            pictures = [...pictures, ...mappedData];
            nextId = next;
		} catch (err) {
			error = true;
		} finally {
			isLoading = false;
		}
	}

	onMount(async () => {
		getImagesFromInstagram(nextId);
	});
</script>

<svelte:head>
	<title>Galería</title>
	<meta name="description" content="Feed instagram" />
</svelte:head>

<section>
	<Grid bind:pictureId bind:defaultModal {pictures} />
	<Gallery gallery={pictures} bind:defaultModal bind:pictureId />

	{#if !isLoading && !error && moreImages}
		<div
			use:inview={{ threshold: 0.5 }}
			on:inview_enter={(event) => getImagesFromInstagram(nextId)}
		></div>
	{/if}

	{#if isLoading}
		<Loader />
	{/if}
</section>

<style>
</style>
