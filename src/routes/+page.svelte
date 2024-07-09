
<script lang="ts">
	import { onMount } from 'svelte';

	let pictures:any;

	
    onMount(async () => {
        fetch('https://marta.cloud.alesanchez.es/instagram/media',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            pictures = data;
        }).catch(error => {
            console.error('Error:', error);
        });
    });
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page with gallery images" />
</svelte:head>

<section>
	{#if pictures !== undefined}
	<p>BIEN</p>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
