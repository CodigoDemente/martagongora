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
		<p>Marta Gongora Fotografía ©  Todos los derechos reservados/All rights reserved.</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
