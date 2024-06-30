<script lang="ts">
    export let gallery: {src: string, alt: string, id: string}[];
    export let pictureId: string;
    export let defaultModal: boolean;
    
    $: getPositionInArrayById = gallery.find((image) => image.id === pictureId);
</script>

<div class={defaultModal ? 'modal-open': 'modal'}>
	<div class="modal-content">
  		{#if getPositionInArrayById}
  		<img class="modal-image" src={getPositionInArrayById.src} alt={getPositionInArrayById.alt} />
  		{/if}
  		<button on:click={() => (defaultModal = false)} class="close">&times;</button>
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
      color: #302f2f;
      position: absolute;
      top: 0;
      right: 20px;
      font-size: 30px;
      border: none;
        background: none;
        cursor: pointer;
    }

    .close:hover,
    .close:focus {
      color: #aaaaaa;
      text-decoration: none;
      cursor: pointer;
    }
</style>