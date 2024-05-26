<script lang="ts">
	import type { GridBlockData } from "../types/gridblock";

  export let pictures: GridBlockData[]; 
</script>

<div class="container">
  {#each pictures as {images}}
      {#if images.length === 1}
        <img src={images[0].src} alt={images[0].alt} />
      {/if}
      {#if images.length === 2}
        <div class="duo">
          {#each images as {src, alt}}
            <img src={src} alt={alt} />
          {/each}
        </div>
      {/if}
      {#if images.length === 4}
        <div class="quatruo">
          {#each images as {src, alt}, i}
          {#if i === 0 || i === 3}
            <img class="small" src={src} alt={alt} />
          {:else}
            <img class="large" src={src} alt={alt} />
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
    height: 100%;
  }

  .large {
    grid-row: span 2;
  }

  img {
    width: 100%;
    height: auto;
  }
   
</style>
    
    

