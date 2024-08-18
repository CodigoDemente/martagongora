<script lang="ts">
	import translationStore, { type TranslationSection } from '$lib/services/translationStore';
	import { marked } from 'marked';
	import DOMPurify from 'dompurify';

	let termsText: TranslationSection;

	$: if ($translationStore) {
		termsText = $translationStore.terms;
	}
</script>

<svelte:head>
	<title>{termsText.title}</title>
	<meta name="description" content="Términos y condiciones de uso" />
</svelte:head>

<section>
	<div class="container effect">
		<div>
			<p>{@html DOMPurify.sanitize(marked(termsText.content, { async: false }))}</p>
		</div>
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
			align-items: center;
		}
	}
</style>
