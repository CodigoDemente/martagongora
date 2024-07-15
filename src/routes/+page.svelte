
<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { onMount } from 'svelte';

	let pictures: any[] = [];
    let isLoading = true;
    let error = false;
    let nextId:string|null = null;

    const getImagesFromInstagram = async (id:string|null) => {
        let url = 'https://marta.cloud.alesanchez.es/instagram/media';
        if (id) {
            url += `?next=${id}`;
        }

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });

         const { data, next } = await res.json();
       if (Array.isArray(data)) {
            pictures = [...pictures, ...data];
            nextId = next;
            isLoading = false;
        } else {
          error = true;
          isLoading = false;
        }
    }

	
    onMount(async () => {
        getImagesFromInstagram(nextId);
    });

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page with gallery images" />
</svelte:head>

<section>
    {#each pictures as {media_url, media_type}, i}
        <img src={media_url} alt={media_type} />  
    {/each}
  

    {#if !isLoading && !error}
    <div use:inview={{ threshold: 0.5}} on:inview_change={() => getImagesFromInstagram(nextId)}>
        Loading more pictures...
    </div>
    {/if}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
        justify-content: center;
	}

    img {
        width: 200px;
        height: 200px;
        margin: 10px;
        object-fit: fill;
    }
</style>
