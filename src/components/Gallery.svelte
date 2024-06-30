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
      <button on:click={() => (pictureId = gallery[getIndexInArrayById - 1].id)} class="buttons previous">
        <IconChevronLeft size={55} stroke={1} />
      </button>
  		{#if getPositionInArrayById}
  		<img class="modal-image" src={gallery[getIndexInArrayById].src} alt={gallery[getIndexInArrayById].alt} />
  		{/if}
      <button on:click={() => (pictureId = gallery[getIndexInArrayById + 1].id)} class="buttons next">
        <IconChevronRight size={55} stroke={1} />
      </button>
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
      z-index: 1;
      padding-top: 20px;
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
      display: flex;
      justify-content: center;
      position: relative
    }

    .modal-image {
     max-height: 92vh;
    }

    .close {
      color: #625e5e;
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 30px;
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
      font-size: 30px;
      border: none;
      background: none;
      cursor: pointer;
      &.next {
        right: 20px;
      }
      &.previous {
        left: 20px;
      }
    }

    .buttons:hover {
      color: #c2bebe;
      cursor: pointer;
    }

</style>