<script lang="ts">
	import Footer from '../components/Footer.svelte';
import Header from '../components/Header.svelte';
	import type { MenuEntry } from '../types/menu';
	import './styles.css';



	let menu : MenuEntry[] = [
		{ title: 'Diary', url: '/' },
		{ title: 'Gallery', url: '/gallery' },
		{ title: 'About', url: '/about' },
		{ title: 'Contact', url: '/contact' }
	];

	let footerContent = {
		links: [
			{ title: 'Questions', url: '/questions' },
			{ title: 'Contact', url: '/contact' }
		],
		text: 'Marta Gongora Fotografía ©  Todos los derechos reservados/All rights reserved.'
	};
	
</script>

<div class="app">
	<Header menu={menu}/>

	<main>
		<slot />
	</main>

	<Footer {footerContent}/>
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
		padding: 0 1rem;
		width: 100%;
		max-width: 90rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	
	@media (min-width: 600px) {
		main {
			padding: 0 3rem;
		}

	}

	@media (min-width: 905px) {
		main {
			padding: 0 5rem;
		}
	}

	@media (min-width: 1240px) {
		main {
			padding: 0 6rem;
		}
	}
</style>
