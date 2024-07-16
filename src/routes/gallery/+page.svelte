
<script lang="ts">
	import Gallery from "../../components/Gallery.svelte";
	import Grid from "../../components/Grid.svelte";
	import type { GridBlockData } from "../../types/gridblock";
	import img1 from '$lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg';
	import img2 from '$lib/images/V_2023_07_01_Cristina y Luis-362.jpg';
	import img3 from '$lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg';
	import img4 from '$lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg';
	

	let pictures : GridBlockData[] = [
		{
			images: [
				{
					src: img1,
					alt: 'Kitten 1',
					id: "1"
				},
				{
					src: img2,
					alt: 'Kitten 2',
					id: "2"
				},
				{
					src: img1,
					alt: 'Kitten 1',
					id: "12"
				},
			]
		},
		{
			images: [
				{
					src: img3,
					alt: 'Kitten 3',
					id: "3"
				},
				{
					src: img4,
					alt: 'Kitten 4',
					id: "4"
				}
			]
		},
		{
			images: [
				{
					src: img3,
					alt: 'Kitten 3',
					id: "5"
				},
				{
					src: img1,
					alt: 'Kitten 1',
					id: "6"
				},
				{
					src: img2,
					alt: 'Kitten 2',
					id: "7"
				},
				{
					src: img4,
					alt: 'Kitten 4',
					id: "8"
				}
			]
		},
			{
			images: [
				{
					src: img1,
					alt: 'Kitten 1',
					id: "14"
				},
				{
					src: img2,
					alt: 'Kitten 2',
					id: "16"
				}
			]
		},
		{
			images: [
				{
					src: img3,
					alt: 'Kitten 3',
					id: "9"
				}
			]
		}

	]
	
	const allImages = pictures.map((picture) => picture.images).flat();
	let defaultModal = false;
	let pictureId = "";

</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="Gallery images" />
</svelte:head>

<section>
	<Grid bind:pictureId bind:defaultModal pictures={pictures} />
	<Gallery gallery={allImages} bind:defaultModal bind:pictureId />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

</style>
