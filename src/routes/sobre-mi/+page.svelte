<script lang="ts">
	import translationStore, { type TranslationSection } from '$lib/services/translationStore';
	import SvelteMarkdown from 'svelte-markdown';

	let aboutText:TranslationSection;

	$: if ($translationStore) {
		aboutText = $translationStore.about;
	}

</script>

<svelte:head>
	<title>Sobre mí</title>
	<meta name="description" content="Quién es Marta Gongora" />
</svelte:head>

<section>
	<div class="horizontal effect">
	<div>
		{#each Object.values(aboutText.paragraphs) as paragraph}
		<SvelteMarkdown source={paragraph} />
		{/each}
	</div>
	
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.horizontal {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 20px;
		align-items: center;
	}

	img {
		max-width: 300px;
	}

	.effect {
		animation: fadeIn 3s;
	}
	p {
		font-size: 1em;
		line-height: 1.9em;
		text-align: justify;
	}	

	@keyframes fadeIn {
  		0% { opacity: 0; }
  		100% { opacity: 1; }
	}

	@media (min-width: 600px) {
		.horizontal {
			flex-direction: row-reverse;
			gap: 80px;
			align-items: center
		}

		img {
			max-width: 300px;
		}
	}

	@media (min-width: 1240px) {

		.horizontal {
			flex-direction: row-reverse;
			gap: 120px;
			align-items: end
		}
		img {
			max-width: 450px;
		}
	}
</style>


 