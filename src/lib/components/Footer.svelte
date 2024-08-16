<script lang="ts">
	import { IconMail, IconBrandInstagram } from "@tabler/icons-svelte";
	import type { TranslationSection } from "$lib/services/translationStore";

	export let footerContent: TranslationSection;
</script>

<footer>
	
	<p>{footerContent.copyright}</p>
	<div>
		<a href='https://martagongora.vercel.app/' target="_blank">
    	    <IconBrandInstagram size={25} stroke={1} />
		</a>
		<a href='mailto:contacto@martagongora.com'>
			<IconMail size={25} stroke={1} />
		</a>
	</div>
</footer>

<style lang="scss">
	@import '../../styles/colors.scss';
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 0rem;
		background-color: $neutral-90;
		color: white;
		margin-top: 60px;
		gap: 1rem;
	}

    p {
		margin: 0;
		font-size: 10px;
	}
    @media (min-width: 600px) {
		footer {
			margin-top: 80px;
		}

		p {
		    font-size: 13px;
		}
	}
</style>