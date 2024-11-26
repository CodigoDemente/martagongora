<script lang="ts">
	export let activeLang: string;
	export let defaultLocale: string;
	export let locales: string[];

	const updateLanguage = (locale: string) => {
		const { origin, pathname } = window.location;
		const pathSegments = pathname.split('/').filter(Boolean);

		let newPath = locale === defaultLocale ? '' : `/${locale}`;
		if (pathSegments.length > 0 && !(pathSegments.length === 1 && pathSegments[0] === activeLang)) {
			newPath += `/${pathSegments[pathSegments.length - 1]}`;
		}

		window.location.href = `${origin}${newPath}`;
	};
</script>

<li>
	{#each locales as locale, i}
		<button class={locale === activeLang ? 'active' : ''} on:click={() => updateLanguage(locale)}>
			{locale}
		</button>
		{#if i < locales.length - 1}
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
