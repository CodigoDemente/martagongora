<script lang="ts">
	import { setLocale, locales } from '$lib/translations';

	export let currentLanguage: string;

	const updateLanguage = (lang: string) => {
		setLocale(lang);

		document.cookie = `lang=${lang}`;
	};
</script>

<li>
	{#each $locales as lang, i}
		<button class={lang === currentLanguage ? 'active' : ''} on:click={() => updateLanguage(lang)}>
			{lang}
		</button>
		{#if i < $locales.length - 1}
			<span> | </span>
		{/if}
	{/each}
</li>

<style lang="scss">
	@import '../../styles/colors.scss';

	li {
		position: absolute;
		bottom: 1rem;
	}
	button {
		border: none;
		background-color: transparent;
		text-transform: uppercase;
		cursor: pointer;
		color: $neutral-60;
		padding: 3px;

		&.active {
			color: $neutral-80;
			text-decoration: underline;
			text-underline-offset: 3px;
		}
	}

	@media (min-width: 600px) {
		li {
			position: static;
		}
	}
</style>
