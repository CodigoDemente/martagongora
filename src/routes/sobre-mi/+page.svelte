<script lang="ts">
	import { type TranslationSection } from '$lib/services/translationStore';
	import { getAltText } from '../../lib/helpers/imageHelper';

	export let data;

	let aboutText: TranslationSection = data.translations;
	let aboutImage = data.images;
</script>

<svelte:head>
	<title>{aboutText.title}</title>
	<meta name="description" content="Quién es Marta Gongora" />
</svelte:head>

<section>
	<div class="container effect">
		<div>
			{#each aboutText.paragraphs as paragraph}
				<p class="markdown">{paragraph}</p>
			{/each}
		</div>
		<img src={aboutImage.src} alt={getAltText(aboutImage.alt, aboutText)} aria-hidden="true" />
	</div>
</section>

<style lang="scss">
	@import '../../styles/colors.scss';
	section {
		padding-top: var(--padding-top-mobile);
		color: $neutral-80;
		text-align: justify;
	}
	.container {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;
	}

	img {
		max-width: 300px;
	}

	.effect {
		animation: fadeIn 2s;
	}

	@media (min-width: 905px) {
		section {
			padding-top: var(--padding-top-desktop);
		}

		.container {
			flex-direction: row;
			gap: 120px;
			align-items: start;
		}
		img {
			max-width: 400px;
		}
	}
</style>
