<script lang="ts"></script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact info" />
</svelte:head>

<section class="section-1">

	<img class="img-1" src='src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg' alt='contact-picture' />
	<form class="form-1">
		<label class="label-1" for="date">Date of the marriage</label>
		<input type="date" id="date" name="date" required>

		<label class="label-1" for="phone">Phone number</label>
		<input type="tel" id="phone" name="phone" required>

		<label class="label-1" for="assistant">Number of assistant</label>
		<input type="number" id="assistant" name="assistant" required>

		<label class="label-1" for="place">Place</label>
		<input type="text" id="place" name="place" required>

		<label class="label-1" for="message">Tell me more about you</label>
		<textarea id="message" name="message" required></textarea>

		<button class="button-1" type="submit">Enviar</button>
	</form>

	
	

</section>
<section class="section-2">
		<img class="img-2" src='src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg' alt='contact-picture' />
	<form class="form-2">
		<p>Fill the form to get into contact with me.</p>
		<label class="label-2" for="date">Date of the marriage</label>
		<input type="date" id="date" name="date" required>

		<label class="label-2" for="phone">Phone number</label>
		<input type="tel" id="phone" name="phone" required>

		<label class="label-2" for="assistant">Number of assistant</label>
		<input type="number" id="assistant" name="assistant" required>

		<label class="label-2" for="place">Place</label>
		<input type="text" id="place" name="place" required>

		<label class="label-2" for="message">Tell me more about you</label>
		<textarea id="message" name="message" required></textarea>

		<button class="button-2" type="submit">Enviar</button>
	</form>
</section>


<style lang="scss">
	.section-1 {
		position: relative;
		animation: fadeIn 3s;
	}

	p {
		font-size: 1.2rem;
		font-weight: 500;
		color: rgb(92, 89, 89);
		margin-bottom: 80px;
	}

	.section-2 {
		margin-top: 1000px;
		display:flex;
		flex-direction: column;
		gap: 80px;
		align-items: center;
	}
	.img-1 {
		display: none;
	}

	.img-2 {
		display: block;
		width: 100%;
		object-fit: cover;
		max-height: 900px;
	}

	.form-1 {
		position: absolute;
		top: 2%;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		background-color: rgba(0, 0, 0, 0.555);
		padding: 40px;
		border-radius: 8px;
	}

	.label-1 {
		font-size: 1rem;
		font-weight: 600;
		color: white;
	}

	.label-2 {
		font-size: 1rem;
		font-weight: 500;
		color: rgba(0, 0, 0, 0.774);
	}

	input, textarea {
		width: 100%;
		padding: 1rem;
		border-width: 0px 0px 1px 0px;
		border-radius: 6px;
		margin-bottom: 30px;
	}

	textarea#message {
    	height: 100px;	
	}

	.button-1 {
		padding: 0.5rem 2rem;
		background-color: transparent;
		border: 1px solid white;
		border-radius: 4px;
		color: white;
	}

	.button-2 {
		padding: 0.5rem 2rem;
		background-color: white;
		border: 1px solid black;
		border-radius: 4px;
		color: black;
	}

	.button-1:hover {
		background-color: white;
		color: black;
	}

	.button-2:hover {
		background-color: black;
		color: white;
	}

	@keyframes fadeIn {
  	0% { opacity: 0; }
  	100% { opacity: 1; }
		}

	@media (min-width: 520px) {

		.section-2 {
		margin-top: 80px;
		display:flex;
		flex-direction: row;
		gap: 120px;
		align-items: center;
	}

	.img-2 {
		display: block;
		width: 50%;
		object-fit: cover;
		max-height: 900px;
	}
		.img-1 {
			display: block;
			width: 100%;
			object-fit: cover;
			min-height: 780px;
		}
	}
	@media (min-width: 1200px) {

	.section-1 {
		position: relative;
	}

	
	.img-1 {
		width: 100%;
		display: block;
	}
	.form-1 {
		position: absolute;
		top: 1%;
		left: 0;
		width: 40%;
	}

	}

</style>