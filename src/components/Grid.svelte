<script lang="ts">
	import type { GridBlockData } from "../types/gridblock";

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
        <button on:click={() => openModal(images[0].id)}>
        <img src={images[0].src} alt={images[0].alt} />
        </button>
      {/if}
      {#if images.length === 2}
        <div class="duo">
          {#each images as {src, alt, id}}
          <button on:click={() => (openModal(id))}>
            <img src={src} alt={alt} />
          </button>
          {/each}
        </div>
      {/if}
      {#if images.length === 4}
        <div class="quatruo">
          {#each images as {src, alt, id}, i}
          {#if i === 0 || i === 3}
          <button on:click={() => (openModal(id))}>
            <img class="small" src={src} alt={alt} />
          </button>
          {:else}
          <button on:click={() => (openModal(id))}>
            <img class="large" src={src} alt={alt} />
          </button>
            {/if}
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

  .duo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .quatruo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .small {
    grid-row: span 1;
  }

  .large {
    grid-row: span 2;
  }

  img {
    width: 100%;
    /* height: auto; */
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
   
</style>
    
    

