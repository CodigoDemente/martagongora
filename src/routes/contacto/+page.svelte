<script lang="ts">
	import profileImg from '$lib/images/V_2023_07_01_Cristina y Luis-362.jpg';
	import translationStore, { type TranslationSection } from '$lib/services/translationStore';
	import imageStore from '$lib/services/imageStore';
	import Form from '$lib/components/Form.svelte';
	import SvelteMarkdown from 'svelte-markdown';
	let contactText: TranslationSection

	$: if ($translationStore) {
		contactText = $translationStore.contact;
	}
</script>

<svelte:head>
	<title>Contacto</title>
	<meta name="description" content="Información para contactar" />
</svelte:head>

<section class="effect">
	<!-- <SvelteMarkdown source={contactText.form.title}/> -->
	<div>
		<img src={$imageStore.contact} alt="foto de una boda" aria-hidden="true" />
		<Form content={contactText.form} />
	</div>
</section>


<style lang="scss">
	@import '../../styles/colors.scss';
	section {
		padding-top: var(--padding-top-mobile);
		display:flex;
		flex-direction: column;
		gap: 40px;
		align-items: center;
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