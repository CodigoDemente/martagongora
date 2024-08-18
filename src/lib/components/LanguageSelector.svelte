<script lang="ts">
	import type { Language } from '../../types/language';

	export let languages: Language[];
	export let currentLanguage: string;

	const updateLanguage = (lang: string) => {
		currentLanguage = lang;
	};
</script>

<li>
	{#each languages as lang, i}
		<button
			class={lang.code === currentLanguage ? 'active' : ''}
			on:click={() => updateLanguage(lang.code)}
		>
			{lang.code}
		</button>
		{#if i < languages.length - 1}
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
