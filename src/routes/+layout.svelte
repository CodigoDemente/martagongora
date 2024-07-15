<script lang="ts">
	import Header from '../components/Header.svelte';
	import type { MenuEntry } from '../types/menu';
	import './styles.css';



	let menu : MenuEntry[] = [
		{ title: 'Diary', url: '/' },
		{ title: 'Gallery', url: '/gallery' },
		{ title: 'About', url: '/about' },
		{ title: 'Contact', url: '/contact' }
	];
	
</script>

<div class="app">
	<Header menu={menu}/>

	<main>
		<slot />
	</main>

	<footer>
		<div class="links">
		• 
		<a href="/questions">Questions</a>
		• 
		<a href="/contact">Contact</a>
		</div>
		<p>Marta Gongora Fotografía ©  Todos los derechos reservados/All rights reserved.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	p {
		margin: 0;
		font-size: 10px;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0 3rem;
		width: 100%;
		max-width: 90rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 3rem;
		background-color: rgb(43, 41, 41);
		color: white;
		margin-top: 60px;
		gap: 2.5rem;
	}

	a {
		font-size: 12px;
		color: white;
	}

	a:hover {
		text-decoration: underline;
	}

	.links {
		display: flex;
		width: 100%;
		max-width: 50rem;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	@media (min-width: 520px) {
		footer {
			margin-top: 80px;
			font-size: 12px;
		}

		a {
		font-size: 14px;
		}

		p {
		font-size: 13px;
		}
	}
</style>
