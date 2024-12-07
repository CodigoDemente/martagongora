<script lang="ts">
	import logo from '$lib/images/logo.webp';
	import { IconMenu, IconX } from '@tabler/icons-svelte';
	import LanguageSelector from './LanguageSelector.svelte';
	import { onMount } from 'svelte';

	let active: string = '';

	onMount(() => {
		active = window.location.pathname.split('/').pop() || '';
	});

	export let menu: { [key: string]: string };
	export let activeLang: string;
	export let defaultLocale: string;
	export let locales: string[];

	const orderedMenu = {
		gallery: menu.gallery,
		about: menu.about,
		contact: menu.contact
	};

	const menuKeyToUrl: { [key: string]: string } = {
		gallery: 'galeria',
		about: 'sobre-mi',
		contact: 'contacto'
	};

	$: open = false;
</script>

<header>
	<nav>
		<a
			class="logo"
			on:click={() => (active = '')}
			href={activeLang === defaultLocale ? '/' : `/${activeLang}`}
		>
			<img src={logo} alt="Logo" />
		</a>
		<ul class={open ? 'list-open' : 'list'}>
			{#each Object.entries(orderedMenu) as [key, text]}
				<li>
					<a
						class={active === menuKeyToUrl[key] ? 'active' : ''}
						on:click={() => (active = menuKeyToUrl[key] || '')}
						href={activeLang === defaultLocale
							? `/${menuKeyToUrl[key]}`
							: `/${activeLang}/${menuKeyToUrl[key]}`}>{text}</a
					>
				</li>
			{/each}
			<LanguageSelector {activeLang} {defaultLocale} {locales} />
		</ul>
	</nav>

	<button on:click={() => (open = !open)}>
		{#if open}
			<IconX size={25} stroke={1} />
		{:else}
			<IconMenu size={25} stroke={1} />
		{/if}
	</button>
</header>

<style lang="scss">
	@import '../../styles/colors.scss';
	header {
		height: 80px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: var(--font-title);
	}

	img {
		width: 14rem;
	}

	.list {
		display: none;
	}

	.list-open {
		position: fixed;
		top: 0;
		left: 0;
		padding: 2rem 0 5rem;
		padding-left: 1rem;
		margin: 0;
		height: 12rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		list-style: none;
		background-color: white;
		width: 100%;
		z-index: 5;
	}

	li {
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		color: $neutral-80;
		font-weight: 400;
		font-size: 1.2rem;
		letter-spacing: 0.12em;
		text-decoration: none;
		transition: color 0.2s linear;

		&:hover,
		&.active {
			color: $neutral-90;
			text-decoration: underline;
			text-underline-offset: 5px;
		}
	}

	button {
		right: 1rem;
		top: 1rem;
		padding: 0;
		position: absolute;
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
		z-index: 10;
	}

	@media (min-width: 600px) {
		header {
			position: none;
		}
		nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			max-width: 34rem;
			padding: 0;
			margin: 0 auto;
		}
		nav a {
			font-size: 1rem;
			letter-spacing: 0.1em;
			font-weight: 500;
			text-transform: uppercase;
			padding: 0;
		}

		button {
			display: none;
		}

		.list {
			padding: 0;
			margin: 0;
			height: 3em;
			gap: 0.8rem;
			display: flex;
			justify-content: end;
			align-items: center;
			list-style: none;
			position: relative;
			flex-direction: row;
			background-color: transparent;
			z-index: 0;
		}
	}

	@media (min-width: 905px) {
		header {
			height: 120px;
		}

		img {
			width: 20rem;
		}

		.list {
			gap: 2rem;
		}

		nav {
			max-width: 52.5rem;
			padding: 0;
		}
		nav a {
			font-size: 1.2rem;
			letter-spacing: 0.17em;
			font-weight: 500;
		}
	}

	@media (min-width: 1024px) {
		nav {
			max-width: 62rem;
			padding: 0;
		}
	}

	@media (min-width: 1240px) {
		.list {
			gap: 3rem;
		}
		nav {
			max-width: 72rem;
			padding: 0;
		}
	}

	@media (min-width: 1480px) {
		.list {
			gap: 4rem;
		}
		nav {
			max-width: 90rem;
			padding: 0;
		}
	}
</style>
