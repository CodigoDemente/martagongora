<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { marked } from 'marked';
	import type { PageServerData } from './$types';
	import { t } from '$lib/translations';

	export let data: PageServerData;

	$: images = data.images;
</script>

<svelte:head>
	<title>{$t('home').title}</title>
	<meta name="description" content="Home page with images" />
</svelte:head>

<section>
	<div class="firstBlock">
		<img src={images[1].src} alt={$t('home')[images[1].alt]} />
		<p class="markdown">
			{@html DOMPurify.sanitize(marked($t('home').paragraphs[0], { async: false }))}
		</p>
	</div>
	<p class="centeredText">
		{@html DOMPurify.sanitize(marked($t('home').paragraphs[1], { async: false }))}
	</p>
	<div class="secondBlock">
		{#each [2, 3, 4] as num}
			<img src={images[num].src} alt={$t('home')[images[num].alt]} />
		{/each}
		<p class="markdown">
			{@html DOMPurify.sanitize(marked($t('home').paragraphs[2], { async: false }))}
		</p>
	</div>
	<div class="thirdBlock">
		{#each [5, 6] as num}
			<img src={images[num].src} alt={$t('home')[images[num].alt]} />
		{/each}
		<p class="markdown">
			{@html DOMPurify.sanitize(marked($t('home').paragraphs[3], { async: false }))}
		</p>
	</div>
	<div class="fourthBlock">
		{#each [7, 8] as num}
			<img src={images[num].src} alt={$t('home')[images[num].alt]} />
		{/each}
	</div>
	<div class="fifthBlock">
		{#each [9, 10] as num}
			<img src={images[num].src} alt={$t('home')[images[num].alt]} />
		{/each}
	</div>
	<div class="sixthBlock">
		<div>
			<img src={images[11].src} alt={$t('home')[images[11].alt]} />
			<img src={images[13].src} alt={$t('home')[images[13].alt]} />
		</div>
		<img src={images[12].src} alt={$t('home')[images[12].alt]} />
	</div>
	<div class="seventhBlock">
		<img src={images[14].src} alt={$t('home')[images[14].alt]} />
	</div>
	<div class="eightBlock">
		<img src={images[15].src} alt={$t('home')[images[15].alt]} />
		<img src={images[16].src} alt={$t('home')[images[16].alt]} />
	</div>
	<div class="ninthBlock">
		<img src={images[17].src} alt={$t('home')[images[17].alt]} />
	</div>
</section>

<style lang="scss">
	@import '../styles/colors.scss';

	section {
		padding-top: var(--padding-top-mobile);
		color: $neutral-70;
		line-height: 30px;
		letter-spacing: 0.1em;
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.firstBlock {
		display: flex;
		flex-direction: column-reverse;
		gap: 2rem;

		img {
			width: 100%;
		}
	}

	.centeredText {
		text-align: center;
	}

	.secondBlock {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		img {
			width: 70%;
		}

		img:nth-child(1) {
			padding-left: 0;
		}

		img:nth-child(2) {
			padding-left: 15%;
		}

		img:nth-child(3) {
			padding-left: 30%;
		}
	}

	.thirdBlock {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 11rem;

		img {
			width: 60%;
		}

		img:nth-child(1) {
			width: 33%;
		}

		p {
			position: absolute;
			bottom: 0;
			right: 0;
			text-align: end;
		}
	}

	.fourthBlock {
		display: flex;
		justify-content: space-between;
		align-items: center;

		img {
			width: 40%;
		}

		img:nth-child(1) {
			width: 33%;
		}
	}

	.fifthBlock {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		img {
			width: 48%;
		}
	}

	.sixthBlock {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 3rem;

			img {
				width: 80%;
			}

			img:nth-child(2) {
				width: 80%;
			}
		}

		img {
			width: 80%;
		}
	}

	.seventhBlock {
		display: flex;
		justify-content: center;

		img {
			width: 100%;
		}
	}

	.eightBlock {
		display: flex;
		justify-content: space-between;
		align-items: center;
		img:nth-child(1) {
			width: 50%;
		}

		img:nth-child(2) {
			width: 40%;
		}
	}

	.ninthBlock {
		display: flex;
		justify-content: center;
		padding-top: 1rem;

		img {
			width: 70%;
		}
	}

	// animacion para el scroll
	@media (prefers-reduced-motion: no-preference) {
		img {
			opacity: 0;
			scale: 0.8;
			animation: fade-in linear forwards;
			animation-timeline: view();
			animation-range: 50px 36%;
		}

		@keyframes fade-in {
			to {
				opacity: 1;
				scale: 1;
			}
		}
	}

	@media (min-width: 905px) {
		section {
			padding-top: var(--padding-top-desktop);
			line-height: 50px;
			gap: 5rem;
		}

		.firstBlock {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			img {
				width: 60%;
			}

			p {
				text-align: end;
			}
		}

		.secondBlock {
			display: grid;
			position: relative;
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;

			img {
				width: 100%;
			}

			img:nth-child(1) {
				padding-top: 0;
				padding-left: 0;
			}

			img:nth-child(2) {
				padding-top: 70%;
				padding-left: 0;
			}

			img:nth-child(3) {
				padding-top: 140%;
				padding-left: 0;
			}

			p {
				position: absolute;
				bottom: 5%;
				left: 0;
			}
		}

		.fifthBlock {
			flex-direction: row;
			justify-content: space-between;
			align-items: start;
			padding-left: 10rem;
			padding-right: 4rem;
			gap: none;

			img:nth-child(2) {
				width: 38%;
				margin-top: 30%;
			}

			img:nth-child(1) {
				width: 45%;
			}
		}

		.sixthBlock {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			gap: none;

			div {
				gap: 10rem;

				img {
					width: 80%;
				}

				img:nth-child(2) {
					width: 70%;
				}
			}

			img {
				width: 33%;
			}
		}

		.seventhBlock {
			img {
				width: 40%;
			}
		}

		.eightBlock {
			img:nth-child(1) {
				width: 45%;
			}

			img:nth-child(2) {
				width: 35%;
				padding-right: 5rem;
			}
		}

		.ninthBlock {
			padding-top: 5rem;

			img {
				width: 50%;
			}
		}
	}
</style>
