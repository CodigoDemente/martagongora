<script lang="ts">
	import img1 from '$lib/images/profile-1.jpeg';
	import img2 from '$lib/images/profile-2.jpeg';
	import translationStore from '$lib/services/translationStore';

	let aboutText:any;

	$: if ($translationStore) {
		aboutText = $translationStore.about;
	}

</script>

<svelte:head>
	<title>About me</title>
	<meta name="description" content="About Marta" />
</svelte:head>

<section>
	<div class="horizontal effect">
		<p>
			{#each Object.values(aboutText.paragraphs) as paragraph}
				{paragraph}
				<br>
				<br>
			{/each}
		</p>
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


 