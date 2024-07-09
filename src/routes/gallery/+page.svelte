
<script lang="ts">
	import Gallery from "../../components/Gallery.svelte";
	import Grid from "../../components/Grid.svelte";
	import type { GridBlockData } from "../../types/gridblock";
	

	let pictures : GridBlockData[] = [
		{
			images: [
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1',
					id: "1"
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2',
					id: "2"
				},
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1',
					id: "12"
				},
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3',
					id: "3"
				},
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg',
					alt: 'Kitten 4',
					id: "4"
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3',
					id: "5"
				},
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1',
					id: "6"
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2',
					id: "7"
				},
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg',
					alt: 'Kitten 4',
					id: "8"
				}
			]
		},
			{
			images: [
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1',
					id: "14"
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2',
					id: "16"
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
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
		padding-top: 60px;
	}

</style>
