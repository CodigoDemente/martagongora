<script lang="ts"></script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact info" />
</svelte:head>

<section>
	<div class="img-container">
		<img src='src/lib/images/H_2023_03_11_Isabel y JoseÌ_alta-688.jpg' alt='contact-picture' />
		<form>
		<label for="date">Date of the marriage</label>
		<input type="date" id="date" name="date" required>

		<label for="phone">Phone number</label>
		<input type="tel" id="phone" name="phone" required>

		<label for="assistant">Number of assistant</label>
		<input type="number" id="assistant" name="assistant" required>

		<label for="place">Place</label>
		<input type="text" id="place" name="place" required>

		<label for="message">Tell me more about you</label>
		<textarea id="message" name="message" required></textarea>

		<button type="submit">Enviar</button>
	</form>
	</div>
	

</section>


<style lang="scss">
	section {
		padding-top: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8rem;
		animation: fadeIn 3s;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
		background-image:
    linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	label {
		font-size: 1rem;
	}

	input, textarea {
		width: 100%;
		padding: 1rem;
		border-width: 0px 0px 1px 0px;
		border-radius: 6px;
	}

	textarea#message {
    	height: 150px;	
	}

	button {
		padding: 0.5rem 2rem;
		background-color: transparent;
		border: 1px solid var(--color-primary);
		border-radius: 4px;
	}

	button:hover {
		background-color: var(--color-primary-dark);
	}

	@keyframes fadeIn {
  	0% { opacity: 0; }
  	100% { opacity: 1; }
		}

</style>