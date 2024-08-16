<script lang="ts">
	import profileImg from '$lib/images/V_2023_07_01_Cristina y Luis-362.jpg';
	import translationStore, { type TranslationSection } from '$lib/services/translationStore';
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

<section>
	<!-- <SvelteMarkdown source={contactText.form.title}/> -->
	<div>
		<img src={profileImg} alt='contact-picture' />
		<Form content={contactText.form} />
	</div>
</section>


<style lang="scss">
	@import '../../styles/colors.scss';
	section {
		padding-top: 40px;
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

	@media (min-width: 600px) {
		section {
			padding-top: 80px;
		}	
	}

	@media (min-width: 905px) {
		div {
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