<script lang="ts">
	export let footerContent: { links: { title: string, url: string }[], text: string };
</script>

<footer>
	<div class="links">
        {#each footerContent.links as { title, url }}
	        • <a href={url}>{title}</a>
        {/each}
	</div>
	<p>{footerContent.text}</p>
</footer>

<style>
    footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.5rem 1rem;
		background-color: rgb(43, 41, 41);
		color: white;
		margin-top: 60px;
		gap: 1rem;
	}

    .links {
		display: flex;
		width: 100%;
		max-width: 50rem;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

    p {
		margin: 0;
		font-size: 10px;
	}


    a {
		font-size: 12px;
		color: white;
	}

	a:hover {
		text-decoration: underline;
	}

    @media (min-width: 600px) {
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