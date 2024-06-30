<script lang="ts"></script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact info" />
</svelte:head>

<section>
	<div class="img-container">
		<img src='src/lib/images/V_2023_07_01_Cristina y Luis-362.jpg' alt='contact-picture' />
	</div>
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

		<button type="submit">Submit</button>
	</form>

</section>


<style>
	section {
		padding-top: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8rem;
	}
	.img-container {
		width: 100%;
	}
	img {
		width: 100%;
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
	}

	textarea#message {
    	height: 150px;	
	}

	button {
		padding: 0.5rem 1rem;
		border-radius: 0.3rem;
		background-color: var(--color-primary);
		color: white;
		border: none;
		cursor: pointer;
	}

	button:hover {
		background-color: var(--color-primary-dark);
	}

</style>