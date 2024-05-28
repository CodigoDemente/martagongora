<script lang="ts">
	import logo from '$lib/images/svelte-logo.svg';
	import type { MenuEntry } from '../types/menu';
	import { IconMenu, IconX } from '@tabler/icons-svelte';
	
	export let menu : MenuEntry[];
	$: open = false;
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class={open ? 'nav-open' : 'nav'}>
		<ul>
			{#each menu as { title, url }}
			<li>
				<a on:click={() => open = false} href={url}>{title}</a>
			</li>
			{/each}
		</ul>
	</nav>

	<button on:click={() => open = !open}>
	{#if open}
        <IconX size={25} stroke={1} />
    {:else}
        <IconMenu size={25} stroke={1} />
    {/if}
	</button>
</header>

<style>
	header {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-top: 1.5rem;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: none;
	}

	.nav-open {
		display: block;
		position: relative;
		width: 100%;
		height: 100%;
	}


	ul {
		position: fixed;
		top: 0;
		gap: 2rem;
		padding: 4rem 0;
		margin: 0;
		height: 3em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-color: white;
		width: 100%;
		height: 30%;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 600;
		text-transform: uppercase;
		font-size: 1rem;
		letter-spacing: 0.12em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	button {
		right: 1rem;
		position: absolute;
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
	}

	@media (min-width: 600px) {
		nav {
			display: flex;
		}

		button {
			display: none;
		}

		ul {
			gap: 2rem;
			padding: 0;
			margin: 0;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			position: relative;
			flex-direction: row;
			background-color: transparent;
		}
	}
</style>
