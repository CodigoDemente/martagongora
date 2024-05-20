<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Grid from './Grid.svelte';

	let pictures = [
		{
			images: [
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1'
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2'
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3'
				},
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg',
					alt: 'Kitten 4'
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3'
				},
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1'
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2'
				},
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg',
					alt: 'Kitten 4'
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3'
				}
			]
		}

	]
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Grid pictures={pictures} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
