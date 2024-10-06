<!-- <script lang="ts">
	import translationStore, { type TranslationSection } from '$lib/services/translationStore';
	import imageStore from '$lib/services/imageStore';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import { getAltText } from '../../lib/helpers/imageHelper';

	let aboutText: TranslationSection;

	$: if ($translationStore) {
		aboutText = $translationStore.about;
	}
</script>

<svelte:head>
	<title>{aboutText.title}</title>
	<meta name="description" content="Quién es Marta Gongora" />
</svelte:head>

<section>
	<div class="container effect">
		<div>
			{#each aboutText.paragraphs as paragraph}
				<p class="markdown">{@html DOMPurify.sanitize(marked(paragraph, { async: false }))}</p>
			{/each}
		</div>
		<img
			src={$imageStore.about.alt}
			alt={getAltText($imageStore.about.alt, aboutText)}
			aria-hidden="true"
		/>
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
</style> -->
