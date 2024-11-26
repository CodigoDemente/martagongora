<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import type { OutputData } from '../../../types/OutputData';

	export let data: OutputData;

	$: text = data.translations;
</script>

<svelte:head>
	<title>{text.title}</title>
	<meta name="description" content="Términos y condiciones de uso" />
</svelte:head>

<section>
	<div class="container effect">
		<div>
			<p>{@html DOMPurify.sanitize(marked(text.content, { async: false }))}</p>
		</div>
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
