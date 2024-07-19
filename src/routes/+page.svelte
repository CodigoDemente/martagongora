
<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { onMount } from 'svelte';
	import Gallery from '../components/Gallery.svelte';

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
            const mappedData = data.map((picture)=> {
                return {
                    src: picture.media_url,
                    alt: picture.media_type,
                    id: picture.media_url
                }
            });
            pictures = [...pictures, ...mappedData];
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
    
    let defaultModal = false;
	let pictureId = "";

    const openModal = (id:string) => {
        pictureId = id;
        defaultModal = true;
    }

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page with gallery images" />
</svelte:head>

<section>
    {#each pictures as {src, alt, id}, i}
        <img on:click={() => (openModal(id))} src={src} alt={alt} />  
    {/each}
  

    {#if !isLoading && !error}
    <div use:inview={{ threshold: 0.5}} on:inview_change={() => getImagesFromInstagram(nextId)}>
        Loading more pictures...
    </div>
    {/if}
    <Gallery gallery={pictures} bind:defaultModal bind:pictureId />
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
        justify-content: center;
	}

    img {
        width: 105px;
        height: 105px;
        object-fit: fill;
        cursor: pointer;
    }

    @media (min-width: 600px) {
        img {
            width: 160px;
            height: 160px;
        }
	}

	@media (min-width: 905px) {
        img {
            width: 195px;
            height: 195px;
        }	
	}

    @media (min-width: 1240px) {
        img {
            width: 205px;
            height: 205px;
        }	
	}
</style>
