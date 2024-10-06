<!-- <script lang="ts">
	import translationStore, { type TranslationSection } from '$lib/services/translationStore';
	import imageStore from '$lib/services/imageStore';
	import Form from '$lib/components/Form.svelte';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';
	import { getAltText } from '../../lib/helpers/imageHelper';

	let contactText: TranslationSection;

	$: if ($translationStore) {
		contactText = $translationStore.contact;
	}
</script>

<svelte:head>
	<title>{contactText.title}</title>
	<meta name="description" content="Información para contactar" />
</svelte:head>

<section class="effect">
	<p class="markdown">
		{@html DOMPurify.sanitize(marked(contactText.form.title, { async: false }))}
	</p>
	<div>
		<img
			src={$imageStore.contact.src}
			alt={getAltText($imageStore.contact.alt, contactText)}
			aria-hidden="true"
		/>
		<Form content={contactText.form} />
	</div>
</section>

<style lang="scss">
	@import '../../styles/colors.scss';
	section {
		padding-top: var(--padding-top-mobile);
		display: flex;
		flex-direction: column;
		gap: 40px;
		align-items: start;
		color: $neutral-80;
	}

	div {
		display: flex;
		flex-direction: column-reverse;
		gap: 5rem;
		align-items: center;
	}

	img {
		display: block;
		width: 100%;
		object-fit: cover;
		max-height: 900px;
	}

	.effect {
		animation: fadeIn 2s;
	}

	@media (min-width: 905px) {
		section {
			padding-top: var(--padding-top-desktop);
		}

		div {
			width: 100%;
			display: flex;
			flex-direction: row;
			gap: 5rem;
			align-items: start;
		}
		img {
			display: block;
			width: 40%;
			object-fit: cover;
		}
	}

	@media (min-width: 1240px) {
		img {
			width: 50%;
		}
	}
</style> -->
