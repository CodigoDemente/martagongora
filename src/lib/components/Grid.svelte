<script lang="ts">
	import type { InstagramImage } from '../../types/InstagramImage';

	export let pictures: InstagramImage[];
	export let defaultModal: boolean;
	export let pictureId: string;

	const openModal = (id: string) => {
		pictureId = id;
		defaultModal = true;
	};
</script>

<div class="container">
	{#each pictures as { src, alt, id }}
		<button on:click={() => openModal(id)}>
			<img {src} {alt} />
		</button>
	{/each}
</div>

<style>
	.container {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0.2rem;
	}

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
		padding: 0;
		margin: 0;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media (min-width: 600px) {
		.container {
			gap: 1rem;
		}
	}
</style>
