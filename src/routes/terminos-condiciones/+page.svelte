<script lang="ts">
	import { marked } from 'marked';

	export let data;
</script>

<svelte:head>
	<title>{marked(data.text.title)}</title>
	<meta name="description" content="Términos y condiciones de uso" />
</svelte:head>

<section>
	<div class="container effect">
		<div>
			<p>{marked(data.text.content)}</p>
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
