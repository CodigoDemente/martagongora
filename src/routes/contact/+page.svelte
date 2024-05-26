<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact info" />
</svelte:head>

<section>
	<h1>Contact</h1>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 0.6;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	label {
		font-size: 1rem;
	}

	input, textarea {
		width: 100%;
		padding: 1rem;
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