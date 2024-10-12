<script lang="ts">
	import { marked } from 'marked';
	import DOMPurify from 'isomorphic-dompurify';
	import Form from '$lib/components/Form.svelte';
	import { t, translations } from '$lib/translations';
	import type { PageData } from './$types';

	export let data: PageData;

	$: images = data.images;
	$: locale = data.locale;
</script>

<svelte:head>
	<title>{$t('contact').title}</title>
	<meta name="description" content="Información para contactar" />
</svelte:head>

<section class="effect">
	<p class="markdown">
		{@html DOMPurify.sanitize(marked($t('contact').form.title, { async: false }))}
	</p>
	<div>
		<img src={images.contact.src} alt={$t('contact')[images.contact.alt]} aria-hidden="true" />
		<Form content={$t('contact').form} />
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
</style>
