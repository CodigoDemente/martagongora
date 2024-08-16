<script lang="ts">
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page with gallery images" />
</svelte:head>

<section>HOME SWEET HOME</section>

<style>
	section {
		padding-top: var(--padding-top-mobile);
	}

	@media (min-width: 905px) {
		section {
			padding-top: var(--padding-top-desktop);
		}
	}
</style>
