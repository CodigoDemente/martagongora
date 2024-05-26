<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';

	let menu = [
		{ title: 'Diary', url: '/' },
		{ title: 'Gallery', url: '/gallery' },
		{ title: 'About', url: '/about' },
		{ title: 'Contact', url: '/contact' }
	];
	
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<ul>
			{#each menu as { title, url }}
			<li>
				<a href={url}>{title}</a>
			</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		padding-block: 0.8rem;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: none;
	}

	@media (min-width: 600px) {
		nav {
			display: flex;
		}
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
</style>
