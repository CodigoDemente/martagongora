<script>
	import Grid from "../../components/Grid.svelte";

  	let defaultModal = false;

	let pictures = [
		{
			images: [
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1'
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2'
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3'
				},
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg',
					alt: 'Kitten 4'
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3'
				},
				{
					src: 'src/lib/images/V_2023_03_11_Isabel y JoseÌ_alta-723.jpg',
					alt: 'Kitten 1'
				},
				{
					src: 'src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg',
					alt: 'Kitten 2'
				},
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg',
					alt: 'Kitten 4'
				}
			]
		},
		{
			images: [
				{
					src: 'src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-367.jpg',
					alt: 'Kitten 3'
				}
			]
		}

	]
</script>

<svelte:head>
	<title>Gallery</title>
	<meta name="description" content="Gallery images" />
</svelte:head>

<section>
	<Grid pictures={pictures} />
	<h2>Modal Example</h2>

<!-- Trigger/Open The Modal -->
<button on:click={() => (defaultModal = true)}>Open Modal</button>

<!-- The Modal -->
<div id="myModal" class={defaultModal ? 'modal-open': 'modal'}>

  <!-- Modal content -->
  <div class="modal-content">
    <span on:click={() => (defaultModal = false)} class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	h1 {
		width: 100%;
	}

.modal {
	display: none; /* Hidden by default */
}

.modal-open {
  display: block;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
