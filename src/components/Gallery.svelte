<script lang="ts">
    import { IconChevronRight, IconChevronLeft, IconX } from '@tabler/icons-svelte';
    export let gallery: {src: string, alt: string, id: string}[];
    export let pictureId: string;
    export let defaultModal: boolean;
    
    $: getPositionInArrayById = gallery.find((image) => image.id === pictureId);
    $: getIndexInArrayById = gallery.findIndex((image) => image.id === pictureId);
</script>

<div class={defaultModal ? 'modal-open': 'modal'}>
	<div class="modal-content">
     
  		{#if getPositionInArrayById}
      {#if gallery[getIndexInArrayById].id !== gallery[0].id}
       <button on:click={() => (pictureId = gallery[getIndexInArrayById - 1].id)} class="buttons previous">
        <IconChevronLeft size={45} stroke={1} />
      </button>
      {/if}
  		<img class="modal-image" src={gallery[getIndexInArrayById].src} alt={gallery[getIndexInArrayById].alt} />
       {#if gallery[getIndexInArrayById].id !== gallery[gallery.length - 1].id}
       <button on:click={() => (pictureId = gallery[getIndexInArrayById + 1].id)} class="buttons next">
        <IconChevronRight size={45} stroke={1} />
      </button>
      {/if}
  		{/if}
     
  		<button on:click={() => (defaultModal = false)} class="close"> <IconX size={30} stroke={2} /></button>
	</div>
</div>

<style>
    .modal {
    	display: none;
    }

    .modal-open {
      display: block;
      position: fixed;
      z-index: 10;
      padding-top: 10px;
      left: 0;
      top: 0;
    	width: 100%;
      height: 100%;
      overflow: auto; 
      background-color: rgb(0,0,0);
      background-color: rgba(0, 0, 0, 0.644); 
    }

    .modal-content {
      background-color: rgb(0,0,0);
      margin: auto;
      padding: 20px;
      width: 90%;
      height: 94%;
      display: flex;
      justify-content: center;
      position: relative
    }

    .modal-image {
      max-width: 85%;
      object-fit: contain;
    }

    .close {
      color: #625e5e;
      position: absolute;
      top: 10px;
      right: 10px;
      border: none;
        background: none;
        cursor: pointer;
    }

    .close:hover,
    .close:focus {
      color: #c2bebe;
      text-decoration: none;
      cursor: pointer;
    }

    .buttons {
      color: #625e5e;
      position: absolute;
      top: 50%;
      border: none;
      background: none;
      cursor: pointer;
      &.next {
        right: 0px;
      }
      &.previous {
        left: 0px;
      }
    }

    .buttons:hover {
      color: #c2bebe;
      cursor: pointer;
    }

    @media (min-width: 600px) {
      .modal-content {
      width: 90%;
      height: 94%;
      }

      .close {
      top: 20px;
      }
    }

</style>