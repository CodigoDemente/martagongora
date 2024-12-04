<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import type { OutputData } from '../../../types/OutputData';
	import { tImage } from '../../../lib/api/translations';

	export let data: OutputData;

	$: images = data.images;
	$: text = data.translations;
</script>

<svelte:head>
	<title>{text.title}</title>
	<meta name="description" content="Quién es Marta Gongora" />
</svelte:head>

<section>
	<div class="container effect">
		<div>
			{#each text.paragraphs || [] as paragraph}
				<p class="markdown">{@html DOMPurify.sanitize(marked(paragraph, { async: false }))}</p>
			{/each}
		</div>
		<img src={images.about.src} alt={tImage(images.about.alt || '', text)} aria-hidden="true" />
	</div>
</section>

<style lang="scss">
	@import '../../../styles/colors.scss';
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
