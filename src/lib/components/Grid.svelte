<script lang="ts">
	import type { GridBlockData } from "../../types/gridblock";

  export let pictures: GridBlockData[]; 
  export let defaultModal: boolean;
  export let pictureId: string;

  const openModal = (id:string) => {
    pictureId = id;
    defaultModal = true;
  }
</script>

<div class="container">
  {#each pictures as {images}}
      {#if images.length === 1}
        <img on:click={() => openModal(images[0].id)} src={images[0].src} alt={images[0].alt} />
      {/if}
      {#if images.length === 4}
        <div class="mosaic">
          {#each images as {src, alt, id}, i}
          {#if i === 0 || i === 3}
            <img on:click={() => (openModal(id))} class="small" src={src} alt={alt} />
          {:else}
            <img on:click={() => (openModal(id))} class="large" src={src} alt={alt} />
            {/if}
          {/each}
        </div>
      {/if}
      {#if images.length > 1 && images.length < 4}
        <div class="line">
          {#each images as {src, alt, id}}
            <img on:click={() => (openModal(id))} src={src} alt={alt} />
          {/each}
        </div>
      {/if}
    
  {/each}
</div>
      
  

<style>
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

 

  .small {
    grid-row: span 1;
    height: 100%;
  }

  .large {
    grid-row: span 2;
  }

  img {
    width: 100%;
    cursor: pointer;
    /* height: auto; */
  }

  @media (min-width: 600px) {
	.line {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .mosaic {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
  }
	}
   
</style>
    
    

